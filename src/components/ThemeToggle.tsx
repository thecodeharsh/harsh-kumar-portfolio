import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

type Props = {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-accent)] hover:shadow-[0_8px_20px_-10px_var(--color-accent)]"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </motion.span>
    </button>
  )
}
