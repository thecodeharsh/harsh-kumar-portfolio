import { motion } from 'framer-motion'
import { Cpu, Radio, Rocket, Code2 } from 'lucide-react'
import { profile } from '../data/profile'
import Section from './Section'

const exploring = [
  'Embedded Systems',
  'IoT',
  'Wireless Communication',
  'UAV Development',
  'Software Development',
]

const pillars = [
  {
    icon: Cpu,
    title: 'Embedded & Firmware',
    body: 'ESP32, STM32 and Arduino firmware — sensor interfacing, real-time control and resource-constrained optimisation.',
  },
  {
    icon: Radio,
    title: 'PCB & Wireless',
    body: 'Custom PCB layout in KiCad/DipTrace, plus LoRa-based mesh networking, TDMA scheduling and GPS-free positioning.',
  },
  {
    icon: Rocket,
    title: 'IoT & UAV Systems',
    body: 'End-to-end IoT prototypes and a growing interest in UAV technologies, from control loops to communication links.',
  },
  {
    icon: Code2,
    title: 'Software',
    body: 'Comfortable across the stack — C/C++ on hardware, Python for tooling, and JavaScript/Flutter for interfaces.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Electronics meets software."
      description="A quick look at how I think about engineering — and what I've been building lately."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            {profile.about}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            {profile.aboutExtended}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                className="card-surface group rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-card-hover)] hover:shadow-[0_16px_36px_-20px_rgba(79,124,255,0.35)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                  <pillar.icon size={16} />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-text)]">{pillar.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-secondary)]">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {profile.photo && (
            <div className="card-surface group relative overflow-hidden rounded-2xl">
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 via-transparent to-transparent" />
            </div>
          )}

          <div className="card-surface rounded-2xl p-6 transition-colors duration-300 hover:border-[var(--color-accent)]/40">
            <div className="label-eyebrow text-[10px] font-semibold text-[var(--color-text-secondary)]">
              Currently exploring
            </div>
            <ul className="mt-4 space-y-2.5">
              {exploring.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[var(--color-text)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-[var(--color-border)] pt-5">
              <div className="text-sm font-semibold text-[var(--color-text)]">{profile.education.degree}</div>
              <div className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                {profile.education.college}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                {profile.education.status} · {profile.location}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
