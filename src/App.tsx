import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechTicker from './components/TechTicker'
import About from './components/About'
import WhatIBuild from './components/WhatIBuild'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { useTheme } from './hooks/useTheme'
import { useReducedMotion } from './hooks/useReducedMotion'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reducedMotion)
  }, [reducedMotion])

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <TechTicker />
        <About />
        <WhatIBuild />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
