import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-20 md:py-24 ${className ?? ''}`} aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          {eyebrow && (
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {eyebrow}
            </span>
          )}
          <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
