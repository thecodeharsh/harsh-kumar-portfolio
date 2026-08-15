export function scrollToId(id: string) {
  const target = id.replace('#', '')

  if (target === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.getElementById(target)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
