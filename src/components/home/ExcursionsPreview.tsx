import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { ExcursionCard } from "@/components/excursions/ExcursionCard";
import { getPublishedExcursions } from "@/lib/data/excursions";

export function ExcursionsPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const excursions = getPublishedExcursions();

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={dict.nav.excursions} title={dict.excursionsPage.title} subtitle={dict.excursionsPage.subtitle} />
          <CtaLink href={`/${locale}/excursions`} variant="outline" withArrow>
            {dict.common.viewAllExcursions}
          </CtaLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {excursions.map((excursion) => (
            <ExcursionCard key={excursion.id} excursion={excursion} locale={locale} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}
