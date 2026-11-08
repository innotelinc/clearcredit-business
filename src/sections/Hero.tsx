import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

import { Aurora } from '../components/Aurora'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { CreditProfileMock } from '../components/CreditProfileMock'
import { hero } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [line1, line2] = hero.title
  const [before, after] = line2.split(hero.highlight)
  return (
    <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
      <Aurora />
      <div aria-hidden className="grid-lines absolute inset-x-0 top-0 h-[720px]" />
      <div aria-hidden className="noise pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.a
            href="#programs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="depth relative inline-flex h-8 items-center gap-2 rounded-[12px] bg-white/[0.04] pl-2 pr-3 text-[13px] text-muted backdrop-blur transition-colors hover:text-fg"
          >
            <ShieldCheck className="size-3.5 text-accent" />
            {hero.badge}
            <ArrowRight className="size-3.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[60px] sm:leading-[1.02] md:text-[72px]"
          >
            {line1}
            <br className="hidden sm:block" />{' '}
            {before}
            <span className="text-gradient">{hero.highlight}</span>
            {after}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button size="lg" href={hero.primary.href} className="w-full sm:w-auto">
              {hero.primary.label}
              <ArrowRight />
            </Button>
            <Button size="lg" variant="secondary" href={hero.secondary.href} className="w-full sm:w-auto">
              {hero.secondary.label}
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-[13px] text-faint"
          >
            {hero.footnote}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          style={{ transformPerspective: 1400 }}
          className="relative mx-auto mt-16 max-w-[860px] sm:mt-20"
        >
          <div
            aria-hidden
            className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[40px] bg-[radial-gradient(60%_50%_at_50%_0%,rgb(47_214_163/0.2),transparent)] blur-2xl"
          />
          <CreditProfileMock />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-40 bg-gradient-to-t from-bg to-transparent" />
        </motion.div>
      </Container>
    </section>
  )
}
