import { Check } from 'lucide-react'
import type { ReactElement } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { included } from '../content'
import { cx } from '../lib/cx'

const visuals: Record<string, () => ReactElement> = {
  foundation: FoundationVisual,
  tradelines: TradelinesVisual,
  monitoring: MonitoringVisual,
  funding: FundingVisual,
}

export function Features() {
  return (
    <section id="included" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={included.eyebrow} title={included.title} description={included.description} />
        <div className="mt-14 grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-3">
          {included.items.map((item, i) => {
            const Visual = visuals[item.key]
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08} className={cx(item.span === 2 && 'md:col-span-2')}>
                <article className="depth group relative flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(164_255_226/0.22)]">
                  <div className="relative flex-1 overflow-hidden">
                    <Visual />
                  </div>
                  <div className="relative h-[100px] border-t border-line px-6 pt-4">
                    <h3 className="text-[16px] font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-[14px] leading-snug text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

const documents = [
  { label: 'Articles of organization', state: 'Filed' },
  { label: 'EIN confirmation', state: 'Active' },
  { label: 'D-U-N-S record', state: 'Open' },
  { label: '411 phone listing', state: 'Live' },
]

function FoundationVisual() {
  return (
    <div className="absolute inset-0 flex items-center p-6">
      <ul className="flex w-full flex-col gap-2">
        {documents.map((doc, i) => (
          <li
            key={doc.label}
            className="depth relative flex items-center gap-3 rounded-[13px] bg-bg/50 px-3.5 py-2.5"
            style={{ marginLeft: `${i * 10}px` }}
          >
            <span className="grid size-5 shrink-0 place-items-center rounded-[7px] bg-accent/15 text-accent">
              <Check className="size-3" />
            </span>
            <span className="min-w-0 flex-1 truncate text-[13px]">{doc.label}</span>
            <span className="text-[11px] font-medium text-accent-2">{doc.state}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const lines = [
  { vendor: 'Uline', limit: '$250', type: 'Net-30' },
  { vendor: 'Grainger', limit: '$500', type: 'Net-30' },
  { vendor: 'Staples Business', limit: '$1,500', type: 'Revolving' },
]

function TradelinesVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6">
      {lines.map((line) => (
        <div key={line.vendor} className="depth relative flex items-center gap-3 rounded-[13px] bg-bg/50 px-3.5 py-3">
          <span className="round size-2 shrink-0 bg-accent shadow-[0_0_12px_rgb(47_214_163/0.7)]" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium">{line.vendor}</p>
            <p className="text-[11px] text-faint">{line.type}</p>
          </div>
          <span className="text-right">
            <span className="block text-[13px] font-medium tabular-nums">{line.limit}</span>
            <span className="block text-[10px] uppercase tracking-[0.06em] text-accent-2">Reported</span>
          </span>
        </div>
      ))}
    </div>
  )
}

const scores = [
  { name: 'D&B PAYDEX', value: 80 },
  { name: 'Experian', value: 68 },
  { name: 'Equifax', value: 82 },
]

function MonitoringVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6">
      {scores.map((score) => (
        <div key={score.name}>
          <div className="flex items-baseline justify-between">
            <span className="text-[12px] text-muted">{score.name}</span>
            <span className="text-[13px] font-medium tabular-nums">{score.value}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent/50 to-accent"
              style={{ width: `${score.value}%` }}
            />
          </div>
        </div>
      ))}
      <p className="mt-1 text-[11px] text-faint">Pulled monthly · all three bureaus</p>
    </div>
  )
}

const capacity = [
  { label: 'Retail cards', value: '$2.5k', width: '28%' },
  { label: 'Bank card', value: '$15k', width: '58%' },
  { label: 'Line of credit', value: '$40k', width: '92%' },
]

function FundingVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6">
      {capacity.map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="w-24 shrink-0 text-[12px] text-muted">{row.label}</span>
          <div className="h-8 flex-1 overflow-hidden rounded-[9px] bg-white/[0.04]">
            <div
              className="flex h-full items-center justify-end rounded-[9px] bg-gradient-to-r from-accent/25 to-accent/70 pr-2.5"
              style={{ width: row.width }}
            >
              <span className="text-[12px] font-medium tabular-nums text-bg">{row.value}</span>
            </div>
          </div>
        </div>
      ))}
      <p className="mt-1 text-[11px] text-faint">Limits shown are illustrative, not an offer or a forecast.</p>
    </div>
  )
}
