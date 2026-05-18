export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 120 120" fill="none" aria-hidden className={light ? "text-white" : "text-ink"}>
        <path
          d="M35 25 L75 25 L90 65 L75 105 L35 105 L20 65 Z"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinejoin="round"
        />
        <path d="M65 45 Q85 55 92 70" fill="none" stroke="#d4af77" strokeWidth="18" strokeLinecap="round" />
      </svg>
      <span className={`font-serif-display text-2xl font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        NotesClaim
      </span>
    </div>
  );
}
