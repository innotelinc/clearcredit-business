import { cx } from '../lib/cx'
import { brand } from '../content'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cx(
        'depth relative grid size-8 shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-surface-2 to-raised',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="url(#logo-g)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8ff5d2" />
            <stop offset="1" stopColor="#2fd6a3" />
          </linearGradient>
        </defs>
        <path d="M4 17.5 9.5 11l4 3L20 6" />
        <path d="M15.5 6H20v4.5" />
      </svg>
    </span>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cx('inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-fg', className)}>
      <LogoMark />
      {brand.name}
    </a>
  )
}
