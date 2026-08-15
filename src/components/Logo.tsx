type LogoProps = {
  size?: number
  className?: string
}

/**
 * Custom geometric HK monogram — replaces the old "HK / portfolio" square badge.
 * Built from straight strokes on a circuit-node grid so it reads as an
 * engineering mark rather than a generic initials badge. Renders crisply
 * at any size since it's plain SVG (safe for navbar, footer, favicon).
 */
export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="9" className="fill-[var(--color-accent-soft)]" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="9" stroke="var(--color-accent)" strokeOpacity="0.35" />
      {/* H */}
      <path
        d="M9.5 9v14M9.5 16h6M15.5 9v14"
        stroke="var(--color-accent)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* K */}
      <path
        d="M19.5 9v14M19.5 16.2 24 9M19.9 16.6 24 23"
        stroke="var(--color-accent-2)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* corner node accents */}
      <circle cx="9.5" cy="9" r="1.15" fill="var(--color-accent-2)" />
      <circle cx="24" cy="23" r="1.15" fill="var(--color-accent)" />
    </svg>
  )
}
