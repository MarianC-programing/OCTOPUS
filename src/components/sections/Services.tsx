import { SERVICES } from '@/data/content'
import { GlowCard } from '@/components/GlowCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading
          eyebrow="Qué hacemos"
          lead="Cuatro cosas que hacemos bien, de principio a fin. Si lo que necesitas no está aquí, te lo decimos y te recomendamos a quién acudir."
        >
          Lo que construimos, <span className="grad-text">sin rodeos.</span>
        </SectionHeading>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <GlowCard className="h-full p-8 md:p-10">
              <span className="text-5xl font-normal tracking-tight text-lilac/40">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 text-2xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-mist/70">{s.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-lilac/90">
                    {t}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
