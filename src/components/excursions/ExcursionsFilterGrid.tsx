"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Excursion, Destination } from "@/lib/data/types";
import { ExcursionCard } from "./ExcursionCard";

export function ExcursionsFilterGrid({
  excursions,
  destinations,
  locale,
  dict,
}: {
  excursions: Excursion[];
  destinations: Destination[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [destinationId, setDestinationId] = useState("");
  const [category, setCategory] = useState("");

  const durations = useMemo(() => {
    const seen = new Map<string, string>();
    for (const e of excursions) seen.set(e.duration[locale], e.duration[locale]);
    return Array.from(seen.values());
  }, [excursions, locale]);
  const [duration, setDuration] = useState("");

  const filtered = excursions.filter((e) => {
    if (destinationId && e.destinationId !== destinationId) return false;
    if (category && e.category !== category) return false;
    if (duration && e.duration[locale] !== duration) return false;
    return true;
  });

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="text-xs font-medium text-stone">{dict.excursionsPage.filters.destination}</label>
          <select
            value={destinationId}
            onChange={(e) => setDestinationId(e.target.value)}
            className="mt-1 min-w-[180px] rounded-lg border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink"
          >
            <option value="">{dict.common.allDestinations}</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name[locale]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-stone">{dict.excursionsPage.filters.duration}</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 min-w-[160px] rounded-lg border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink"
          >
            <option value="">{dict.common.allDurations}</option>
            {durations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-stone">{dict.excursionsPage.filters.category}</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 min-w-[160px] rounded-lg border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink"
          >
            <option value="">{dict.common.allCategories}</option>
            <option value="day-trip">{dict.quoteForm.tabs.excursion}</option>
            <option value="multi-day">{dict.quoteForm.tabs.tour}</option>
          </select>
        </div>
        {destinationId || category || duration ? (
          <button
            type="button"
            onClick={() => {
              setDestinationId("");
              setCategory("");
              setDuration("");
            }}
            className="text-sm font-medium text-gold-dark underline-offset-2 hover:underline"
          >
            {dict.excursionsPage.filters.reset}
          </button>
        ) : null}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((excursion) => (
            <ExcursionCard key={excursion.id} excursion={excursion} locale={locale} dict={dict} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-sm text-stone">{dict.excursionsPage.noResults}</p>
      )}
    </div>
  );
}
