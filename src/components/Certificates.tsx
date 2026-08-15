import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Eye, X } from 'lucide-react'
import { certificates, type Certificate, type CertificateCategory } from '../data/achievements'
import Section from './Section'

const categories: ('All' | CertificateCategory)[] = ['All', 'Training', 'Competitions', 'Workshops', 'Participation']

export default function Certificates() {
  const [filter, setFilter] = useState<'All' | CertificateCategory>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const visible = useMemo(
    () => (filter === 'All' ? certificates : certificates.filter((c) => c.category === filter)),
    [filter],
  )

  const active: Certificate | null = activeIndex !== null ? visible[activeIndex] : null

  const close = () => setActiveIndex(null)
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % visible.length))
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length))

  useEffect(() => {
    if (activeIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [activeIndex, visible.length])

  return (
    <Section
      id="certificates"
      eyebrow="Proof of Work"
      title="Certificates"
      description="Training completions, competition and workshop participation — organised by category."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
              filter === cat
                ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((cert, i) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="card-surface flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:shadow-[0_20px_44px_-24px_rgba(79,124,255,0.4)]"
            >
              <button
                onClick={() => setActiveIndex(i)}
                className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-[var(--color-bg-secondary)]"
                aria-label={`View ${cert.title}`}
              >
                <img src={cert.image} alt={cert.title} className="h-full w-full object-contain p-2" loading="lazy" />
              </button>
              <div className="flex flex-1 flex-col p-5">
                <span className="label-eyebrow text-[9px] font-semibold text-[var(--color-accent)]">{cert.category}</span>
                <h3 className="mt-1.5 text-sm font-semibold leading-snug text-[var(--color-text)]">{cert.title}</h3>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{cert.organization}</p>
                <p className="mt-0.5 font-mono-tech text-[10px] text-[var(--color-text-secondary)]">{cert.date}</p>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setActiveIndex(i)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
                  >
                    <Eye size={13} /> View
                  </button>
                  <a
                    href={cert.fileUrl}
                    download
                    className="btn-glow inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Download size={13} /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="label-eyebrow text-[9px] font-semibold text-[var(--color-accent)]">{active.category}</span>
                  <h3 className="mt-1 text-base font-semibold text-[var(--color-text)] sm:text-lg">{active.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    {active.organization} · {active.date}
                  </p>
                </div>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="shrink-0 rounded-full border border-[var(--color-border)] p-1.5 text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="relative mt-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                <img src={active.image} alt={active.title} className="h-full w-full object-contain" />
                {visible.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous certificate"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/90 p-2 text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next certificate"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/90 p-2 text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>

              <a
                href={active.fileUrl}
                download
                className="btn-glow mt-5 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={13} /> Download Certificate
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
