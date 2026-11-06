import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { CtaLink } from "@/components/ui/CtaLink";
import { primaryVehicle } from "@/lib/data/vehicle";

export function VehiclePartnersSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 px-6 md:px-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-paper">
          <PlaceholderPhoto seed="vito-exterior-1" label={primaryVehicle.name} className="h-56 w-full" />
          <div className="p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">{dict.vehiclePage.title}</p>
            <h3 className="mt-2 font-serif text-2xl">{primaryVehicle.name}</h3>
            <p className="mt-2 text-sm text-stone-light">{dict.vehiclePage.subtitle}</p>
            <ul className="mt-5 space-y-2.5 text-sm text-stone-light">
              {primaryVehicle.equipment[locale].slice(0, 4).map((eq) => (
                <li key={eq} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-gold-light" />
                  {eq}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <CtaLink href={`/${locale}/vehicule`} variant="solid">
                {dict.common.readMore}
              </CtaLink>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ivory">
          <PlaceholderPhoto seed="riad-pool" label="Hôtels & agences" className="h-56 w-full" />
          <div className="p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">{dict.nav.partners}</p>
            <h3 className="mt-2 font-serif text-2xl text-ink">{dict.partnersPage.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone">{dict.partnersPage.intro}</p>
            <div className="mt-7">
              <CtaLink href={`/${locale}/partenaires`} variant="outline">
                {dict.common.readMore}
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
