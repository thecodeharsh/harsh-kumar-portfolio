import { ArrowUp, Mail } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { scrollToId } from '../utils/scroll'
import { GithubIcon, LinkedinIcon } from './icons'
import Logo from './Logo'

const footerLinks = navLinks.filter((l) =>
  ['Home', 'About', 'Projects', 'Resume', 'Contact'].includes(l.label)
)

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Logo size={30} />
              <span className="font-semibold text-[var(--color-text)]">{profile.name}</span>
            </div>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Electronics & Communication Engineering</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text-secondary)]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(link.href)
                    }}
                    className="rounded-md px-1 -mx-1 transition-all duration-300 hover:text-[var(--color-text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={profile.social.github}
          target="_blank"
          rel="noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-accent)]"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-accent)]"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.social.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-accent)]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--color-text-secondary)]">{profile.footerNote}</p>
          <button
            onClick={() => scrollToId('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-accent)]"
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
