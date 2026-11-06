import type { Locale } from "@/lib/i18n/config";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { DestinationsMapSection } from "@/components/home/DestinationsMapSection";
import { ExcursionsPreview } from "@/components/home/ExcursionsPreview";
import { VehiclePartnersSection } from "@/components/home/VehiclePartnersSection";
import { TrustBar } from "@/components/home/TrustBar";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ServicesGrid locale={locale} dict={dict} />
      <DestinationsMapSection locale={locale} dict={dict} />
      <ExcursionsPreview locale={locale} dict={dict} />
      <VehiclePartnersSection locale={locale} dict={dict} />
      <TrustBar dict={dict} />
    </>
  );
}
