"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import {
  Map as MapLibreMap,
  NavigationControl,
  setWorkerUrl,
  type StyleSpecification,
  type MapGeoJSONFeature,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// Turbopack doesn't resolve maplibre's `new URL('./worker.mjs', import.meta.url)`
// asset reference, so the worker script is copied to /public (see
// package.json's "postinstall") and loaded from there explicitly.
if (typeof window !== "undefined") {
  setWorkerUrl("/maplibre-gl-worker.mjs");
}
import { X, MapPin, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Destination } from "@/lib/data/types";
import { getExcursionsByDestination } from "@/lib/data/excursions";
import { buildWhatsappLink } from "@/lib/utils/whatsapp";
import { business } from "@/lib/data/business";
import Link from "next/link";

const INK = "#171717";
const GOLD = "#ad874b";
const IVORY = "#f3efe8";

function buildStyle(): StyleSpecification {
  return {
    version: 8,
    sources: {
      morocco: { type: "geojson", data: "/data/morocco.geojson" },
    },
    layers: [
      { id: "bg", type: "background", paint: { "background-color": INK } },
      {
        id: "morocco-fill",
        type: "fill",
        source: "morocco",
        paint: { "fill-color": "#2a2420", "fill-opacity": 1 },
      },
      {
        id: "morocco-line",
        type: "line",
        source: "morocco",
        paint: { "line-color": GOLD, "line-width": 1.2, "line-opacity": 0.85 },
      },
    ],
  };
}

export function MoroccoMap({
  locale,
  dict,
  destinations,
}: {
  locale: Locale;
  dict: Dictionary;
  destinations: Destination[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [fromId, setFromId] = useState<string>("");
  const [toId, setToId] = useState<string>("");

  const selected = useMemo(() => destinations.find((d) => d.id === selectedId) ?? null, [destinations, selectedId]);

  const geojson = useMemo(
    () => ({
      type: "FeatureCollection" as const,
      features: destinations.map((d) => ({
        type: "Feature" as const,
        geometry: { type: "Point" as const, coordinates: d.coordinates },
        properties: { id: d.id, name: d.name[locale] },
      })),
    }),
    [destinations, locale]
  );

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new MapLibreMap({
      container: containerRef.current,
      style: buildStyle(),
      center: [-7.5, 29.5],
      zoom: 4.3,
      minZoom: 3.5,
      maxZoom: 7,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: { compact: true },
    });
    mapRef.current = map;

    map.addControl(new NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      map.addSource("destinations", { type: "geojson", data: geojson, promoteId: "id" });

      map.addLayer({
        id: "dest-halo",
        type: "circle",
        source: "destinations",
        paint: {
          "circle-radius": ["case", ["boolean", ["feature-state", "hover"], false], 16, 11],
          "circle-color": GOLD,
          "circle-opacity": 0.18,
        },
      });

      map.addLayer({
        id: "dest-dot",
        type: "circle",
        source: "destinations",
        paint: {
          "circle-radius": ["case", ["boolean", ["feature-state", "hover"], false], 7, 5.5],
          "circle-color": IVORY,
          "circle-stroke-color": GOLD,
          "circle-stroke-width": 2,
        },
      });

      map.addLayer({
        id: "dest-label",
        type: "symbol",
        source: "destinations",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Noto Sans Regular"],
          "text-size": 12,
          "text-offset": [0, 1.3],
          "text-anchor": "top",
          "text-optional": true,
        },
        paint: {
          "text-color": IVORY,
          "text-halo-color": INK,
          "text-halo-width": 1.4,
        },
      });

      // fit bounds to Morocco silhouette
      map.fitBounds(
        [
          [-13.5, 27.3],
          [-0.8, 36.1],
        ],
        { padding: { top: 40, bottom: 40, left: 40, right: 40 }, duration: 0 }
      );
    });

    let hoveredFeatureId: string | number | null = null;
    map.on("mousemove", "dest-dot", (e) => {
      map.getCanvas().style.cursor = "pointer";
      const f = e.features?.[0] as MapGeoJSONFeature | undefined;
      if (!f) return;
      if (hoveredFeatureId !== null) {
        map.setFeatureState({ source: "destinations", id: hoveredFeatureId }, { hover: false });
      }
      hoveredFeatureId = f.id ?? null;
      if (hoveredFeatureId !== null) {
        map.setFeatureState({ source: "destinations", id: hoveredFeatureId }, { hover: true });
      }
      setHoveredId((f.properties as { id?: string })?.id ?? null);
    });
    map.on("mouseleave", "dest-dot", () => {
      map.getCanvas().style.cursor = "";
      if (hoveredFeatureId !== null) {
        map.setFeatureState({ source: "destinations", id: hoveredFeatureId }, { hover: false });
      }
      hoveredFeatureId = null;
      setHoveredId(null);
    });
    map.on("click", "dest-dot", (e) => {
      const f = e.features?.[0] as MapGeoJSONFeature | undefined;
      const id = (f?.properties as { id?: string })?.id;
      if (id) setSelectedId(id);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const excursionsForSelected = selected ? getExcursionsByDestination(selected.id) : [];

  const fromName = destinations.find((d) => d.id === fromId)?.name[locale] ?? "";
  const toName = destinations.find((d) => d.id === toId)?.name[locale] ?? "";
  const tripMessage = `Bonjour ${business.owner}, je souhaite demander un trajet${fromName ? ` de ${fromName}` : ""}${toName ? ` à ${toName}` : ""}.`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <div className="relative">
        <div
          ref={containerRef}
          className="h-[420px] w-full overflow-hidden rounded-3xl border border-paper/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] md:h-[520px]"
        />
        <p className="mt-2 text-right text-[11px] text-stone">{dict.map.attribution}</p>

        {selected ? (
          <div className="absolute inset-x-3 bottom-6 z-10 rounded-2xl border border-gold/30 bg-ink/95 p-5 text-paper shadow-2xl backdrop-blur-sm md:inset-x-6 md:p-6">
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              aria-label={dict.map.closePanel}
              className="absolute right-4 top-4 text-paper/60 hover:text-gold-light"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 text-gold-light">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">{selected.region[locale]}</span>
            </div>
            <h3 className="mt-2 font-serif text-2xl text-paper">{selected.name[locale]}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-light">{selected.description[locale]}</p>

            {excursionsForSelected.length > 0 ? (
              <div className="mt-4">
                <p className="text-xs font-semibold tracking-wide text-gold-light">
                  {dict.map.excursionsFrom} {selected.name[locale]}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {excursionsForSelected.map((ex) => (
                    <li key={ex.id}>
                      <Link
                        href={`/${locale}/excursions/${ex.slug}`}
                        className="rounded-full border border-paper/20 px-3 py-1.5 text-xs text-paper hover:border-gold hover:text-gold-light"
                      >
                        {ex.title[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-3 text-xs text-stone-light">{dict.map.noExcursions}</p>
            )}

            <a
              href={buildWhatsappLink(
                `Bonjour ${business.owner}, je souhaite demander un trajet vers ${selected.name[locale]}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light"
            >
              {dict.map.requestTrip}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-2xl border border-ink/10 bg-ivory p-5">
          <p className="font-serif text-lg text-ink">{dict.map.requestTrip}</p>
          <div className="mt-4 space-y-3">
            <div>
              <label className="text-xs font-medium text-stone">{dict.map.selectFrom}</label>
              <select
                value={fromId}
                onChange={(e) => setFromId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink"
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
              <label className="text-xs font-medium text-stone">{dict.map.selectTo}</label>
              <select
                value={toId}
                onChange={(e) => setToId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink"
              >
                <option value="">{dict.common.allDestinations}</option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name[locale]}
                  </option>
                ))}
              </select>
            </div>
            <a
              href={buildWhatsappLink(tripMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light"
            >
              {dict.map.requestTrip}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-paper/15 bg-ink-soft p-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">{dict.map.listTitle}</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {destinations.map((d) => (
              <li key={d.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(d.id)}
                  className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                    hoveredId === d.id || selectedId === d.id
                      ? "border-gold text-gold-light"
                      : "border-paper/15 text-paper/75 hover:border-gold/50"
                  }`}
                >
                  {d.name[locale]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
