import type { ServiceItem } from "./types";

/**
 * The six core services. Titles/descriptions live in the i18n dictionaries
 * under `services.items.<id>` so copy and labels stay in one place per locale.
 */
export const services: ServiceItem[] = [
  { id: "airportTransfer", slug: "transferts-aeroport", image: "vehicle-mercedes-vito" },
  { id: "privateTransport", slug: "transport-prive", image: "vehicle-skoda-octavia" },
  { id: "excursions", slug: "excursions", image: "merzouga-dunes" },
  { id: "customTours", slug: "circuits-sur-mesure", image: "ait-ben-haddou" },
  { id: "cityTours", slug: "visites-de-villes", image: "marrakech-jemaa" },
  { id: "hotelsAgencies", slug: "hotels-agences", image: "partners" },
];
