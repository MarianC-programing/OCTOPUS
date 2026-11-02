import { Check, X } from 'lucide-react'
import { YES, NO } from '@/data/content'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function NoSmoke() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading
          eyebrow="Sin humo"
          lead="No necesitas entender de tecnología para trabajar conmigo. Sí necesitas saber qué esperar."
        >
          Lo que sí, <span className="font-serif italic font-normal grad-text">y lo que no.</span>
        </SectionHeading>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <ul className="h-full space-y-5 rounded-3xl border border-sky/30 bg-sky/[0.04] p-8 md:p-10">
            {YES.map((t) => (
              <li key={t} className="flex gap-4">
                <Check className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden />
                <span className="leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <ul className="h-full space-y-5 rounded-3xl border border-line p-8 text-mist/55 md:p-10">
            {NO.map((t) => (
              <li key={t} className="flex gap-4">
                <X className="mt-0.5 size-5 shrink-0 text-violet" aria-hidden />
                <span className="leading-snug line-through decoration-violet/50">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
