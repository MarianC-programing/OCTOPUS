import { STEPS } from '@/data/content'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading eyebrow="Cómo trabajamos">
          Cuatro pasos. <span className="grad-text">Cero misterio.</span>
        </SectionHeading>
      </Reveal>
      <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 100} className="bg-ink">
            <li className="group h-full p-8 transition-colors duration-500 hover:bg-violet/10">
              <span className="text-6xl font-normal tracking-tight text-lilac/30 transition-colors duration-500 group-hover:text-sky">
                {s.n}
              </span>
              <h3 className="mt-8 text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist/65">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
