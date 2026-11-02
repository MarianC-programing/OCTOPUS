import { Plus } from 'lucide-react'
import { FAQ } from '@/data/content'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-8 px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading eyebrow="FAQ">
          Preguntas <span className="font-serif italic font-normal grad-text">frecuentes.</span>
        </SectionHeading>
      </Reveal>
      <div className="divide-y divide-line border-y border-line">
        {FAQ.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg font-medium tracking-tight md:text-xl">
                {f.q}
                <Plus className="faq-plus size-5 shrink-0 text-lilac transition-transform duration-300" aria-hidden />
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-mist/70">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
