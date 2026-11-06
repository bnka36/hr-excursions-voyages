import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";

export function buildMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalPath = `/${locale}${path ? `/${path}` : ""}`;
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path ? `/${path}` : ""}`])),
    },
    openGraph: {
      title,
      description,
      locale,
      type: "website",
    },
  };
}
