import type { Metadata } from "next";
import { Check, Users } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { CtaLink } from "@/components/ui/CtaLink";
import { vehicles } from "@/lib/data/vehicle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({ locale, title: dict.vehiclePage.title, description: dict.vehiclePage.subtitle, path: "vehicule" });
}

export default async function VehiclePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-paper pt-20">
      <Container className="py-16 md:py-24">
        <SectionHeading eyebrow={dict.nav.vehicle} title={dict.vehiclePage.title} subtitle={dict.vehiclePage.subtitle} />

        <div className="mt-14 space-y-16">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <Photo
                id={vehicle.images[0]}
                alt={vehicle.name}
                className="h-72 w-full rounded-3xl md:h-96"
              />
              <div>
                <h2 className="font-serif text-3xl text-ink">{vehicle.name}</h2>
                <div className="mt-3 flex items-center gap-2 text-sm text-stone">
                  <Users className="h-4 w-4 text-gold-dark" />
                  {vehicle.capacity} {dict.common.travelers.toLowerCase()} — {vehicle.luggage[locale]}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] text-gold-dark uppercase">
                      {dict.vehiclePage.equipmentTitle}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {vehicle.equipment[locale].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-stone">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] text-gold-dark uppercase">
                      {dict.vehiclePage.suitedForTitle}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {vehicle.suitedFor[locale].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-stone">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7">
                  <CtaLink href={`/${locale}/contact`} variant="solid" withArrow>
                    {dict.vehiclePage.cta}
                  </CtaLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-sm text-stone">{dict.vehiclePage.futureNote}</p>
      </Container>
    </section>
  );
}
