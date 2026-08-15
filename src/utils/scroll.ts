export function scrollToId(id: string) {
  const target = id.replace(/^#/, '')

  if (target === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.getElementById(target)
  if (!el) return

  const navbarOffset = 88
  const top = Math.max(
    0,
    window.scrollY + el.getBoundingClientRect().top - navbarOffset,
  )

  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}