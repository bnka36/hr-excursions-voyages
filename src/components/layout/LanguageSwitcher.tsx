"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe, Check } from "lucide-react";
import { locales, localeNames, localizedPath, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-2 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:border-gold"
      >
        <Globe className="h-3.5 w-3.5" />
        {locale}
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-ink/10 bg-paper py-1 shadow-xl"
        >
          {locales.map((l) => (
            <Link
              key={l}
              href={localizedPath(pathname, l)}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 text-sm text-ink hover:bg-ivory"
            >
              {localeNames[l]}
              {l === locale ? <Check className="h-3.5 w-3.5 text-gold-dark" /> : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
