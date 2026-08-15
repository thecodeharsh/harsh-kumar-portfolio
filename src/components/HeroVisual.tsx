import { motion } from 'framer-motion'
import { heroTags, profile } from '../data/profile'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Logo from './Logo'

export default function HeroVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className={`absolute -inset-6 rounded-[2.5rem] bg-[var(--color-accent)]/15 blur-3xl ${reduced ? '' : 'animate-drift'}`}
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
        {/* fine technical grid */}
        <div className="circuit-grid absolute inset-0" aria-hidden="true" />

        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="grid-fade-mask absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="rounded-3xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-6">
                <Logo size={72} />
              </div>
              <span className="label-eyebrow text-[10px] text-[var(--color-text-secondary)]">
                Harsh Kumar
              </span>
            </motion.div>
          </div>
        )}

        {/* corner accents */}
        <span className="absolute left-4 top-4 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-[var(--color-accent)]/50" aria-hidden="true" />
        <span className="absolute bottom-4 right-4 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-[var(--color-accent-2)]/50" aria-hidden="true" />

        {/* subtle bottom gradient for label legibility */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)]/70 to-transparent" aria-hidden="true" />
      </div>

      {/* floating tech chips around the frame */}
      {heroTags.map((tag, i) => {
        const positions = [
          'left-[-14px] top-8',
          'right-[-10px] top-24',
          'left-[-18px] bottom-28',
          'right-[-16px] bottom-16',
          'left-1/2 -translate-x-1/2 -bottom-4',
        ]
        return (
          <motion.span
            key={tag}
            initial={reduced ? {} : { opacity: 0, y: 6 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            className={`font-mono-tech absolute ${positions[i]} whitespace-nowrap rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 px-2.5 py-1 text-[10px] font-semibold text-[var(--color-text-secondary)] shadow-sm backdrop-blur-sm`}
          >
            {tag}
          </motion.span>
        )
      })}
    </div>
  )
}
