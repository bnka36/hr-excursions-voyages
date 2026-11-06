import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, MapPin, Users, Check, X as XIcon, ArrowRight } from "lucide-react";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { excursions, getExcursionBySlug } from "@/lib/data/excursions";
import { getDestinationById } from "@/lib/data/destinations";
import { buildWhatsappLink } from "@/lib/utils/whatsapp";
import { business } from "@/lib/data/business";

export function generateStaticParams() {
  return locales.flatMap((locale) => excursions.map((e) => ({ locale, slug: e.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const excursion = getExcursionBySlug(slug);
  if (!excursion) return {};
  return buildMetadata({
    locale,
    title: excursion.title[locale],
    description: excursion.shortDescription[locale],
    path: `excursions/${slug}`,
  });
}

export default async function ExcursionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const excursion = getExcursionBySlug(slug);
  if (!excursion || !excursion.published) notFound();
  const dict = await getDictionary(locale);
  const destination = getDestinationById(excursion.destinationId);

  const message = `Bonjour ${business.owner}, je souhaite demander l'excursion "${excursion.title[locale]}".`;

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-20">
        <PlaceholderPhoto seed={excursion.images[0] ?? excursion.id} label={excursion.title[locale]} tone="hero" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">
            <span className="h-px w-8 bg-gold" />
            {dict.nav.excursions}
          </div>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-paper md:text-5xl">{excursion.title[locale]}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">{excursion.shortDescription[locale]}</p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="flex flex-wrap gap-6 border-b border-ink/10 pb-8 text-sm">
                <InfoItem icon={Clock} label={dict.common.duration} value={excursion.duration[locale]} />
                {destination ? (
                  <InfoItem icon={MapPin} label={dict.common.destination} value={destination.name[locale]} />
                ) : null}
                {excursion.maxTravelers ? (
                  <InfoItem icon={Users} label={dict.common.travelers} value={`${excursion.maxTravelers} max.`} />
                ) : null}
              </div>

              <p className="mt-8 text-base leading-relaxed text-stone">{excursion.description[locale]}</p>

              <div className="mt-10">
                <h2 className="font-serif text-2xl text-ink">{dict.common.program}</h2>
                <ol className="mt-4 space-y-3">
                  {excursion.program[locale].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-stone">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ivory text-xs font-semibold text-gold-dark">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-serif text-lg text-ink">{dict.common.included}</h3>
                  <ul className="mt-3 space-y-2">
                    {excursion.included[locale].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink">{dict.common.notIncluded}</h3>
                  <ul className="mt-3 space-y-2">
                    {excursion.notIncluded[locale].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone">
                        <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-stone-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="h-fit rounded-2xl border border-ink/10 bg-ivory p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">{dict.common.departurePoint}</p>
              <p className="mt-1 text-sm text-ink">{excursion.departurePoint[locale]}</p>

              <div className="mt-6 border-t border-ink/10 pt-6">
                <p className="text-2xl font-semibold text-ink">
                  {excursion.priceFrom ? `${excursion.priceFrom} ${excursion.currency}` : dict.excursionsPage.priceOnRequest}
                </p>
                {excursion.priceFrom ? <p className="text-xs text-stone">{dict.common.perVehicle}</p> : null}
              </div>

              <a
                href={buildWhatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-ink hover:bg-gold-light"
              >
                {dict.excursionsPage.requestThis}
                <ArrowRight className="h-4 w-4" />
              </a>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="h-4 w-4 text-gold-dark" />
      <div>
        <p className="text-xs text-stone">{label}</p>
        <p className="font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}
