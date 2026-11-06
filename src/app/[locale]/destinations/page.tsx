import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { MoroccoMap } from "@/components/map/MoroccoMap";
import { getEnabledDestinations } from "@/lib/data/destinations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({ locale, title: dict.map.title, description: dict.map.subtitle, path: "destinations" });
}

export default async function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const destinations = getEnabledDestinations();

  return (
    <section className="bg-ink pt-20">
      <Container className="py-16 md:py-24">
        <SectionHeading eyebrow={dict.nav.destinations} title={dict.map.title} subtitle={dict.map.subtitle} dark />

        <div className="mt-12">
          <MoroccoMap locale={locale} dict={dict} destinations={destinations} />
        </div>
      </Container>

      <div className="bg-paper py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <div key={d.id} className="overflow-hidden rounded-2xl border border-ink/10">
                <PlaceholderPhoto seed={d.image} label={d.name[locale]} className="h-44 w-full" />
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-[0.15em] text-gold-dark uppercase">{d.region[locale]}</p>
                  <h3 className="mt-1 font-serif text-lg text-ink">{d.name[locale]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{d.description[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
