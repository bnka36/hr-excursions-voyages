import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ExcursionsFilterGrid } from "@/components/excursions/ExcursionsFilterGrid";
import { getPublishedExcursions } from "@/lib/data/excursions";
import { getEnabledDestinations } from "@/lib/data/destinations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.excursionsPage.title,
    description: dict.excursionsPage.subtitle,
    path: "excursions",
  });
}

export default async function ExcursionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const excursions = getPublishedExcursions();
  const destinations = getEnabledDestinations();

  return (
    <>
      <PageHero eyebrow={dict.nav.excursions} title={dict.excursionsPage.title} subtitle={dict.excursionsPage.subtitle} seed="merzouga-dunes" />
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <ExcursionsFilterGrid excursions={excursions} destinations={destinations} locale={locale} dict={dict} />
        </Container>
      </section>
    </>
  );
}
