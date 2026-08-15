import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'
import Section from './Section'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Let's build something."
      description="I'm always interested in learning, building and connecting with people working on interesting technology."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
      >
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.social.email}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_var(--color-accent)]"
        >
          <Mail size={15} /> Email Me
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
        >
          <LinkedinIcon size={15} /> LinkedIn
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
        >
          <GithubIcon size={15} /> GitHub
        </a>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-card-hover)] hover:text-[var(--color-text)]"
        >
          {copied ? <Check size={15} className="text-[var(--color-accent)]" /> : <Copy size={15} />}
          {copied ? 'Copied!' : profile.social.email}
        </button>
      </motion.div>
    </Section>
  )
}
