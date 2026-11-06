import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { navItems } from "@/lib/nav";
import { excursions } from "@/lib/data/excursions";

const BASE_URL = "https://hr-excursions-voyages.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = navItems.map((i) => i.href).filter(Boolean);
  const legalPaths = ["mentions-legales", "confidentialite", "conditions-de-service"];
  const excursionPaths = excursions.filter((e) => e.published).map((e) => `excursions/${e.slug}`);

  const allPaths = ["", ...staticPaths, ...legalPaths, ...excursionPaths];

  return locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${BASE_URL}/${locale}${path ? `/${path}` : ""}`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    }))
  );
}
