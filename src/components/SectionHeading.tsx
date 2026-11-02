import type { ReactNode } from 'react'

type Props = { eyebrow: string; children: ReactNode; lead?: string }

export function SectionHeading({ eyebrow, children, lead }: Props) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-lilac/80">
        <span className="h-px w-8 bg-lilac/60" />
        {eyebrow}
      </p>
      <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] md:text-6xl">{children}</h2>
      {lead && <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/70 md:text-lg">{lead}</p>}
    </div>
  )
}
