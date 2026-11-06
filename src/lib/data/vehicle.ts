import type { Vehicle } from "./types";

/**
 * Only the vehicle confirmed in the brief. Do not add other vehicles or
 * invent specifications — extend this array once new vehicles are confirmed.
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
      fr: ["Transferts aéroport", "Transport privé", "Excursions à la journée", "Circuits sur mesure", "Groupes jusqu'à 7 personnes"],
      en: ["Airport transfers", "Private transport", "Day excursions", "Tailor-made tours", "Groups up to 7 people"],
      es: ["Traslados al aeropuerto", "Transporte privado", "Excursiones de un día", "Circuitos a medida", "Grupos de hasta 7 personas"],
      ar: ["النقل من وإلى المطار", "النقل الخاص", "الرحلات اليومية", "البرامج السياحية المصممة خصيصًا", "مجموعات تصل إلى 7 أشخاص"],
    },
    images: ["vito-exterior-1", "vito-interior-1", "vito-exterior-2"],
  },
];

export const primaryVehicle = vehicles[0];
