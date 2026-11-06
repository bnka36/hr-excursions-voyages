import Link from "next/link";
import { Car, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { navItems } from "@/lib/nav";
import { business } from "@/lib/data/business";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  // Static build-time year (no request-time Date access, keeps the page fully prerenderable).
  const year = 2026;

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold-light">
                <Car className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg text-paper">HR Excursions &amp; Voyages</span>
                <span className="text-[10px] tracking-[0.25em] text-gold-light uppercase">{business.owner}</span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-light">{dict.footer.tagline}</p>
            {business.social.facebook || business.social.instagram ? (
              <div className="mt-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">{dict.footer.followUs}</p>
                <div className="mt-3 flex gap-3">
                  {business.social.facebook ? (
                    <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 hover:border-gold">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                  {business.social.instagram ? (
                    <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 hover:border-gold">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">{dict.footer.linksTitle}</p>
            <ul className="mt-5 space-y-3">
              {navItems
                .filter((i) => i.href)
                .map((item) => (
                  <li key={item.href}>
                    <Link href={`/${locale}/${item.href}`} className="text-sm text-stone-light transition-colors hover:text-gold-light">
                      {dict.nav[item.label]}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">Legal</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href={`/${locale}/mentions-legales`} className="text-sm text-stone-light transition-colors hover:text-gold-light">
                  {dict.footer.legalNotice}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/confidentialite`} className="text-sm text-stone-light transition-colors hover:text-gold-light">
                  {dict.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/conditions-de-service`} className="text-sm text-stone-light transition-colors hover:text-gold-light">
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">{dict.footer.contactUs}</p>
            <ul className="mt-5 space-y-3">
              {business.phones.slice(0, 2).map((p) => (
                <li key={p.display} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                  <a href={p.href} className="text-sm text-stone-light transition-colors hover:text-gold-light" dir="ltr">
                    {p.display}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <a href={`mailto:${business.email}`} className="text-sm text-stone-light transition-colors hover:text-gold-light" dir="ltr">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span className="text-sm text-stone-light">{business.country}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-stone-light md:flex-row">
          <p>
            © {year} HR Excursions &amp; Voyages — {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
