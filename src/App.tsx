import { Assessment } from './sections/Assessment'
import { Cta } from './sections/Cta'
import { Faq } from './sections/Faq'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Ladder } from './sections/Ladder'
import { Metrics } from './sections/Metrics'
import { Nav } from './sections/Nav'
import { Pricing } from './sections/Pricing'
import { Steps } from './sections/Steps'
import { Programs } from './sections/Programs'

// The page is a stack of independent sections. Copy for each lives in
// src/content.ts; remove or reorder lines here to change the page.
export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Features />
        <Ladder />
        <Assessment />
        <Steps />
        <Metrics />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
