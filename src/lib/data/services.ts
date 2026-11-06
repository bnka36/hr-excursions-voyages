import type { ServiceItem } from "./types";

/**
 * The six core services. Titles/descriptions live in the i18n dictionaries
 * under `services.items.<id>` so copy and labels stay in one place per locale.
 */
export const services: ServiceItem[] = [
  { id: "airportTransfer", slug: "transferts-aeroport", image: "airport" },
  { id: "privateTransport", slug: "transport-prive", image: "private" },
  { id: "excursions", slug: "excursions", image: "excursion" },
  { id: "customTours", slug: "circuits-sur-mesure", image: "tour" },
  { id: "cityTours", slug: "visites-de-villes", image: "city" },
  { id: "hotelsAgencies", slug: "hotels-agences", image: "partners" },
];
