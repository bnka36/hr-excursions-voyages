import type { Metadata } from "next";
import { PlaneTakeoff, UserRound, Car, BadgeCheck } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/home/QuoteForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { tracking: PlaneTakeoff, meet: UserRound, comfort: Car, pro: BadgeCheck } as const;

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
    title: dict.transfersPage.title,
    description: dict.transfersPage.subtitle,
    path: "transferts",
  });
}

export default async function TransfersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={dict.nav.transfers} title={dict.transfersPage.title} subtitle={dict.transfersPage.subtitle} seed="transfers-hero" />

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow={dict.nav.transfers} title={dict.transfersPage.title} />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => {
              const Icon = icons[key];
              const point = dict.transfersPage.points[key];
              return (
                <div key={key}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-gold-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{point.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow={dict.quoteForm.title} title={dict.quoteForm.title} align="center" className="mx-auto" />
          <div className="mt-10">
            <QuoteForm dict={dict} locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
