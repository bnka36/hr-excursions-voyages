import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MoroccoMap } from "@/components/map/MoroccoMap";
import { getEnabledDestinations } from "@/lib/data/destinations";

export function DestinationsMapSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const destinations = getEnabledDestinations();

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow={dict.nav.destinations}
            title={dict.map.title}
            subtitle={dict.map.subtitle}
            dark
          />
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-stone-light">
            {dict.map.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gold-light" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <MoroccoMap locale={locale} dict={dict} destinations={destinations} />
        </div>
      </div>
    </section>
  );
}
