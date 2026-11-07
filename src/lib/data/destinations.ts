import type { Destination } from "./types";

/**
 * Administrable list of destinations shown on the interactive map.
 * `enabled` controls whether a destination is active on the site —
 * toggle it instead of deleting the entry.
 */
export const destinations: Destination[] = [
  {
    id: "casablanca",
    slug: "casablanca",
    coordinates: [-7.5898, 33.5731],
    enabled: true,
    name: { fr: "Casablanca", en: "Casablanca", es: "Casablanca", ar: "الدار البيضاء" },
    region: { fr: "Côte atlantique", en: "Atlantic coast", es: "Costa atlántica", ar: "الساحل الأطلسي" },
    description: {
      fr: "Capitale économique du Maroc, entre architecture Art déco et bord de mer animé.",
      en: "Morocco's economic capital, between Art Deco architecture and a lively seafront.",
      es: "Capital económica de Marruecos, entre arquitectura Art Déco y un animado paseo marítimo.",
      ar: "العاصمة الاقتصادية للمغرب، بين عمارة آرت ديكو وواجهة بحرية نابضة بالحياة.",
    },
    image: "casablanca-mosque",
  },
  {
    id: "marrakech",
    slug: "marrakech",
    coordinates: [-7.9811, 31.6295],
    enabled: true,
    name: { fr: "Marrakech", en: "Marrakech", es: "Marrakech", ar: "مراكش" },
    region: { fr: "Maroc central", en: "Central Morocco", es: "Marruecos central", ar: "وسط المغرب" },
    description: {
      fr: "La perle du sud, entre tradition, culture et art de vivre.",
      en: "The pearl of the south, between tradition, culture and the art of living.",
      es: "La perla del sur, entre tradición, cultura y arte de vivir.",
      ar: "لؤلؤة الجنوب، بين التقاليد والثقافة وفن العيش.",
    },
    image: "marrakech-koutoubia",
  },
  {
    id: "rabat",
    slug: "rabat",
    coordinates: [-6.8498, 34.0209],
    enabled: true,
    name: { fr: "Rabat", en: "Rabat", es: "Rabat", ar: "الرباط" },
    region: { fr: "Côte atlantique", en: "Atlantic coast", es: "Costa atlántica", ar: "الساحل الأطلسي" },
    description: {
      fr: "Capitale administrative, élégante et paisible, riche en histoire.",
      en: "The administrative capital — elegant, peaceful and rich in history.",
      es: "Capital administrativa, elegante y tranquila, rica en historia.",
      ar: "العاصمة الإدارية، أنيقة وهادئة وغنية بالتاريخ.",
    },
    image: "rabat-tower",
  },
  {
    id: "el-jadida",
    slug: "el-jadida",
    coordinates: [-8.5006, 33.2549],
    enabled: true,
    name: { fr: "El Jadida", en: "El Jadida", es: "El Jadida", ar: "الجديدة" },
    region: { fr: "Côte atlantique", en: "Atlantic coast", es: "Costa atlántica", ar: "الساحل الأطلسي" },
    description: {
      fr: "Cité portugaise classée à l'UNESCO, au charme discret face à l'océan.",
      en: "A UNESCO-listed Portuguese citadel, with quiet charm facing the ocean.",
      es: "Ciudadela portuguesa declarada Patrimonio de la UNESCO, con un encanto discreto frente al océano.",
      ar: "مدينة برتغالية مصنفة ضمن التراث العالمي لليونسكو، بسحر هادئ يطل على المحيط.",
    },
    image: "el-jadida-cistern",
  },
  {
    id: "tanger",
    slug: "tanger",
    coordinates: [-5.834, 35.7595],
    enabled: true,
    name: { fr: "Tanger", en: "Tangier", es: "Tánger", ar: "طنجة" },
    region: { fr: "Détroit de Gibraltar", en: "Strait of Gibraltar", es: "Estrecho de Gibraltar", ar: "مضيق جبل طارق" },
    description: {
      fr: "Porte du Maroc entre deux continents, entre médina et front de mer.",
      en: "Morocco's gateway between two continents, between the medina and the seafront.",
      es: "La puerta de Marruecos entre dos continentes, entre la medina y el paseo marítimo.",
      ar: "بوابة المغرب بين قارتين، بين المدينة العتيقة والواجهة البحرية.",
    },
    image: "tanger-medina",
  },
  {
    id: "fes",
    slug: "fes",
    coordinates: [-5.0003, 34.0331],
    enabled: true,
    name: { fr: "Fès", en: "Fez", es: "Fez", ar: "فاس" },
    region: { fr: "Maroc central", en: "Central Morocco", es: "Marruecos central", ar: "وسط المغرب" },
    description: {
      fr: "La plus ancienne médina du monde encore habitée, capitale spirituelle du Maroc.",
      en: "The world's oldest still-inhabited medina, Morocco's spiritual capital.",
      es: "La medina habitada más antigua del mundo, capital espiritual de Marruecos.",
      ar: "أقدم مدينة عتيقة ما زالت مأهولة في العالم، العاصمة الروحية للمغرب.",
    },
    image: "fes-tannery",
  },
  {
    id: "essaouira",
    slug: "essaouira",
    coordinates: [-9.7595, 31.5085],
    enabled: true,
    name: { fr: "Essaouira", en: "Essaouira", es: "Esauira", ar: "الصويرة" },
    region: { fr: "Côte atlantique", en: "Atlantic coast", es: "Costa atlántica", ar: "الساحل الأطلسي" },
    description: {
      fr: "Cité des alizés, remparts face à l'océan et médina classée à l'UNESCO.",
      en: "City of the trade winds, ramparts facing the ocean and a UNESCO-listed medina.",
      es: "Ciudad de los alisios, murallas frente al océano y medina declarada Patrimonio de la UNESCO.",
      ar: "مدينة الرياح التجارية، أسوار تطل على المحيط ومدينة عتيقة مصنفة لدى اليونسكو.",
    },
    image: "essaouira-ramparts",
  },
  {
    id: "agadir",
    slug: "agadir",
    coordinates: [-9.5981, 30.4278],
    enabled: true,
    name: { fr: "Agadir", en: "Agadir", es: "Agadir", ar: "أكادير" },
    region: { fr: "Côte atlantique sud", en: "Southern Atlantic coast", es: "Costa atlántica sur", ar: "الساحل الأطلسي الجنوبي" },
    description: {
      fr: "Station balnéaire moderne, longue plage et climat doux toute l'année.",
      en: "A modern seaside resort, a long beach and a mild climate year-round.",
      es: "Estación balnearia moderna, playa extensa y clima suave todo el año.",
      ar: "منتجع ساحلي حديث، شاطئ طويل ومناخ معتدل طوال السنة.",
    },
    image: "agadir-marina",
  },
  {
    id: "ouarzazate",
    slug: "ouarzazate",
    coordinates: [-6.937, 30.9335],
    enabled: true,
    name: { fr: "Ouarzazate", en: "Ouarzazate", es: "Uarzazat", ar: "ورزازات" },
    region: { fr: "Portes du désert", en: "Gateway to the desert", es: "Puertas del desierto", ar: "بوابة الصحراء" },
    description: {
      fr: "Porte du désert, kasbahs de terre ocre et studios de cinéma mondialement connus.",
      en: "Gateway to the desert, ochre-earth kasbahs and world-famous film studios.",
      es: "Puerta del desierto, kasbahs de tierra ocre y estudios de cine reconocidos mundialmente.",
      ar: "بوابة الصحراء، قصبات من الطين الأصفر واستوديوهات سينمائية معروفة عالميًا.",
    },
    image: "ouarzazate-kasbah",
  },
  {
    id: "chefchaouen",
    slug: "chefchaouen",
    coordinates: [-5.2636, 35.1688],
    enabled: true,
    name: { fr: "Chefchaouen", en: "Chefchaouen", es: "Chefchaouen", ar: "شفشاون" },
    region: { fr: "Rif", en: "Rif mountains", es: "Montañas del Rif", ar: "جبال الريف" },
    description: {
      fr: "La perle bleue nichée dans les montagnes du Rif, aux ruelles peintes en bleu.",
      en: "The blue pearl nestled in the Rif mountains, with its blue-painted alleyways.",
      es: "La perla azul enclavada en las montañas del Rif, con sus callejuelas pintadas de azul.",
      ar: "اللؤلؤة الزرقاء المتربعة بين جبال الريف، بأزقتها المطلية باللون الأزرق.",
    },
    image: "chefchaouen-street",
  },
  {
    id: "merzouga",
    slug: "merzouga",
    coordinates: [-4.0088, 31.0801],
    enabled: true,
    name: { fr: "Merzouga", en: "Merzouga", es: "Merzouga", ar: "مرزوكة" },
    region: { fr: "Désert du Sahara", en: "Sahara desert", es: "Desierto del Sáhara", ar: "الصحراء الكبرى" },
    description: {
      fr: "Les grandes dunes de l'Erg Chebbi, porte d'entrée du Sahara marocain.",
      en: "The great dunes of Erg Chebbi, gateway to the Moroccan Sahara.",
      es: "Las grandes dunas de Erg Chebbi, puerta de entrada al Sáhara marroquí.",
      ar: "كثبان العرق الشبي الكبرى، بوابة الصحراء المغربية.",
    },
    image: "merzouga-dunes",
  },
];

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id);
}

export function getEnabledDestinations(): Destination[] {
  return destinations.filter((d) => d.enabled);
}
