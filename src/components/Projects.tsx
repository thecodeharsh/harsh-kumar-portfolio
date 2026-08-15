import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { filters, projects } from '../data/projects'
import Section from './Section'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]['value']>('all')

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      description="Things I've built, explored and experimented with — a mix of embedded systems, wireless communication and full-stack software work."
    >
      <FeaturedProject />

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
              active === f.value
                ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
