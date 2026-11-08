import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { brand, footer } from '../content'

const socials = [
  {
    label: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1 0 12 18.75 6.75 6.75 0 0 0 12 5.25zm0 2.15a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm6.4-2.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z',
  },
]

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-2 text-[12px] text-faint">
              {brand.company} · {brand.tagline}
            </p>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">{footer.blurb}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted">
              <a href={brand.phoneHref} className="transition-colors hover:text-fg">
                {brand.phone}
              </a>
              <a href={brand.site} className="transition-colors hover:text-fg">
                denovocredit.com
              </a>
            </p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-fg">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-muted transition-colors hover:text-fg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-3xl border-t border-line pt-6 text-[12px] leading-relaxed text-faint">
          {footer.disclaimer}
        </p>

        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-faint">{footer.legal}</p>
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-[11px] text-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
