import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { achievements } from '../data/achievements'
import Section from './Section'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements">
      <div className="space-y-5">
        {achievements.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-[var(--color-accent)]/30 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-bg-secondary)] p-8 md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Award size={22} />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.event}</p>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[var(--color-text-secondary)]">
                    <span>
                      <span className="font-semibold text-[var(--color-text)]">Hosted at:</span> {item.hostedAt}
                    </span>
                    <span>
                      <span className="font-semibold text-[var(--color-text)]">Project:</span> {item.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
