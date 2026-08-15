import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import Section from './Section'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Timeline"
      title="Experience"
      description="Training and internships that shaped how I approach hardware and software."
    >
      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" aria-hidden="true" />
        <ol className="space-y-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span
                className="absolute -left-8 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]"
                aria-hidden="true"
              />
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] hover:shadow-[0_20px_44px_-24px_rgba(79,124,255,0.35)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.organization}</h3>
                  <span className="font-mono-tech text-xs font-medium text-[var(--color-accent)]">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--color-text-secondary)]">{item.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>
                {item.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
