import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText } from 'lucide-react'
import { profile } from '../data/profile'
import Section from './Section'
import { GithubIcon } from './icons'

export default function ResumeCTA() {
  return (
    <Section id="resume" eyebrow="Resume" title="Want the complete picture?">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-colors duration-300 hover:border-[var(--color-accent)]/30 md:p-10"
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-accent)]">
              <FileText size={22} />
            </span>
            <p className="max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Download my latest resume to explore my education, experience, projects and technical skills.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
            >
              <ExternalLink size={14} /> View Resume
            </a>
            <a
              href={profile.resumePath}
              download
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
      </motion.div>

      {/* Take my portfolio with you */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card-hover)]">
          <h3 className="text-sm font-semibold text-[var(--color-text)]">Portfolio PDF</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-secondary)]">
            Download a printable portfolio PDF summarizing this site.
          </p>
          <a
            href={profile.portfolioPdfPath}
            download
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] transition-transform duration-300 hover:translate-x-1"
          >
            <Download size={12} /> Download Portfolio
          </a>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card-hover)]">
          <h3 className="text-sm font-semibold text-[var(--color-text)]">Source Code</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-secondary)]">
            Browse the code behind this portfolio on GitHub.
          </p>
          <a
            href={profile.social.github}
          target="_blank"
          rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] transition-transform duration-300 hover:translate-x-1"
          >
            <GithubIcon size={12} /> View Repository
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
