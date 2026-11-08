import { ArrowRight, Check } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Aurora } from '../components/Aurora'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { cta } from '../content'

const inputClass =
  'depth relative h-12 w-full min-w-0 rounded-control bg-bg/60 px-4 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(47_214_163/0.7)]'

export function Cta() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', interest: cta.interests[0] })
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setState('sending')
    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'clearpath-site' }),
      })
      const body = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(body.error ?? 'Something went wrong.')
      setState('done')
      setMessage(cta.success)
    } catch (error) {
      setState('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong.')
    }
  }

  return (
    <section id="cta" className="scroll-mt-24 py-12">
      <Container>
        <Reveal>
          <div className="depth relative overflow-hidden rounded-[32px] bg-surface px-6 py-16 shadow-glow sm:px-12 sm:py-20">
            <Aurora intensity={0.75} />
            <div aria-hidden className="grid-lines absolute inset-0" />
            <div aria-hidden className="noise pointer-events-none absolute inset-0" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <p className="text-[13px] font-medium text-accent">{cta.eyebrow}</p>
                <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[46px]">
                  {cta.title}
                </h2>
                <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted sm:text-[17px]">
                  {cta.description}
                </p>
              </div>

              {state === 'done' ? (
                <div className="depth relative rounded-card bg-surface-2 p-6 [--depth-edge:rgb(47_214_163/0.35)]">
                  <span className="grid size-9 place-items-center rounded-[12px] bg-accent/15 text-accent">
                    <Check className="size-4" />
                  </span>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg">{message}</p>
                  <p className="mt-2 text-[13px] text-muted">
                    Nothing was pulled from your credit. We will confirm the file we have before anything else.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-2.5">
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <label className="sr-only" htmlFor="intake-name">
                      Your name
                    </label>
                    <input
                      id="intake-name"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    <label className="sr-only" htmlFor="intake-business">
                      Business name
                    </label>
                    <input
                      id="intake-business"
                      required
                      value={form.business}
                      onChange={(e) => update('business', e.target.value)}
                      placeholder="Business name"
                      className={inputClass}
                    />
                  </div>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <label className="sr-only" htmlFor="intake-email">
                      Email
                    </label>
                    <input
                      id="intake-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                    <label className="sr-only" htmlFor="intake-phone">
                      Phone
                    </label>
                    <input
                      id="intake-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="Phone (optional)"
                      className={inputClass}
                    />
                  </div>
                  <label className="sr-only" htmlFor="intake-interest">
                    What do you need
                  </label>
                  <select
                    id="intake-interest"
                    value={form.interest}
                    onChange={(e) => update('interest', e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    {cta.interests.map((interest) => (
                      <option key={interest} value={interest} className="bg-surface text-fg">
                        {interest}
                      </option>
                    ))}
                  </select>
                  <Button size="lg" type="submit" disabled={state === 'sending'} className="mt-1 w-full">
                    {state === 'sending' ? 'Sending…' : cta.button}
                    <ArrowRight />
                  </Button>
                  {state === 'error' && <p className="text-[13px] text-accent-3">{message}</p>}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
