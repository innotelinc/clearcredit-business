import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { steps } from '../content'

export function Steps() {
  return (
    <section id="how" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} />
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block" />
          {steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex flex-col items-start gap-5 lg:items-center lg:text-center">
                <span className="depth relative grid size-12 place-items-center rounded-[16px] bg-surface text-[15px] font-semibold tabular-nums text-fg">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
