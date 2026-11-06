import type { Metadata } from "next";
import { ShieldCheck, Headset, SlidersHorizontal, UserCheck } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { PartnerForm } from "@/components/partners/PartnerForm";

const icons = {
  reliability: ShieldCheck,
  responsiveness: Headset,
  flexibility: SlidersHorizontal,
  singleContact: UserCheck,
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({ locale, title: dict.partnersPage.title, description: dict.partnersPage.subtitle, path: "partenaires" });
}

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={dict.nav.partners} title={dict.partnersPage.title} subtitle={dict.partnersPage.subtitle} seed="partners-hero" />

      <section className="bg-paper py-20 md:py-28">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-stone md:text-lg">{dict.partnersPage.intro}</p>
        </Container>

        <Container className="mt-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => {
              const Icon = icons[key];
              const vp = dict.partnersPage.valueProps[key];
              return (
                <div key={key}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-gold-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-ink">{vp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{vp.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <Container className="max-w-2xl">
          <PartnerForm dict={dict} />
        </Container>
      </section>
    </>
  );
}
