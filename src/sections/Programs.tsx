import { Check } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { programs } from '../content'
import { cx } from '../lib/cx'

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={programs.eyebrow} title={programs.title} description={programs.description} />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {programs.items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.08} className="h-full">
              <article
                className={cx(
                  'depth relative flex h-full flex-col rounded-card bg-surface p-7 shadow-glow sm:p-8',
                  item.featured && '[--depth-edge:rgb(47_214_163/0.4)] [--depth-highlight:rgb(164_255_226/0.22)]',
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cx(
                      'inline-flex h-7 items-center rounded-[9px] px-2.5 text-[12px] font-medium',
                      item.featured ? 'bg-accent/12 text-accent' : 'bg-white/[0.06] text-muted',
                    )}
                  >
                    {item.status}
                  </span>
                  <span className="text-[13px] text-faint">{item.note}</span>
                </div>

                <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.02em]">{item.name}</h3>
                <p className="mt-2 text-pretty text-[15px] leading-relaxed text-muted">{item.blurb}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-line pt-6">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[14px] text-fg/90">
                      <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-[6px] bg-white/[0.08]">
                        <Check className="size-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <Button
                  href={item.featured ? '#pricing' : '#cta'}
                  variant={item.featured ? 'primary' : 'secondary'}
                  className="mt-7 w-full"
                >
                  {item.featured ? 'Build my business file' : 'Repair my personal credit'}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-[13px] text-faint">{programs.bundle}</p>
        </Reveal>
      </Container>
    </section>
  )
}
