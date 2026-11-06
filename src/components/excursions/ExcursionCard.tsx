import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Excursion } from "@/lib/data/types";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";

export function ExcursionCard({
  excursion,
  locale,
  dict,
}: {
  excursion: Excursion;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Link
      href={`/${locale}/excursions/${excursion.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 transition-shadow hover:shadow-xl"
    >
      <PlaceholderPhoto
        seed={excursion.images[0] ?? excursion.id}
        label={excursion.title[locale]}
        className="h-52 w-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-gold-dark">
          <Clock className="h-3.5 w-3.5" />
          {excursion.duration[locale]}
        </div>
        <h3 className="mt-2 font-serif text-lg text-ink">{excursion.title[locale]}</h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-stone">
          {excursion.shortDescription[locale]}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">
            {excursion.priceFrom ? `${excursion.priceFrom} ${excursion.currency}` : dict.common.onRequest}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
            {dict.common.discover}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
