import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const POINTS = [
  { k: 'Full-stack', v: 'Frontend, backend, datos y pruebas' },
  { k: 'Equipos ágiles', v: 'Scrum, CI/CD y entregas con métricas' },
  { k: 'Clientes directos', v: 'Del requerimiento al despliegue' },
]

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <SectionHeading eyebrow="Quién está detrás">
            Soy Marian, <span className="font-serif italic font-normal grad-text">desarrolladora.</span>
          </SectionHeading>
          <p className="max-w-xl text-lg leading-relaxed text-mist/75">
            Trabajo desde Panamá como desarrolladora full-stack. Me gusta entender el problema del negocio antes de
            elegir la tecnología, y escribir código que se pueda leer, probar y mantener. Octopus es la forma en que
            ofrezco ese trabajo: directo, sin intermediarios y sin discurso vacío.
          </p>
        </Reveal>
        <div className="space-y-px overflow-hidden rounded-3xl border border-line bg-line">
          {POINTS.map((p, i) => (
            <Reveal key={p.k} delay={i * 100} className="bg-ink">
              <div className="p-7">
                <p className="text-xl font-medium tracking-tight">{p.k}</p>
                <p className="mt-1 text-sm text-mist/60">{p.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
