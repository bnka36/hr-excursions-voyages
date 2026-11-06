import type { Metadata } from "next";
import { Check, Users } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { CtaLink } from "@/components/ui/CtaLink";
import { primaryVehicle } from "@/lib/data/vehicle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({ locale, title: `${dict.vehiclePage.title} — ${primaryVehicle.name}`, description: dict.vehiclePage.subtitle, path: "vehicule" });
}

export default async function VehiclePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-paper pt-20">
      <Container className="py-16 md:py-24">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-dark uppercase">
          <span className="h-px w-8 bg-gold" />
          {dict.vehiclePage.title}
        </div>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">{primaryVehicle.name}</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone md:text-lg">{dict.vehiclePage.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {primaryVehicle.images.map((seed, i) => (
            <PlaceholderPhoto
              key={seed}
              seed={seed}
              label={`${primaryVehicle.name} ${i + 1}`}
              className={`h-64 w-full rounded-2xl ${i === 0 ? "sm:col-span-2 sm:row-span-2 sm:h-full" : ""}`}
            />
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 p-6">
            <div className="flex items-center gap-2.5 text-gold-dark">
              <Users className="h-5 w-5" />
              <p className="text-xs font-semibold tracking-[0.15em] uppercase">{dict.vehiclePage.specsTitle}</p>
            </div>
            <p className="mt-3 text-sm text-stone">
              {primaryVehicle.capacity} {dict.common.travelers.toLowerCase()}
            </p>
            <p className="mt-1 text-sm text-stone">{primaryVehicle.luggage[locale]}</p>
          </div>

          <div className="rounded-2xl border border-ink/10 p-6">
            <p className="text-xs font-semibold tracking-[0.15em] text-gold-dark uppercase">{dict.vehiclePage.equipmentTitle}</p>
            <ul className="mt-3 space-y-2">
              {primaryVehicle.equipment[locale].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ink/10 p-6">
            <p className="text-xs font-semibold tracking-[0.15em] text-gold-dark uppercase">{dict.vehiclePage.suitedForTitle}</p>
            <ul className="mt-3 space-y-2">
              {primaryVehicle.suitedFor[locale].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-sm text-stone">{dict.vehiclePage.futureNote}</p>

        <div className="mt-8">
          <CtaLink href={`/${locale}/contact`} variant="solid" withArrow>
            {dict.vehiclePage.cta}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
