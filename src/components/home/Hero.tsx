import { ShieldCheck, UserCheck, Gem } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { CtaLink } from "@/components/ui/CtaLink";
import { QuoteForm } from "./QuoteForm";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-20">
      <PlaceholderPhoto
        seed="hero-mercedes-vito-marrakech"
        label="Mercedes Vito — HR Excursions & Voyages"
        tone="hero"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-6 pb-40 pt-16 md:px-10 md:pb-56 md:pt-24">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium tracking-wide text-paper/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-gold-light" /> {dict.hero.badges.safety}
            </span>
            <span className="flex items-center gap-1.5">
              <UserCheck className="h-4 w-4 text-gold-light" /> {dict.hero.badges.driver}
            </span>
            <span className="flex items-center gap-1.5">
              <Gem className="h-4 w-4 text-gold-light" /> {dict.hero.badges.service}
            </span>
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.08] text-paper sm:text-5xl md:text-6xl">
            {dict.hero.title}
            <br />
            <span className="italic text-gold-light">{dict.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">{dict.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CtaLink href={`/${locale}/transferts`} variant="solid">
              {dict.hero.ctaTransfer}
            </CtaLink>
            <CtaLink href={`/${locale}/excursions`} variant="outline-dark">
              {dict.hero.ctaExcursions}
            </CtaLink>
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mt-28 w-full max-w-[1280px] px-6 pb-16 md:-mt-40 md:px-10 md:pb-20">
        <QuoteForm dict={dict} locale={locale} />
      </div>
    </section>
  );
}
