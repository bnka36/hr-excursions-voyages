import type { Metadata } from "next";
import { Check } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({ locale, title: dict.aboutPage.title, description: dict.aboutPage.subtitle, path: "a-propos" });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={dict.nav.about} title={dict.aboutPage.title} subtitle={dict.aboutPage.subtitle} seed="marrakech-koutoubia" />

      <section className="bg-paper py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {dict.aboutPage.body.map((p) => (
              <p key={p} className="text-base leading-relaxed text-stone md:text-lg">
                {p}
              </p>
            ))}
          </div>

          <div className="h-fit rounded-2xl border border-ink/10 bg-ivory p-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">{dict.aboutPage.commitmentsTitle}</p>
            <ul className="mt-4 space-y-3">
              {dict.aboutPage.commitments.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
