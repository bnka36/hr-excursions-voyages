import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { services } from "@/lib/data/services";

const serviceLinks: Record<string, string> = {
  airportTransfer: "transferts",
  privateTransport: "transferts",
  excursions: "excursions",
  customTours: "circuits",
  cityTours: "destinations",
  hotelsAgencies: "partenaires",
};

export function ServicesGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={dict.nav.home} title={dict.services.title} subtitle={dict.services.subtitle} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const item = dict.services.items[service.id as keyof typeof dict.services.items];
            return (
              <Link
                key={service.id}
                href={`/${locale}/${serviceLinks[service.id]}`}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 transition-shadow hover:shadow-xl"
              >
                <Photo id={service.image} alt={item.title} className="h-56 w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                    {dict.common.readMore}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
