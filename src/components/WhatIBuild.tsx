import { motion } from 'framer-motion'
import { Cpu, Radio, Bot, Code2 } from 'lucide-react'
import { buildAreas } from '../data/build'
import Section from './Section'

const icons = { embedded: Cpu, connected: Radio, robotics: Bot, software: Code2 }

export default function WhatIBuild() {
  return (
    <Section
      id="what-i-build"
      eyebrow="Focus Areas"
      title="What I Build"
      description="Four areas I keep coming back to — usually two or three of them at once."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {buildAreas.map((area, i) => {
          const Icon = icons[area.id as keyof typeof icons]
          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-tech text-2xl font-bold text-[var(--color-border)] transition-colors group-hover:text-[var(--color-accent)]">
                  {area.number}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  {Icon && <Icon size={17} />}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-[var(--color-text)]">{area.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {area.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
