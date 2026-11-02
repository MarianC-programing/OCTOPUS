import SculptureHero from '@/components/ui/liquid-sculpture-hero'
import { NAV_LINKS } from '@/data/content'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { NoSmoke } from '@/components/sections/NoSmoke'
import { Stack } from '@/components/sections/Stack'
import { About } from '@/components/sections/About'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

const base = import.meta.env.BASE_URL
const HERO_IMG = `${base}octopus-hero.webp`

export default function App() {
  return (
    <main id="top">
      <SculptureHero
        src={HERO_IMG}
        darkSrc={HERO_IMG}
        mobileSrc={HERO_IMG}
        mobileDarkSrc={HERO_IMG}
        imageAlt="Pulpo morado trabajando en una laptop plateada"
        theme="dark"
        themeToggle={false}
        loadFonts={false}
        background="#07060d"
        darkBackground="#07060d"
        textColor="#f1effa"
        accentColor="#c4b5fd"
        brand="Octopus"
        navLinks={NAV_LINKS}
        navCta={{ label: 'Contacto', href: '#contacto' }}
        eyebrow="Desarrollo web · Panamá"
        headline={'Software que\nhace lo que dice.'}
        headlineAccent="hace lo que dice."
        body="Diseño y programo sitios, sistemas y apps a medida. Te digo qué se puede hacer, cuánto toma y qué no vale la pena."
        primaryCta={{ label: 'Hablemos', href: '#contacto' }}
        secondaryCta={{ label: 'Cómo trabajo', href: '#proceso' }}
        hint="Mueve el cursor sobre el pulpo"
        hintTouch="Toca el pulpo"
        backdropText="octopus"
        radius={240}
        strength={1.1}
        liquid={1.2}
        ambient
        ambientIntensity={0.35}
        intro
      />
      <Services />
      <Process />
      <NoSmoke />
      <Stack />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
