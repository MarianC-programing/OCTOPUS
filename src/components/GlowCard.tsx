import type { ReactNode, PointerEvent } from 'react'
import { cn } from '@/lib/utils'

type Props = { children: ReactNode; className?: string }

/** Tarjeta con un halo violeta que sigue al cursor. */
export function GlowCard({ children, className }: Props) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div onPointerMove={onMove} className={cn('glow-card rounded-3xl', className)}>
      {children}
    </div>
  )
}
