export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <div
          className={`mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase ${isCenter ? "justify-center" : ""} ${dark ? "text-gold-light" : "text-gold-dark"}`}
        >
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`font-serif text-3xl leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] ${dark ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-stone-light" : "text-stone"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
