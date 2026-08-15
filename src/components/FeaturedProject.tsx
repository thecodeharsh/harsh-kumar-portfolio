import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Download, Eye, Trophy, X, ZoomIn } from 'lucide-react'
import { featuredProject } from '../data/projects'
import { GithubIcon } from './icons'

function NetworkVisual() {
  const points = [
    [20, 30], [55, 15], [80, 35], [65, 60], [30, 65], [45, 40], [12, 55],
  ]
  const edges = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 6], [4, 6], [2, 3],
  ]
  return (
    <svg viewBox="0 0 100 80" className="h-full w-full" role="presentation" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="var(--color-accent-2)"
          strokeOpacity="0.4"
          strokeWidth="0.5"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 5 ? 2.6 : 1.6} fill={i === 5 ? 'var(--color-accent)' : 'var(--color-accent-2)'} />
      ))}
    </svg>
  )
}

export default function FeaturedProject() {
  const p = featuredProject
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxOpen])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="group relative mb-10 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr]">
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs font-semibold text-[var(--color-text-secondary)]">
              {p.number} / FEATURED
            </span>
            {p.award && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
                <Trophy size={11} />
                {p.award}
              </span>
            )}
          </div>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">{p.title}</h3>
          {p.fullName && <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{p.fullName}</p>}

          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)]">
            {p.description}
          </p>

          {p.conference && (
            <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">{p.conference}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {p.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {p.posterImage && (
              <button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_var(--color-accent)]"
              >
                <Eye size={14} /> View Poster
              </button>
            )}
            {p.projectUrl && !p.projectUrl.startsWith('[ADD') && (
              <a
                href={p.projectUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
              >
                View Project <ArrowUpRight size={14} />
              </a>
            )}
            {p.githubUrl && !p.githubUrl.startsWith('[ADD') && (
              <a
                href={p.githubUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[220px] overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] lg:border-l lg:border-t-0">
          {p.posterImage ? (
            <button
              onClick={() => setLightboxOpen(true)}
              aria-label={`View ${p.title} poster full-size`}
              className="absolute inset-0 h-full w-full cursor-zoom-in"
            >
              <img
                src={p.posterImage}
                alt={`${p.title} project poster`}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg)]/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-[var(--color-bg)]/55 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                <span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn size={14} /> View Full Poster
                </span>
              </div>
            </button>
          ) : (
            <div className="grid-fade-mask absolute inset-0 p-6 transition-transform duration-500 group-hover:scale-105">
              <NetworkVisual />
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && p.posterImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${p.title} poster`}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 sm:p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)] sm:text-base">{p.title} — Project Poster</h3>
                  {p.fullName && <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">{p.fullName}</p>}
                </div>
                <button
                  onClick={() => setLightboxOpen(false)}
                  aria-label="Close"
                  className="shrink-0 rounded-full border border-[var(--color-border)] p-1.5 text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-4 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                <img
                  src={p.posterImageFull ?? p.posterImage}
                  alt={`${p.title} project poster full size`}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              <a
                href={p.posterImageFull ?? p.posterImage}
                download
                className="btn-glow mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={13} /> Download Poster
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
