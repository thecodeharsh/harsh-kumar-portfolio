import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { GithubIcon } from './icons'

const sizeClasses: Record<NonNullable<Project['size']>, string> = {
  lg: 'lg:col-span-2',
  md: '',
  sm: '',
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`group flex h-full flex-col card-surface rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] ${sizeClasses[project.size ?? 'md']}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono-tech text-xs font-semibold text-[var(--color-text-secondary)]">{project.number}</span>
        <span className="label-eyebrow text-[9px] font-semibold text-[var(--color-text-secondary)]">
          {project.category}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-[var(--color-text)]">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 opacity-90 transition-opacity group-hover:opacity-100">
        {project.projectUrl && !project.projectUrl.startsWith('[ADD') && (
          <a
            href={project.projectUrl}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]"
          >
            View Project <ArrowUpRight size={12} />
          </a>
        )}
        {project.githubUrl && !project.githubUrl.startsWith('[ADD') && (
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:translate-x-0.5 hover:text-[var(--color-text)]"
          >
            <GithubIcon size={12} /> Code
          </a>
        )}
      </div>
    </motion.div>
  )
}
