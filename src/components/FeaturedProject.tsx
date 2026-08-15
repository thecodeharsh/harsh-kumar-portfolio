import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy } from 'lucide-react'
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
            {p.projectUrl && !p.projectUrl.startsWith('[ADD') && (
              <a
                href={p.projectUrl}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
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

        <div className="relative min-h-[220px] border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] lg:border-l lg:border-t-0">
          <div className="grid-fade-mask absolute inset-0 p-6 transition-transform duration-500 group-hover:scale-105">
            <NetworkVisual />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
