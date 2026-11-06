import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/home/QuoteForm";
import { business } from "@/lib/data/business";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);
  return buildMetadata({ locale, title: dict.contactPage.title, description: dict.contactPage.subtitle, path: "contact" });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={dict.nav.contact} title={dict.contactPage.title} subtitle={dict.contactPage.subtitle} seed="contact-hero" />

      <section className="bg-paper py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">{dict.contactPage.phonesTitle}</p>
              <ul className="mt-3 space-y-2.5">
                {business.phones.map((p) => (
                  <li key={p.display} className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-gold-dark" />
                    <a href={p.href} dir="ltr" className="text-sm text-ink hover:text-gold-dark">
                      {p.display}
                    </a>
                    <span className="text-xs text-stone">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">{dict.contactPage.emailTitle}</p>
              <div className="mt-3 flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold-dark" />
                <a href={`mailto:${business.email}`} dir="ltr" className="text-sm text-ink hover:text-gold-dark">
                  {business.email}
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">{dict.contactPage.locationTitle}</p>
              <div className="mt-3 flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-gold-dark" />
                <span className="text-sm text-ink">{dict.contactPage.location}</span>
              </div>
            </div>
          </div>

          <div>
            <QuoteForm dict={dict} locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
