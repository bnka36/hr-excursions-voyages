export const locales = ["fr", "en", "es", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  ar: "العربية",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  es: "ltr",
  ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds an absolute path for another locale, preserving the rest of the pathname. */
export function localizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }
  return "/" + segments.join("/");
}
