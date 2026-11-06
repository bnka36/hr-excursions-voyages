import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hr-excursions-voyages.vercel.app/sitemap.xml",
  };
}
