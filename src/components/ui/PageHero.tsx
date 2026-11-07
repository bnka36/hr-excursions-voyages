import { Photo, AVAILABLE_PHOTOS } from "./Photo";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  seed,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** A real photo id (see Photo.AVAILABLE_PHOTOS) or, failing that, a placeholder seed. */
  seed: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-20">
      {AVAILABLE_PHOTOS.has(seed) ? (
        <Photo
          id={seed}
          alt={title}
          priority
          className="absolute inset-0"
          sizes="100vw"
          objectPosition={seed === "vehicle-mercedes-vito" ? "20% 50%" : "center"}
        />
      ) : (
        <PlaceholderPhoto seed={seed} label={title} tone="hero" className="absolute inset-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        {eyebrow ? (
          <div className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </div>
        ) : null}
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-paper md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">{subtitle}</p> : null}
      </div>
    </section>
  );
}
