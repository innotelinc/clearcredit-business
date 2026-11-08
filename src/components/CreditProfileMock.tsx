const bureaus = [
  { name: 'D&B', metric: 'PAYDEX', value: 80, note: 'Low risk' },
  { name: 'Experian', metric: 'Intelliscore', value: 68, note: 'Low risk' },
  { name: 'Equifax', metric: 'Payment Index', value: 82, note: 'Low risk' },
]

const tradelines = [
  { vendor: 'Uline', type: 'Net-30', limit: '$250', age: '6 mo' },
  { vendor: 'Grainger', type: 'Net-30', limit: '$500', age: '5 mo' },
  { vendor: 'Home Depot Commercial', type: 'Revolving', limit: '$2,500', age: '4 mo' },
  { vendor: 'Shell Business', type: 'Fuel', limit: '$1,000', age: '3 mo' },
]

// A commercial credit file, drawn as a product surface rather than a dashboard.
export function CreditProfileMock() {
  return (
    <div className="depth relative overflow-hidden rounded-card bg-surface p-3 shadow-glow sm:p-4">
      <div className="rounded-card-sm bg-bg/60 p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="depth relative grid size-10 shrink-0 place-items-center rounded-[13px] bg-gradient-to-br from-surface-2 to-raised text-[13px] font-semibold text-accent">
            NS
          </span>
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold tracking-tight">Northline Studio LLC</p>
            <p className="text-[12px] text-faint">D-U-N-S 08-123-4567 · Active</p>
          </div>
          <span className="ml-auto inline-flex h-7 items-center gap-1.5 rounded-[9px] bg-accent/10 px-2.5 text-[12px] font-medium text-accent">
            <span className="round size-1.5 bg-accent" />
            Reporting
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {bureaus.map((b) => (
            <div key={b.name} className="depth relative rounded-[14px] bg-surface px-3 py-3 sm:px-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-faint">{b.name}</p>
              <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-[-0.03em] tabular-nums sm:text-[30px]">
                {b.value}
              </p>
              <p className="mt-1 text-[11px] text-muted">{b.metric}</p>
              <p className="mt-2 text-[11px] text-accent-2">{b.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between px-1">
            <p className="text-[12px] font-medium text-muted">Tradelines</p>
            <p className="text-[11px] tabular-nums text-faint">4 of 6 shown</p>
          </div>
          <ul className="mt-2 divide-y divide-line">
            {tradelines.map((t) => (
              <li key={t.vendor} className="flex items-center gap-3 py-2.5">
                <span className="round size-1.5 shrink-0 bg-accent" />
                <span className="min-w-0 flex-1 truncate text-[13px]">{t.vendor}</span>
                <span className="hidden text-[12px] text-faint sm:block">{t.type}</span>
                <span className="text-[13px] font-medium tabular-nums">{t.limit}</span>
                <span className="w-11 text-right text-[11px] tabular-nums text-faint">{t.age}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
          <p className="text-[12px] text-muted">
            File age <span className="ml-1 font-medium text-fg">8 months</span>
          </p>
          <p className="text-[12px] text-muted">
            Payments late <span className="ml-1 font-medium text-fg">0</span>
          </p>
          <p className="ml-auto text-[12px] text-muted">
            Funding estimate <span className="ml-1 font-medium text-accent-2">$45,000</span>
          </p>
        </div>
      </div>
    </div>
  )
}
