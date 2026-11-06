const PALETTES = [
  ["#2a2a28", "#8a6a39"],
  ["#3d3226", "#ad874b"],
  ["#332a1f", "#c9a876"],
  ["#2e2a24", "#9c7a44"],
  ["#262220", "#c9a876"],
];

const HERO_PALETTE = ["#3a2f20", "#ad874b"];

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Elegant placeholder for photography that hasn't been supplied yet.
 * Deterministic per `seed`, on-brand (ink/gold palette), and never breaks
 * or depends on an external image host. Replace with real photography
 * (vehicle, destinations, team) once it's available.
 */
export function PlaceholderPhoto({
  seed,
  label,
  className = "",
  tone = "default",
}: {
  seed: string;
  label?: string;
  className?: string;
  /** "hero" uses a brighter, bespoke gold gradient for large feature spots. */
  tone?: "default" | "hero";
}) {
  const hash = hashSeed(seed);
  const [from, to] = tone === "hero" ? HERO_PALETTE : PALETTES[hash % PALETTES.length];
  const angle = 115 + (hash % 50);
  const patternId = `pp-${hash}`;
  // Callers that pass their own position utility (e.g. "absolute inset-0")
  // must win the cascade, so only default to "relative" when they don't.
  const positioned = /\b(absolute|fixed|sticky)\b/.test(className);

  return (
    <div
      role="img"
      aria-label={label ?? seed}
      className={`overflow-hidden ${positioned ? "" : "relative"} ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 70% 25%, rgba(201,168,118,0.45), transparent 55%)`,
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.28]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={patternId} width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M28 0 L56 28 L28 56 L0 28 Z"
              fill="none"
              stroke="#FAF9F6"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
    </div>
  );
}
