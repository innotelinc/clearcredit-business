import { Check } from 'lucide-react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { pricing } from '../content'
import { cx } from '../lib/cx'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className="h-full">
              <article
                className={cx(
                  'depth relative flex h-full flex-col rounded-card bg-surface p-7',
                  tier.popular
                    ? '[--depth-edge:rgb(47_214_163/0.45)] [--depth-highlight:rgb(164_255_226/0.25)] shadow-[0_40px_80px_-40px_rgb(47_214_163/0.35)]'
                    : 'shadow-glow',
                )}
              >
                {tier.popular && (
                  <span className="absolute right-6 top-6 rounded-[8px] bg-accent/12 px-2 py-1 text-[12px] font-medium text-accent">
                    Most chosen
                  </span>
                )}
                <h3 className="text-[16px] font-semibold">{tier.name}</h3>
                <p className="mt-1 min-h-[44px] text-[14px] leading-snug text-muted">{tier.description}</p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[40px] font-semibold leading-none tracking-[-0.03em] tabular-nums">
                      ${tier.monthly}
                    </span>
                    <span className="text-[14px] text-muted">/ month</span>
                  </div>
                  <p className="mt-2 text-[13px] text-faint">
                    <span className="font-medium text-fg">${tier.setup}</span> one-time setup
                  </p>
                </div>

                <Button variant={tier.popular ? 'primary' : 'secondary'} href="#cta" className="mt-7 w-full">
                  {tier.cta}
                </Button>

                <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-line pt-7">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[14px] text-fg/90">
                      <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-[6px] bg-white/[0.08]">
                        <Check className="size-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="depth relative mt-4 flex flex-col gap-4 rounded-card bg-surface/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[15px] font-medium">
                {pricing.addon.label}
                <span className="ml-2 text-[14px] font-normal text-muted">{pricing.addon.price}</span>
              </p>
              <p className="mt-1 text-[13px] text-muted">{pricing.addon.note}</p>
            </div>
            <Button variant="secondary" href="#cta" className="shrink-0">
              Add personal repair
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-center text-[13px] leading-relaxed text-faint">{pricing.note}</p>
        </Reveal>
      </Container>
    </section>
  )
}
