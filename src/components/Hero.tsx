import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { scrollToId } from '../utils/scroll'
import HeroVisual from './HeroVisual'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* faint circuit backdrop, contained to the hero only */}
      <div className="circuit-grid grid-fade-mask pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-eyebrow inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 px-3 py-1.5 text-[10px] font-semibold text-[var(--color-accent)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            {profile.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[3.4rem] font-extrabold leading-[0.95] tracking-tight text-[var(--color-text)] sm:text-7xl md:text-8xl"
          >
            {profile.firstName}
            <br />
            <span className="text-[var(--color-accent)]">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-xl font-medium leading-snug text-[var(--color-text)]"
          >
            {profile.title} building across hardware, embedded systems and software.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToId('projects')}
              className="btn-glow group flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href={profile.resumePath}
              download
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.social.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail size={19} />
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-7 sm:grid-cols-4"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono-tech text-2xl font-bold text-[var(--color-text)]">{stat.value}</div>
                <div className="mt-1 text-xs leading-snug text-[var(--color-text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <HeroVisual />
        </motion.div>

        {/* Simplified mobile visual */}
        <div className="mx-auto block w-full max-w-[280px] lg:hidden">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
