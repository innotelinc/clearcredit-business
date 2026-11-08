import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ladder } from '../content'

export function Ladder() {
  return (
    <section id="ladder" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={ladder.eyebrow} title={ladder.title} description={ladder.description} />

        <ol className="relative mt-14 flex flex-col">
          <span aria-hidden className="absolute bottom-6 left-[15px] top-6 w-px bg-gradient-to-b from-accent/40 via-line-strong to-transparent md:left-[19px]" />
          {ladder.stages.map((stage, i) => (
            <Reveal key={stage.name} delay={i * 0.06}>
              <li className="relative grid gap-4 pb-10 pl-12 md:grid-cols-[1fr_260px] md:gap-10 md:pl-16">
                <span className="depth absolute left-0 top-0 grid size-8 place-items-center rounded-[11px] bg-surface text-[12px] font-semibold tabular-nums text-accent md:size-10 md:text-[13px]">
                  {i}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[13px] font-medium text-accent">{stage.tier}</span>
                    <h3 className="text-[19px] font-semibold tracking-tight">{stage.name}</h3>
                    <span className="text-[12px] text-faint">{stage.window}</span>
                  </div>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-muted">{stage.summary}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-fg/85">
                        <span className="round mt-1.5 size-1.5 shrink-0 bg-accent/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="depth relative h-fit rounded-card-sm bg-surface/70 px-4 py-3.5 md:mt-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-faint">What reports</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{stage.reports}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-2 border-t border-line pt-6 text-[13px] text-faint">{ladder.note}</p>
        </Reveal>
      </Container>
    </section>
  )
}
