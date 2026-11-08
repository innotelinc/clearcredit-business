// Lead submission to the Denovo platform (innotelinc/denovo-platform).
//
// The site is a static SPA, so the form posts straight at the platform's public
// intake endpoint (`POST /api/intake`), which validates, routes the lead to a
// product and stores it in the workspace inbox.
//
// `VITE_DENOVO_API_URL` is baked in at build time. In local development it
// defaults to the platform on :3200; with no value at all the request goes to
// this origin, where the site's Worker validates and hands it on instead.
const baseUrl = (import.meta.env.VITE_DENOVO_API_URL ?? (import.meta.env.DEV ? 'http://127.0.0.1:3200' : '')).replace(
  /\/+$/,
  '',
)

export const intakeUrl = `${baseUrl}/api/intake`

export type IntakePayload = {
  name: string
  email: string
  phone?: string
  business_name?: string
  interest?: string
  message?: string
  source?: string
}

export type IntakeResult = { ok: true; product?: string } | { ok: false; error: string }

const PHONE = '(774) 505-7135'

export async function submitIntake(payload: IntakePayload): Promise<IntakeResult> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 12_000)
  try {
    const response = await fetch(intakeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    const body = (await response.json().catch(() => ({}))) as { error?: string; product?: string }
    if (!response.ok) {
      return { ok: false, error: body.error ?? `The request failed (${response.status}). Call ${PHONE} and we will take it by phone.` }
    }
    return { ok: true, product: body.product }
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === 'AbortError'
    return {
      ok: false,
      error: timedOut
        ? `That took too long to send. Call ${PHONE} and we will pick it up from there.`
        : `We could not reach the platform. Call ${PHONE} and we will take the details by phone.`,
    }
  } finally {
    clearTimeout(timer)
  }
}

/** The readiness check hands its result to the form through this event. */
export const READINESS_EVENT = 'clearpath:readiness'

export type ReadinessDetail = { summary: string }
