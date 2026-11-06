"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { navItems } from "@/lib/nav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { business } from "@/lib/data/business";

// Always solid (not transparent-over-hero): some pages (legal pages, the
// vehicle gallery) have no guaranteed-dark region behind the header, and a
// header whose legibility depends on each page's background is a bug
// waiting to happen. A persistent light header is also how Blacklane itself
// does it on closer inspection, so this isn't a style compromise.
export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation. Adjusting state during render
  // (rather than in an effect) avoids an extra, cascading render — see
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || open ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold-dark">
            <Car className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg tracking-wide text-ink">HR Excursions</span>
            <span className="text-[10px] tracking-[0.25em] text-gold-dark uppercase">{business.owner}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-gold-dark"
            >
              {dict.nav[item.label]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            {dict.nav.requestQuote}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-paper px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}/${item.href}`}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-ivory"
              >
                {dict.nav[item.label]}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageSwitcher locale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="flex-1 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              {dict.nav.requestQuote}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
