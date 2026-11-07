import type { Vehicle } from "./types";

/**
 * The confirmed fleet. Exact passenger counts and equipment lists below use
 * typical specs for each model's passenger/combi trim — have M. Mustapha
 * confirm the precise figures and equipment per vehicle before publishing.
 * Photos are real, licensed stock photography of each model (see
 * public/images/vehicles/CREDITS.md) — not photos of the client's actual
 * units, since none were supplied.
 */
export const vehicles: Vehicle[] = [
  {
    id: "mercedes-vito",
    slug: "mercedes-vito",
    name: "Mercedes Vito",
    capacity: 7,
    luggage: {
      fr: "Grand espace bagages, adapté aux valises de voyage",
      en: "Large luggage space, suited for travel suitcases",
      es: "Amplio espacio para equipaje, apto para maletas de viaje",
      ar: "مساحة واسعة للأمتعة، تتسع لحقائب السفر",
    },
    equipment: {
      fr: ["Climatisation", "Sièges confortables en cuir", "Grand espace bagages", "Vitres teintées"],
      en: ["Air conditioning", "Comfortable leather seats", "Large luggage space", "Tinted windows"],
      es: ["Aire acondicionado", "Asientos cómodos de piel", "Amplio espacio para equipaje", "Ventanas tintadas"],
      ar: ["تكييف هواء", "مقاعد جلدية مريحة", "مساحة واسعة للأمتعة", "نوافذ مظللة"],
    },
    suitedFor: {
      fr: ["Transferts aéroport", "Transport privé", "Excursions à la journée", "Circuits sur mesure", "Petits groupes"],
      en: ["Airport transfers", "Private transport", "Day excursions", "Tailor-made tours", "Small groups"],
      es: ["Traslados al aeropuerto", "Transporte privado", "Excursiones de un día", "Circuitos a medida", "Grupos pequeños"],
      ar: ["النقل من وإلى المطار", "النقل الخاص", "الرحلات اليومية", "البرامج السياحية المصممة خصيصًا", "مجموعات صغيرة"],
    },
    images: ["vehicle-mercedes-vito"],
  },
  {
    id: "renault-trafic",
    slug: "renault-trafic",
    name: "Renault Trafic",
    capacity: 8,
    luggage: {
      fr: "Espace bagages adapté aux groupes et familles",
      en: "Luggage space suited for groups and families",
      es: "Espacio para equipaje adecuado para grupos y familias",
      ar: "مساحة للأمتعة مناسبة للمجموعات والعائلات",
    },
    equipment: {
      fr: ["Climatisation", "Sièges confortables", "Espace bagages", "Vitres teintées"],
      en: ["Air conditioning", "Comfortable seats", "Luggage space", "Tinted windows"],
      es: ["Aire acondicionado", "Asientos cómodos", "Espacio para equipaje", "Ventanas tintadas"],
      ar: ["تكييف هواء", "مقاعد مريحة", "مساحة للأمتعة", "نوافذ مظللة"],
    },
    suitedFor: {
      fr: ["Transferts aéroport", "Excursions de groupe", "Circuits sur mesure"],
      en: ["Airport transfers", "Group excursions", "Tailor-made tours"],
      es: ["Traslados al aeropuerto", "Excursiones en grupo", "Circuitos a medida"],
      ar: ["النقل من وإلى المطار", "الرحلات الجماعية", "البرامج السياحية المصممة خصيصًا"],
    },
    images: ["vehicle-renault-trafic"],
  },
  {
    id: "fiat-scudo",
    slug: "fiat-scudo",
    name: "Fiat Scudo",
    capacity: 8,
    luggage: {
      fr: "Espace bagages adapté aux groupes et familles",
      en: "Luggage space suited for groups and families",
      es: "Espacio para equipaje adecuado para grupos y familias",
      ar: "مساحة للأمتعة مناسبة للمجموعات والعائلات",
    },
    equipment: {
      fr: ["Climatisation", "Sièges confortables", "Espace bagages", "Vitres teintées"],
      en: ["Air conditioning", "Comfortable seats", "Luggage space", "Tinted windows"],
      es: ["Aire acondicionado", "Asientos cómodos", "Espacio para equipaje", "Ventanas tintadas"],
      ar: ["تكييف هواء", "مقاعد مريحة", "مساحة للأمتعة", "نوافذ مظللة"],
    },
    suitedFor: {
      fr: ["Transferts aéroport", "Excursions de groupe", "Circuits sur mesure"],
      en: ["Airport transfers", "Group excursions", "Tailor-made tours"],
      es: ["Traslados al aeropuerto", "Excursiones en grupo", "Circuitos a medida"],
      ar: ["النقل من وإلى المطار", "الرحلات الجماعية", "البرامج السياحية المصممة خصيصًا"],
    },
    images: ["vehicle-fiat-scudo"],
  },
  {
    id: "skoda-berline",
    slug: "skoda",
    name: "Škoda",
    capacity: 4,
    luggage: {
      fr: "Coffre adapté aux bagages de 2 à 4 voyageurs",
      en: "Trunk suited for 2 to 4 travelers' luggage",
      es: "Maletero adecuado para el equipaje de 2 a 4 viajeros",
      ar: "صندوق خلفي مناسب لأمتعة 2 إلى 4 مسافرين",
    },
    equipment: {
      fr: ["Climatisation", "Sièges confortables", "Coffre spacieux"],
      en: ["Air conditioning", "Comfortable seats", "Spacious trunk"],
      es: ["Aire acondicionado", "Asientos cómodos", "Maletero amplio"],
      ar: ["تكييف هواء", "مقاعد مريحة", "صندوق خلفي واسع"],
    },
    suitedFor: {
      fr: ["Transferts aéroport", "Transport privé individuel ou en couple", "Déplacements professionnels"],
      en: ["Airport transfers", "Private transport for individuals or couples", "Business travel"],
      es: ["Traslados al aeropuerto", "Transporte privado individual o en pareja", "Viajes de negocios"],
      ar: ["النقل من وإلى المطار", "النقل الخاص للأفراد أو الأزواج", "التنقلات المهنية"],
    },
    images: ["vehicle-skoda-octavia"],
  },
  {
    id: "minibus-14",
    slug: "minibus",
    name: "Minibus 14 places",
    capacity: 14,
    luggage: {
      fr: "Soute à bagages adaptée aux grands groupes",
      en: "Luggage hold suited for large groups",
      es: "Bodega de equipaje adecuada para grupos grandes",
      ar: "حجرة أمتعة مناسبة للمجموعات الكبيرة",
    },
    equipment: {
      fr: ["Climatisation", "Sièges confortables", "Grande soute à bagages"],
      en: ["Air conditioning", "Comfortable seats", "Large luggage hold"],
      es: ["Aire acondicionado", "Asientos cómodos", "Amplia bodega de equipaje"],
      ar: ["تكييف هواء", "مقاعد مريحة", "حجرة أمتعة واسعة"],
    },
    suitedFor: {
      fr: ["Groupes et familles nombreuses", "Excursions et circuits de groupe", "Transferts pour hôtels et agences"],
      en: ["Groups and large families", "Group excursions and tours", "Transfers for hotels and agencies"],
      es: ["Grupos y familias numerosas", "Excursiones y circuitos en grupo", "Traslados para hoteles y agencias"],
      ar: ["المجموعات والعائلات الكبيرة", "الرحلات والبرامج الجماعية", "نقل الفنادق والوكالات"],
    },
    images: ["vehicle-minibus"],
  },
];

export const primaryVehicle = vehicles[0];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}
