import { ArrowUpRight, Mail } from 'lucide-react'
import { CONTACT } from '@/data/content'
import { Reveal } from '@/components/Reveal'

const subject = encodeURIComponent('Hola Octopus, tengo un proyecto')
const mailto = `mailto:${CONTACT.email}?subject=${subject}`

// lucide-react v1 ya no incluye íconos de marcas: se definen inline.
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-8 overflow-hidden px-6 py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] size-[420px] animate-float rounded-full bg-violet/25 blur-[110px]" />
        <div
          className="absolute bottom-[0%] right-[8%] size-[380px] animate-float rounded-full bg-blue/25 blur-[110px]"
          style={{ animationDelay: '-6s' }}
        />
      </div>
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.14em] text-lilac/80">Contacto</p>
        <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] md:text-8xl">
          ¿Tienes algo <span className="font-serif italic font-normal grad-text">en mente?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-mist/70">
          Cuéntame qué necesitas construir. Respondo por correo y, si tiene sentido, lo conversamos en una llamada corta.
        </p>
        <a
          href={mailto}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-mist px-8 py-4 text-base font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Mail className="size-5" aria-hidden />
          {CONTACT.email}
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </a>
        <div className="mt-8 flex justify-center gap-6 text-sm text-mist/70">
          <a className="inline-flex items-center gap-2 hover:text-lilac" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-4" /> GitHub
          </a>
          <a className="inline-flex items-center gap-2 hover:text-lilac" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="size-4" /> LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  )
}
