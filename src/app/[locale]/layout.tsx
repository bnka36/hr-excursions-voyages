import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "../globals.css";
import { locales, localeDirections, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloatButton } from "@/components/layout/WhatsappFloatButton";
import { notFound } from "next/navigation";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL("https://hr-excursions-voyages.vercel.app"),
    title: {
      default: dict.meta.defaultTitle,
      template: `%s — ${dict.meta.siteName}`,
    },
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const dir = localeDirections[locale];

  return (
    <html lang={locale} dir={dir} className={`${fraunces.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-paper text-ink">
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsappFloatButton label={dict.common.whatsapp} />
      </body>
    </html>
  );
}
