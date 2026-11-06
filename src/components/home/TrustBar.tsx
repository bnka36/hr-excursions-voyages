import { ShieldCheck, UserCheck, Gem, Headset, MapPin } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export function TrustBar({ dict }: { dict: Dictionary }) {
  const items = [
    { icon: ShieldCheck, label: dict.trust.reliableService },
    { icon: UserCheck, label: dict.trust.experiencedDriver },
    { icon: Gem, label: dict.trust.comfort },
    { icon: Headset, label: dict.trust.responsiveness },
    { icon: MapPin, label: dict.trust.everywhere },
  ];

  return (
    <section className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 md:px-10 lg:grid-cols-5">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
            <Icon className="h-5 w-5 shrink-0 text-gold-dark" />
            <span className="text-sm font-medium text-ink/80">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
