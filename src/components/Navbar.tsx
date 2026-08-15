import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection, useScrolled } from '../hooks/useActiveSection'
import { scrollToId } from '../utils/scroll'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

type Props = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(24)
  const active = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))

  const handleNav = (href: string) => {
    scrollToId(href)
    setMobileOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <motion.nav
          animate={{
            paddingTop: scrolled ? 8 : 14,
            paddingBottom: scrolled ? 8 : 14,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/70 px-4 shadow-[0_1px_0_0_rgba(255,255,255,0.03)] backdrop-blur-xl sm:px-5"
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#home')
            }}
            className="flex items-center gap-2 font-mono-tech text-sm font-bold text-[var(--color-text)]"
          >
            <Logo size={32} />
            <span className="hidden tracking-tight sm:inline">Harsh Kumar</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNav(link.href)
                    }}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-[var(--color-text)]'
                        : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[var(--color-accent)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <a
              href={profile.resumePath}
              download
              className="btn-glow hidden items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 sm:flex"
            >
              <Download size={13} />
              Resume
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mt-2 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNav(link.href)
                      }}
                      onTouchEnd={(e) => {
                        // Mobile WebKit/Chrome sometimes fails to synthesize a
                        // click from a tap on <a> tags nested inside a fixed +
                        // Framer Motion transform-animated container. Handle
                        // the tap directly and stop it from double-firing
                        // alongside the click handler above.
                        e.preventDefault()
                        handleNav(link.href)
                      }}
                      style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                      className="relative z-10 block rounded-xl px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:translate-x-1 hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-1 flex gap-2 px-2 pb-1 pt-2">
                  <a
                    href={profile.resumePath}
                    download
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    <Download size={14} /> Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
