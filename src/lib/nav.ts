import type { Dictionary } from "@/lib/i18n/get-dictionary";

export type NavItem = { href: string; label: keyof Dictionary["nav"] };

/** Canonical path segments, shared across all locales — only the copy is translated. */
export const navItems: NavItem[] = [
  { href: "", label: "home" },
  { href: "transferts", label: "transfers" },
  { href: "excursions", label: "excursions" },
  { href: "circuits", label: "tours" },
  { href: "destinations", label: "destinations" },
  { href: "vehicule", label: "vehicle" },
  { href: "partenaires", label: "partners" },
  { href: "a-propos", label: "about" },
  { href: "contact", label: "contact" },
];
