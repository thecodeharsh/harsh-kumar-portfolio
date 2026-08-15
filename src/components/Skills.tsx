import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import Section from './Section'

// Bento layout spans, keyed by category id — deliberately uneven sizes.
const spans: Record<string, string> = {
  embedded: 'lg:col-span-3 lg:row-span-2',
  comms: 'lg:col-span-3',
  software: 'lg:col-span-4',
  tools: 'lg:col-span-2',
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      description="Tools and technologies I use to move between hardware and software."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(0,auto)]">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className={`card-surface flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_20px_44px_-24px_rgba(79,124,255,0.35)] ${spans[category.id] ?? ''}`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">{category.title}</h3>
              <span className="label-eyebrow text-[10px] font-semibold text-[var(--color-text-secondary)]">
                {category.eyebrow}
              </span>
            </div>
            <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
              {category.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.03 }}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
