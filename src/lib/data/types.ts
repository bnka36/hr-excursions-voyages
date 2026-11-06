import type { Locale } from "@/lib/i18n/config";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type Destination = {
  id: string;
  slug: string;
  /** [longitude, latitude] */
  coordinates: [number, number];
  /** Whether this destination is currently offered — administrable. */
  enabled: boolean;
  name: LocalizedText;
  region: LocalizedText;
  description: LocalizedText;
  image: string;
};

export type ServiceItem = {
  id: string;
  slug: string;
  image: string;
};

export type ExcursionCategory = "day-trip" | "multi-day" | "city-tour";

export type Excursion = {
  id: string;
  slug: string;
  destinationId: string;
  category: ExcursionCategory;
  /** Free-form duration key, displayed as-is per locale (e.g. "1 jour" / "1 day"). */
  duration: LocalizedText;
  durationHours: number;
  published: boolean;
  priceFrom: number | null;
  currency: "MAD" | "EUR";
  maxTravelers: number | null;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  departurePoint: LocalizedText;
  program: LocalizedList;
  included: LocalizedList;
  notIncluded: LocalizedList;
  images: string[];
};

export type Vehicle = {
  id: string;
  slug: string;
  name: string;
  capacity: number;
  luggage: LocalizedText;
  equipment: LocalizedList;
  suitedFor: LocalizedList;
  images: string[];
};
