import type { Excursion } from "./types";

/**
 * Demo excursion catalog, mirroring the brief's sample destinations
 * (Essaouira, Ouarzazate & Aït Ben Haddou, Merzouga, Chefchaouen,
 * Cascades d'Ouzoud). No prices were confirmed, so `priceFrom` stays
 * `null` and the UI shows "Sur devis" — update once M. Mustapha
 * validates real pricing, and set `published: false` to hide any
 * excursion that hasn't been confirmed yet.
 */
export const excursions: Excursion[] = [
  {
    id: "essaouira-day-trip",
    slug: "essaouira",
    destinationId: "essaouira",
    category: "day-trip",
    duration: { fr: "À la journée", en: "Full day", es: "Día completo", ar: "يوم كامل" },
    durationHours: 10,
    published: true,
    priceFrom: null,
    currency: "MAD",
    maxTravelers: 7,
    title: { fr: "Essaouira", en: "Essaouira", es: "Esauira", ar: "الصويرة" },
    shortDescription: {
      fr: "La cité des alizés : remparts, port de pêche et médina classée à l'UNESCO.",
      en: "The city of trade winds: ramparts, a fishing port and a UNESCO-listed medina.",
      es: "La ciudad de los alisios: murallas, puerto pesquero y medina Patrimonio de la UNESCO.",
      ar: "مدينة الرياح التجارية: أسوار وميناء للصيد ومدينة عتيقة مصنفة لدى اليونسكو.",
    },
    description: {
      fr: "Une journée complète à Essaouira, entre remparts face à l'Atlantique, ruelles bleues et blanches de la médina, port de pêche animé et souks d'artisanat. Un trajet confortable en Mercedes Vito climatisé, au départ de votre lieu d'hébergement.",
      en: "A full day in Essaouira, between ramparts facing the Atlantic, the medina's blue-and-white alleyways, a lively fishing port and craft souks. A comfortable, air-conditioned Mercedes Vito ride from your accommodation.",
      es: "Un día completo en Esauira, entre murallas frente al Atlántico, callejuelas azules y blancas de la medina, un animado puerto pesquero y zocos de artesanía. Trayecto cómodo en Mercedes Vito climatizado desde su alojamiento.",
      ar: "يوم كامل في الصويرة، بين أسوار تطل على المحيط الأطلسي وأزقة المدينة الزرقاء والبيضاء وميناء صيد نابض بالحياة وأسواق للصناعة التقليدية. رحلة مريحة بسيارة مرسيدس فيتو مكيفة انطلاقًا من مكان إقامتكم.",
    },
    departurePoint: {
      fr: "Marrakech (ou autre ville, sur demande)",
      en: "Marrakech (or another city, on request)",
      es: "Marrakech (u otra ciudad, bajo petición)",
      ar: "مراكش (أو مدينة أخرى، حسب الطلب)",
    },
    program: {
      fr: [
        "Prise en charge matinale à votre hébergement",
        "Route vers Essaouira (environ 2h30)",
        "Visite libre ou guidée de la médina et des remparts",
        "Temps libre pour le déjeuner et les souks",
        "Retour en fin d'après-midi",
      ],
      en: [
        "Morning pick-up from your accommodation",
        "Drive to Essaouira (about 2h30)",
        "Free or guided visit of the medina and ramparts",
        "Free time for lunch and the souks",
        "Return in the late afternoon",
      ],
      es: [
        "Recogida matutina en su alojamiento",
        "Trayecto hacia Esauira (aprox. 2h30)",
        "Visita libre o guiada de la medina y las murallas",
        "Tiempo libre para almorzar y recorrer los zocos",
        "Regreso al final de la tarde",
      ],
      ar: [
        "الاستقبال صباحًا من مكان إقامتكم",
        "التوجه نحو الصويرة (حوالي ساعتين ونصف)",
        "زيارة حرة أو موجهة للمدينة العتيقة والأسوار",
        "وقت حر للغداء والتسوق في الأسواق",
        "العودة في آخر النهار",
      ],
    },
    included: {
      fr: ["Transport en véhicule climatisé", "Chauffeur professionnel", "Carburant et péages"],
      en: ["Transport in an air-conditioned vehicle", "Professional driver", "Fuel and tolls"],
      es: ["Transporte en vehículo climatizado", "Chófer profesional", "Combustible y peajes"],
      ar: ["النقل بسيارة مكيفة", "سائق محترف", "الوقود ورسوم الطرق"],
    },
    notIncluded: {
      fr: ["Déjeuner", "Guide local (sur demande)", "Entrées des sites"],
      en: ["Lunch", "Local guide (on request)", "Site entrance fees"],
      es: ["Almuerzo", "Guía local (bajo petición)", "Entradas a los sitios"],
      ar: ["الغداء", "مرشد محلي (حسب الطلب)", "رسوم دخول المواقع"],
    },
    images: ["essaouira-ramparts", "essaouira-medina"],
  },
  {
    id: "ouarzazate-ait-ben-haddou",
    slug: "ouarzazate-ait-ben-haddou",
    destinationId: "ouarzazate",
    category: "day-trip",
    duration: { fr: "À la journée", en: "Full day", es: "Día completo", ar: "يوم كامل" },
    durationHours: 12,
    published: true,
    priceFrom: null,
    currency: "MAD",
    maxTravelers: 7,
    title: {
      fr: "Ouarzazate & Aït Ben Haddou",
      en: "Ouarzazate & Aït Ben Haddou",
      es: "Uarzazat y Aït Ben Haddou",
      ar: "ورزازات وآيت بن حدو",
    },
    shortDescription: {
      fr: "La porte du désert et son ksar classé à l'UNESCO, à travers le col du Tichka.",
      en: "The gateway to the desert and its UNESCO-listed ksar, via the Tichka pass.",
      es: "La puerta del desierto y su ksar Patrimonio de la UNESCO, a través del puerto de Tichka.",
      ar: "بوابة الصحراء وقصرها المصنف لدى اليونسكو، عبر ممر تيشكا.",
    },
    description: {
      fr: "Traversée spectaculaire du Haut Atlas par le col du Tichka, découverte du ksar d'Aït Ben Haddou et de ses studios de cinéma à Ouarzazate. Une excursion emblématique du Sud marocain.",
      en: "A spectacular crossing of the High Atlas via the Tichka pass, discovering the ksar of Aït Ben Haddou and Ouarzazate's film studios. An iconic excursion into southern Morocco.",
      es: "Travesía espectacular del Alto Atlas por el puerto de Tichka, descubrimiento del ksar de Aït Ben Haddou y de los estudios de cine en Uarzazat. Una excursión emblemática del sur marroquí.",
      ar: "عبور مذهل للأطلس الكبير عبر ممر تيشكا، واكتشاف قصر آيت بن حدو واستوديوهات السينما في ورزازات. رحلة رمزية لجنوب المغرب.",
    },
    departurePoint: {
      fr: "Marrakech",
      en: "Marrakech",
      es: "Marrakech",
      ar: "مراكش",
    },
    program: {
      fr: [
        "Départ matinal de Marrakech",
        "Traversée du col du Tichka (2 260 m)",
        "Visite du ksar d'Aït Ben Haddou",
        "Déjeuner libre à Ouarzazate",
        "Retour à Marrakech en soirée",
      ],
      en: [
        "Early departure from Marrakech",
        "Crossing the Tichka pass (2,260 m)",
        "Visit of the Aït Ben Haddou ksar",
        "Lunch (own expense) in Ouarzazate",
        "Return to Marrakech in the evening",
      ],
      es: [
        "Salida matutina desde Marrakech",
        "Travesía del puerto de Tichka (2.260 m)",
        "Visita del ksar de Aït Ben Haddou",
        "Almuerzo libre en Uarzazat",
        "Regreso a Marrakech por la noche",
      ],
      ar: [
        "الانطلاق صباحًا من مراكش",
        "عبور ممر تيشكا (2260 مترًا)",
        "زيارة قصر آيت بن حدو",
        "غداء حر في ورزازات",
        "العودة إلى مراكش في المساء",
      ],
    },
    included: {
      fr: ["Transport en véhicule climatisé", "Chauffeur professionnel", "Carburant et péages"],
      en: ["Transport in an air-conditioned vehicle", "Professional driver", "Fuel and tolls"],
      es: ["Transporte en vehículo climatizado", "Chófer profesional", "Combustible y peajes"],
      ar: ["النقل بسيارة مكيفة", "سائق محترف", "الوقود ورسوم الطرق"],
    },
    notIncluded: {
      fr: ["Déjeuner", "Entrées des sites et studios", "Guide local (sur demande)"],
      en: ["Lunch", "Site and studio entrance fees", "Local guide (on request)"],
      es: ["Almuerzo", "Entradas a los sitios y estudios", "Guía local (bajo petición)"],
      ar: ["الغداء", "رسوم دخول المواقع والاستوديوهات", "مرشد محلي (حسب الطلب)"],
    },
    images: ["ouarzazate-kasbah", "ait-ben-haddou"],
  },
  {
    id: "merzouga-desert",
    slug: "merzouga",
    destinationId: "merzouga",
    category: "multi-day",
    duration: { fr: "2 à 3 jours", en: "2 to 3 days", es: "2 a 3 días", ar: "يومان إلى ثلاثة أيام" },
    durationHours: 60,
    published: true,
    priceFrom: null,
    currency: "MAD",
    maxTravelers: 7,
    title: { fr: "Merzouga", en: "Merzouga", es: "Merzouga", ar: "مرزوكة" },
    shortDescription: {
      fr: "Les dunes de l'Erg Chebbi, bivouac et nuit sous les étoiles dans le désert.",
      en: "The dunes of Erg Chebbi, a desert camp and a night under the stars.",
      es: "Las dunas de Erg Chebbi, campamento y noche bajo las estrellas en el desierto.",
      ar: "كثبان العرق الشبي، مخيم وليلة تحت النجوم في الصحراء.",
    },
    description: {
      fr: "Un circuit de 2 à 3 jours vers les grandes dunes de l'Erg Chebbi, en passant par les gorges du Todra et de Dadès. Nuit en bivouac dans le désert, balade à dos de dromadaire au coucher du soleil, retour par une route différente.",
      en: "A 2 to 3 day trip to the great dunes of Erg Chebbi, passing through the Todra and Dadès gorges. A night in a desert camp, a camel ride at sunset, and a return via a different route.",
      es: "Un recorrido de 2 a 3 días hacia las grandes dunas de Erg Chebbi, pasando por las gargantas de Todra y Dadès. Noche en campamento en el desierto, paseo en dromedario al atardecer y regreso por una ruta diferente.",
      ar: "رحلة من يومين إلى ثلاثة أيام نحو كثبان العرق الشبي الكبرى، مرورًا بأخاديد تودرا ودادس. ليلة في مخيم صحراوي، وجولة على ظهر الجمال عند الغروب، والعودة عبر طريق مختلف.",
    },
    departurePoint: {
      fr: "Marrakech ou Fès (sur demande)",
      en: "Marrakech or Fez (on request)",
      es: "Marrakech o Fez (bajo petición)",
      ar: "مراكش أو فاس (حسب الطلب)",
    },
    program: {
      fr: [
        "Jour 1 : route vers Merzouga via les gorges du Dadès",
        "Jour 2 : balade à dos de dromadaire et bivouac dans le désert",
        "Jour 3 : lever du soleil sur les dunes et retour via Todra",
      ],
      en: [
        "Day 1: drive to Merzouga via the Dadès gorges",
        "Day 2: camel ride and overnight desert camp",
        "Day 3: sunrise over the dunes and return via Todra",
      ],
      es: [
        "Día 1: trayecto hacia Merzouga vía las gargantas de Dadès",
        "Día 2: paseo en dromedario y campamento nocturno en el desierto",
        "Día 3: amanecer sobre las dunas y regreso vía Todra",
      ],
      ar: [
        "اليوم الأول: التوجه نحو مرزوكة عبر أخاديد دادس",
        "اليوم الثاني: جولة على ظهر الجمال ومبيت في مخيم صحراوي",
        "اليوم الثالث: شروق الشمس فوق الكثبان والعودة عبر تودرا",
      ],
    },
    included: {
      fr: ["Transport en véhicule climatisé", "Chauffeur professionnel", "Nuit en bivouac"],
      en: ["Transport in an air-conditioned vehicle", "Professional driver", "Night at the desert camp"],
      es: ["Transporte en vehículo climatizado", "Chófer profesional", "Noche en campamento"],
      ar: ["النقل بسيارة مكيفة", "سائق محترف", "ليلة في المخيم"],
    },
    notIncluded: {
      fr: ["Repas", "Hébergement en ville", "Balade à dos de dromadaire (selon prestataire local)"],
      en: ["Meals", "City accommodation", "Camel ride (depending on local operator)"],
      es: ["Comidas", "Alojamiento en ciudad", "Paseo en dromedario (según el proveedor local)"],
      ar: ["الوجبات", "الإقامة في المدينة", "جولة الجمال (حسب المزود المحلي)"],
    },
    images: ["merzouga-dunes", "merzouga-camels"],
  },
  {
    id: "chefchaouen-blue-city",
    slug: "chefchaouen",
    destinationId: "chefchaouen",
    category: "day-trip",
    duration: { fr: "À la journée", en: "Full day", es: "Día completo", ar: "يوم كامل" },
    durationHours: 10,
    published: true,
    priceFrom: null,
    currency: "MAD",
    maxTravelers: 7,
    title: { fr: "Chefchaouen", en: "Chefchaouen", es: "Chefchaouen", ar: "شفشاون" },
    shortDescription: {
      fr: "La perle bleue du Rif, ses ruelles peintes et son ambiance paisible en montagne.",
      en: "The blue pearl of the Rif, its painted alleyways and peaceful mountain atmosphere.",
      es: "La perla azul del Rif, sus callejuelas pintadas y su ambiente tranquilo en la montaña.",
      ar: "اللؤلؤة الزرقاء لجبال الريف، بأزقتها المطلية وأجوائها الهادئة في الجبل.",
    },
    description: {
      fr: "Une journée dans les montagnes du Rif, à la découverte de Chefchaouen et de ses célèbres ruelles bleues, entre artisanat local et ambiance paisible.",
      en: "A day in the Rif mountains, discovering Chefchaouen and its famous blue alleyways, between local crafts and a peaceful atmosphere.",
      es: "Un día en las montañas del Rif, descubriendo Chefchaouen y sus famosas callejuelas azules, entre artesanía local y un ambiente tranquilo.",
      ar: "يوم في جبال الريف، لاكتشاف شفشاون وأزقتها الزرقاء الشهيرة، بين الصناعة التقليدية المحلية والأجواء الهادئة.",
    },
    departurePoint: {
      fr: "Tanger ou Fès (sur demande)",
      en: "Tangier or Fez (on request)",
      es: "Tánger o Fez (bajo petición)",
      ar: "طنجة أو فاس (حسب الطلب)",
    },
    program: {
      fr: [
        "Prise en charge matinale",
        "Route vers Chefchaouen à travers le Rif",
        "Visite libre ou guidée de la médina bleue",
        "Temps libre pour le déjeuner et les souks",
        "Retour en fin d'après-midi",
      ],
      en: [
        "Morning pick-up",
        "Drive to Chefchaouen through the Rif",
        "Free or guided visit of the blue medina",
        "Free time for lunch and the souks",
        "Return in the late afternoon",
      ],
      es: [
        "Recogida matutina",
        "Trayecto hacia Chefchaouen a través del Rif",
        "Visita libre o guiada de la medina azul",
        "Tiempo libre para almorzar y recorrer los zocos",
        "Regreso al final de la tarde",
      ],
      ar: [
        "الاستقبال صباحًا",
        "التوجه نحو شفشاون عبر الريف",
        "زيارة حرة أو موجهة للمدينة الزرقاء",
        "وقت حر للغداء والتسوق",
        "العودة في آخر النهار",
      ],
    },
    included: {
      fr: ["Transport en véhicule climatisé", "Chauffeur professionnel", "Carburant et péages"],
      en: ["Transport in an air-conditioned vehicle", "Professional driver", "Fuel and tolls"],
      es: ["Transporte en vehículo climatizado", "Chófer profesional", "Combustible y peajes"],
      ar: ["النقل بسيارة مكيفة", "سائق محترف", "الوقود ورسوم الطرق"],
    },
    notIncluded: {
      fr: ["Déjeuner", "Guide local (sur demande)"],
      en: ["Lunch", "Local guide (on request)"],
      es: ["Almuerzo", "Guía local (bajo petición)"],
      ar: ["الغداء", "مرشد محلي (حسب الطلب)"],
    },
    images: ["chefchaouen-street"],
  },
  {
    id: "cascades-ouzoud",
    slug: "cascades-ouzoud",
    destinationId: "marrakech",
    category: "day-trip",
    duration: { fr: "À la journée", en: "Full day", es: "Día completo", ar: "يوم كامل" },
    durationHours: 9,
    published: true,
    priceFrom: null,
    currency: "MAD",
    maxTravelers: 7,
    title: { fr: "Cascades d'Ouzoud", en: "Ouzoud Falls", es: "Cascadas de Ouzoud", ar: "شلالات أوزود" },
    shortDescription: {
      fr: "Les plus hautes chutes d'eau du Maroc, au cœur d'un paysage verdoyant.",
      en: "Morocco's highest waterfalls, set in a lush green landscape.",
      es: "Las cataratas más altas de Marruecos, en un paisaje verde exuberante.",
      ar: "أعلى شلالات في المغرب، وسط منظر طبيعي أخضر يانع.",
    },
    description: {
      fr: "Excursion à la journée vers les cascades d'Ouzoud, au départ de Marrakech. Sentiers ombragés, points de vue sur les chutes et balade possible en bateau au pied des cascades.",
      en: "A day trip to the Ouzoud waterfalls, departing from Marrakech. Shaded trails, viewpoints over the falls and an optional boat ride at the foot of the cascades.",
      es: "Excursión de un día a las cascadas de Ouzoud, saliendo desde Marrakech. Senderos sombreados, miradores sobre las cataratas y paseo en barca opcional al pie de las cascadas.",
      ar: "رحلة يومية إلى شلالات أوزود، انطلاقًا من مراكش. مسارات ظليلة ونقاط إطلالة على الشلالات وإمكانية التنزه بالقارب عند سفح الشلالات.",
    },
    departurePoint: {
      fr: "Marrakech",
      en: "Marrakech",
      es: "Marrakech",
      ar: "مراكش",
    },
    program: {
      fr: [
        "Départ matinal de Marrakech",
        "Arrivée à Ouzoud et randonnée jusqu'aux chutes",
        "Temps libre au pied des cascades",
        "Déjeuner libre sur place",
        "Retour à Marrakech en fin d'après-midi",
      ],
      en: [
        "Early departure from Marrakech",
        "Arrival at Ouzoud and a walk to the falls",
        "Free time at the foot of the waterfalls",
        "Lunch (own expense) on site",
        "Return to Marrakech in the late afternoon",
      ],
      es: [
        "Salida matutina desde Marrakech",
        "Llegada a Ouzoud y caminata hasta las cataratas",
        "Tiempo libre al pie de las cascadas",
        "Almuerzo libre en el lugar",
        "Regreso a Marrakech al final de la tarde",
      ],
      ar: [
        "الانطلاق صباحًا من مراكش",
        "الوصول إلى أوزود والمشي نحو الشلالات",
        "وقت حر عند سفح الشلالات",
        "غداء حر في عين المكان",
        "العودة إلى مراكش في آخر النهار",
      ],
    },
    included: {
      fr: ["Transport en véhicule climatisé", "Chauffeur professionnel", "Carburant et péages"],
      en: ["Transport in an air-conditioned vehicle", "Professional driver", "Fuel and tolls"],
      es: ["Transporte en vehículo climatizado", "Chófer profesional", "Combustible y peajes"],
      ar: ["النقل بسيارة مكيفة", "سائق محترف", "الوقود ورسوم الطرق"],
    },
    notIncluded: {
      fr: ["Déjeuner", "Balade en bateau", "Guide local (sur demande)"],
      en: ["Lunch", "Boat ride", "Local guide (on request)"],
      es: ["Almuerzo", "Paseo en barca", "Guía local (bajo petición)"],
      ar: ["الغداء", "جولة بالقارب", "مرشد محلي (حسب الطلب)"],
    },
    images: ["ouzoud-falls"],
  },
];

export function getPublishedExcursions(): Excursion[] {
  return excursions.filter((e) => e.published);
}

export function getExcursionBySlug(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getExcursionsByDestination(destinationId: string): Excursion[] {
  return excursions.filter((e) => e.published && e.destinationId === destinationId);
}
