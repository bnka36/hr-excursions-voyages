import type { Metadata } from "next";
import { Compass, MapPinned, CalendarRange, Sparkles } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({ locale, title: dict.tours.title, description: dict.tours.subtitle, path: "circuits" });
}

export default async function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  const steps = [
    { icon: Compass, title: dict.quoteForm.fields.to, description: dict.tours.subtitle },
    { icon: MapPinned, title: dict.common.destination, description: dict.tours.intro },
    { icon: CalendarRange, title: dict.common.duration, description: dict.tours.intro },
    { icon: Sparkles, title: dict.nav.requestQuote, description: dict.tours.cta },
  ];

  return (
    <>
      <PageHero eyebrow={dict.nav.tours} title={dict.tours.title} subtitle={dict.tours.subtitle} seed="tours-hero" />

      <section className="bg-paper py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <p className="text-base leading-relaxed text-stone md:text-lg">{dict.tours.intro}</p>
          <div className="mt-8">
            <CtaLink href={`/${locale}/contact`} variant="solid" withArrow>
              {dict.tours.cta}
            </CtaLink>
          </div>
        </Container>

        <Container className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title }, i) => (
              <div key={i} className="rounded-2xl border border-ink/10 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-gold-dark">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <p className="mt-4 text-xs font-semibold tracking-[0.15em] text-gold-dark uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-serif text-lg text-ink">{title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
