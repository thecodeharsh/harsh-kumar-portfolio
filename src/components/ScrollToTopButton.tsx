import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../hooks/useActiveSection'
import { scrollToId } from '../utils/scroll'

export default function ScrollToTopButton() {
  const visible = useScrolled(480)

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => scrollToId('home')}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-accent)] hover:shadow-[0_16px_32px_-14px_var(--color-accent)]"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
