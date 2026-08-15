import { tickerItems } from '../data/build'

export default function TechTicker() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div
      className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-4"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="label-eyebrow mx-5 flex shrink-0 items-center gap-5 text-xs font-semibold text-[var(--color-text-secondary)]"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
