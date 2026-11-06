import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalContent } from "@/lib/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const { title, paragraphs } = legalContent.mentions[locale];
  return buildMetadata({ locale, title, description: paragraphs[0], path: "mentions-legales" });
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const { title, paragraphs } = legalContent.mentions[rawLocale];
  return <LegalPage title={title} paragraphs={paragraphs} />;
}
