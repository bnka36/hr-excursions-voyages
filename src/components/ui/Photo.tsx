import Image from "next/image";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

/**
 * Real photos available under /public/images/<id>.jpg — see
 * public/images/CREDITS.md for sourcing and licensing.
 * Add an id here once its file is in place; anything not listed falls back
 * to the on-brand placeholder so a missing photo never 404s.
 */
export const AVAILABLE_PHOTOS = new Set([
  "marrakech-koutoubia",
  "marrakech-jemaa",
  "marrakech-souk",
  "essaouira-ramparts",
  "essaouira-medina",
  "ouarzazate-kasbah",
  "ait-ben-haddou",
  "merzouga-dunes",
  "merzouga-camels",
  "chefchaouen-street",
  "agadir-marina",
  "casablanca-mosque",
  "rabat-tower",
  "rabat-kasbah",
  "el-jadida-cistern",
  "tanger-medina",
  "fes-tannery",
  "fes-gate",
  "ouzoud-falls",
  "vehicle-mercedes-vito",
  "vehicle-renault-trafic",
  "vehicle-fiat-scudo",
  "vehicle-skoda-octavia",
  "vehicle-minibus",
  "partners-chauffeur-welcome",
  "partners-riad-van",
]);

export function Photo({
  id,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  objectPosition = "center",
}: {
  id: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** CSS object-position — tune when a wide photo gets cropped too tightly on narrow (mobile) aspect ratios. */
  objectPosition?: string;
}) {
  if (!AVAILABLE_PHOTOS.has(id)) {
    return <PlaceholderPhoto seed={id} label={alt} className={className} />;
  }

  const positioned = /\b(absolute|fixed|sticky)\b/.test(className);

  return (
    <div className={`overflow-hidden ${positioned ? "" : "relative"} ${className}`}>
      <Image
        src={`/images/${id}.jpg`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        objectPosition={objectPosition}
      />
    </div>
  );
}
