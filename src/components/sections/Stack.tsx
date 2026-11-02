import { STACK } from '@/data/content'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

function Chip({ name, icon }: { name: string; icon?: string }) {
  return (
    <li className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-surface/70 px-5 py-3 text-sm">
      {icon ? (
        <img
          src={`https://cdn.simpleicons.org/${icon}/c4b5fd`}
          alt=""
          width={18}
          height={18}
          loading="lazy"
          className="size-[18px]"
        />
      ) : (
        <span className="size-[18px] rounded-full bg-gradient-to-br from-violet to-sky" aria-hidden />
      )}
      {name}
    </li>
  )
}

export function Stack() {
  const half = Math.ceil(STACK.length / 2)
  const rows = [STACK.slice(0, half), STACK.slice(half)]

  return (
    <section id="stack" className="scroll-mt-8 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Herramientas"
            lead="Un stack amplio, elegido según el problema: no el mismo martillo para todo."
          >
            Con qué <span className="font-serif italic font-normal grad-text">construyo.</span>
          </SectionHeading>
        </Reveal>
      </div>
      <div
        className="space-y-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        aria-label="Tecnologías"
      >
        {rows.map((row, r) => (
          <ul
            key={r}
            className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]"
            style={{ animationDirection: r ? 'reverse' : 'normal' }}
          >
            {[...row, ...row].map((t, i) => (
              <Chip key={`${t.name}-${i}`} {...t} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
