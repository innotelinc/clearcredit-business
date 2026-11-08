import { ArrowRight, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { assessment } from '../content'
import { cx } from '../lib/cx'
import { READINESS_EVENT } from '../lib/intake'

type Answers = Record<string, number | null>

const emptyAnswers = () => Object.fromEntries(assessment.questions.map((q) => [q.id, null])) as Answers

// The result cannot send itself — it has no contact details — so it is handed
// to the lead form below, which submits it with the enquiry.
function announce(band: string, percent: number, gaps: string[]) {
  const summary = `${percent}/100 · ${band} · gaps: ${gaps.length ? gaps.join(', ') : 'none'}`
  window.dispatchEvent(new CustomEvent(READINESS_EVENT, { detail: { summary } }))
}

export function Assessment() {
  const [answers, setAnswers] = useState<Answers>(emptyAnswers)

  const { max, score, answered, gaps, complete } = useMemo(() => {
    const max = assessment.questions.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.value)), 0)
    const score = assessment.questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
    const answered = assessment.questions.filter((q) => answers[q.id] !== null).length
    const gaps = assessment.questions
      .filter((q) => {
        const best = Math.max(...q.options.map((o) => o.value))
        return answers[q.id] !== null && (answers[q.id] ?? 0) < best
      })
      .map((q) => q.short)
    return { max, score, answered, gaps, complete: answered === assessment.questions.length }
  }, [answers])

  const band = complete ? (assessment.bands.find((b) => score >= b.min && score <= b.max) ?? null) : null
  const percent = Math.round((score / max) * 100)

  return (
    <section id="readiness" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={assessment.eyebrow} title={assessment.title} description={assessment.description} />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <ul className="depth relative flex flex-col divide-y divide-line rounded-card bg-surface shadow-glow">
              {assessment.questions.map((question, qi) => (
                <li key={question.id} className="p-5 sm:p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[12px] font-medium tabular-nums text-faint">
                      {String(qi + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[15px] font-medium">{question.label}</p>
                  </div>
                  <div role="radiogroup" aria-label={question.label} className="mt-3 flex flex-wrap gap-2 pl-7">
                    {question.options.map((option) => {
                      const selected = answers[question.id] === option.value
                      return (
                        <button
                          key={option.label}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option.value }))}
                          className={cx(
                            'depth relative inline-flex h-9 items-center rounded-control px-3.5 text-[13px] transition-colors',
                            selected
                              ? 'bg-accent/12 text-fg [--depth-edge:rgb(47_214_163/0.5)]'
                              : 'bg-white/[0.03] text-muted hover:bg-white/[0.06] hover:text-fg',
                          )}
                        >
                          {option.label}
                        </button>
                      )
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="depth relative rounded-card bg-surface p-6 shadow-glow lg:sticky lg:top-24">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-muted">Your readiness</p>
                <p className="text-[12px] tabular-nums text-faint">{answered} of {assessment.questions.length}</p>
              </div>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-[56px] font-semibold leading-none tracking-[-0.04em] tabular-nums">
                  {complete ? percent : '—'}
                </span>
                <span className="pb-1.5 text-[15px] text-muted">/ 100</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent/50 to-accent transition-[width] duration-500"
                  style={{ width: `${complete ? percent : (answered / assessment.questions.length) * 100}%` }}
                />
              </div>

              {band ? (
                <div className="mt-6">
                  <span className="inline-flex h-7 items-center rounded-[9px] bg-accent/12 px-2.5 text-[12px] font-medium text-accent">
                    {band.label}
                  </span>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{band.verdict}</p>

                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.08em] text-faint">
                    Start with
                  </p>
                  <p className="mt-1 text-[17px] font-semibold">{band.plan}</p>

                  <ol className="mt-4 flex flex-col gap-2">
                    {band.actions.map((action, i) => (
                      <li key={action} className="flex gap-2.5 text-[13px] leading-relaxed text-fg/85">
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-[5px] bg-white/[0.08] text-[10px] tabular-nums text-muted">
                          {i + 1}
                        </span>
                        {action}
                      </li>
                    ))}
                  </ol>

                  <Button href="#cta" className="mt-6 w-full" onClick={() => announce(band.label, percent, gaps)}>
                    Book the review
                    <ArrowRight />
                  </Button>
                  <button
                    type="button"
                    onClick={() => setAnswers(emptyAnswers())}
                    className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-[12px] text-faint transition-colors hover:text-fg"
                  >
                    <RotateCcw className="size-3" />
                    Start over
                  </button>
                </div>
              ) : (
                <div className="mt-6">
                  <p className="text-[14px] leading-relaxed text-muted">
                    Answer all seven questions to see your stage, your gaps and where we would start.
                  </p>
                  {gaps.length > 0 && (
                    <>
                      <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.08em] text-faint">
                        Gaps so far
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {gaps.map((gap) => (
                          <li
                            key={gap}
                            className="inline-flex h-6 items-center rounded-[7px] bg-accent-3/10 px-2 text-[11px] text-accent-3"
                          >
                            {gap}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
