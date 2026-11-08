import { Hono } from 'hono'

// The Worker in front of the static site. Add API routes here; everything
// else falls through to the built assets (single-page-application mode).
type Env = {
  ASSETS: Fetcher
  // ClearPath Business workspace (innotelinc/clearpath-business). Optional: with
  // no URL configured the form still validates and acknowledges.
  CLEARPATH_INTAKE_URL?: string
  CLEARPATH_SHARED_SECRET?: string
}

type Intake = {
  name?: string
  email?: string
  phone?: string
  business?: string
  interest?: string
  source?: string
}

const interests = new Set(['Business credit build', 'Personal credit repair', 'Both programs'])

async function hmacHex(secret: string, body: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body))
  return [...new Uint8Array(signature)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Hand the lead to the ClearPath Business workspace at
 * POST {CLEARPATH_INTAKE_URL}/api/denovo/leads, signed the same way Denovo's
 * own handoff is. Failures are reported but never fail the visitor's request:
 * the endpoint validates and acknowledges regardless.
 */
async function handoff(env: Env, lead: Intake) {
  if (!env.CLEARPATH_INTAKE_URL) return { delivered: false, reason: 'not-configured' }

  const payload = JSON.stringify({
    event: 'clearpath.business.lead',
    occurred_at: new Date().toISOString(),
    source: lead.source ?? 'clearpath-site',
    lead,
  })

  try {
    const response = await fetch(`${env.CLEARPATH_INTAKE_URL.replace(/\/$/, '')}/api/denovo/leads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(env.CLEARPATH_SHARED_SECRET
          ? { 'x-clearpath-signature': await hmacHex(env.CLEARPATH_SHARED_SECRET, payload) }
          : {}),
      },
      body: payload,
      signal: AbortSignal.timeout(5000),
    })
    return { delivered: response.ok, status: response.status }
  } catch (error) {
    return { delivered: false, reason: error instanceof Error ? error.message : 'network error' }
  }
}

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

app.post('/api/intake', async (c) => {
  const body = await c.req.json<Intake>().catch(() => ({}) as Intake)
  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const business = body.business?.trim() ?? ''
  const phone = body.phone?.trim().slice(0, 40) ?? ''
  const interest = body.interest?.trim() ?? 'Business credit build'

  if (name.length < 2) return c.json({ error: 'Tell us who we are speaking with.' }, 400)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return c.json({ error: 'Enter a valid email address.' }, 400)
  if (business.length < 2) return c.json({ error: 'Add the business name or note that it is not formed yet.' }, 400)
  if (!interests.has(interest)) return c.json({ error: 'Choose one of the listed programs.' }, 400)

  const result = await handoff(c.env, { name, email, phone, business, interest, source: 'clearpath-site' })
  if (!result.delivered) {
    // Nothing stored the lead, so the visitor must not be told it was received.
    // The form shows this message and offers the phone number instead.
    console.warn('clearpath intake handoff:', result)
    return c.json(
      { error: "We couldn't save your details just now. Call (774) 505-7135 and we'll take them by phone." },
      503,
    )
  }

  return c.json({ ok: true, delivered: true })
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
