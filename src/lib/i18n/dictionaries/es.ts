import type { Dictionary } from "./fr";

const es: Dictionary = {
  meta: {
    siteName: "HR Excursions & Voyages",
    defaultTitle: "HR Excursions & Voyages — Transporte turístico premium en Marruecos",
    defaultDescription:
      "Traslados al aeropuerto, transporte privado con chófer, excursiones y circuitos a medida por todo Marruecos. Un servicio elegante, fiable y personalizado, dirigido por el Sr. Mustapha.",
  },
  nav: {
    home: "Inicio",
    transfers: "Traslados",
    excursions: "Excursiones",
    tours: "Circuitos",
    destinations: "Destinos",
    vehicle: "Nuestro vehículo",
    partners: "Socios",
    about: "Sobre nosotros",
    contact: "Contacto",
    bookNow: "Reservar",
    requestQuote: "Solicitar presupuesto",
  },
  common: {
    readMore: "Saber más",
    discover: "Descubrir",
    viewAll: "Ver todo",
    viewAllServices: "Ver todos nuestros servicios",
    viewAllExcursions: "Ver todas las excursiones",
    onRequest: "A medida",
    perVehicle: "por vehículo",
    duration: "Duración",
    destination: "Destino",
    departurePoint: "Punto de salida",
    travelers: "Viajeros",
    included: "Incluye",
    notIncluded: "No incluye",
    program: "Itinerario",
    whatsapp: "WhatsApp",
    callUs: "Llámenos",
    sendRequest: "Enviar solicitud",
    allDestinations: "Todos los destinos",
    allDurations: "Todas las duraciones",
    allCategories: "Todas las categorías",
    loading: "Cargando…",
    closeDialog: "Cerrar",
  },
  hero: {
    title: "Descubra Marruecos,",
    titleAccent: "viaje con total tranquilidad.",
    subtitle:
      "Traslados privados, transporte turístico, excursiones y circuitos a medida por todo Marruecos.",
    ctaTransfer: "Reservar un traslado",
    ctaExcursions: "Descubrir nuestras excursiones",
    badges: {
      safety: "Confort y seguridad",
      driver: "Chófer profesional",
      service: "Servicio personalizado",
    },
  },
  quoteForm: {
    title: "Solicitar un presupuesto",
    tabs: {
      transfer: "Traslado",
      excursion: "Excursión",
      tour: "Circuito",
      custom: "A medida",
    },
    fields: {
      from: "Ciudad de salida",
      to: "Destino",
      date: "Fecha",
      time: "Hora",
      travelers: "Viajeros",
      tripType: "Tipo de trayecto",
      oneWay: "Solo ida",
      roundTrip: "Ida y vuelta",
      name: "Nombre completo",
      phone: "Teléfono",
      email: "Correo electrónico",
      message: "Mensaje (opcional)",
    },
    placeholders: {
      from: "Ciudad o aeropuerto de salida",
      to: "Ciudad o destino",
      travelers: "Número de viajeros",
      name: "Su nombre",
      phone: "Su número (WhatsApp preferido)",
      message: "Cuéntenos más sobre su solicitud…",
    },
    submit: "Solicitar presupuesto",
    submitHint:
      "Su solicitud se enviará por WhatsApp o correo electrónico. Normalmente respondemos en poco tiempo.",
    viaWhatsapp: "Enviar por WhatsApp",
    viaEmail: "Enviar por correo",
  },
  services: {
    title: "Nuestros Servicios",
    subtitle:
      "Un servicio completo de transporte turístico, pensado para viajeros exigentes, familias y profesionales del turismo.",
    items: {
      airportTransfer: {
        title: "Traslados al Aeropuerto",
        description: "Recogida y entrega en todos los aeropuertos de Marruecos, puntual y cómoda.",
      },
      privateTransport: {
        title: "Transporte Privado",
        description: "Servicio con chófer para sus desplazamientos personales o profesionales, a su ritmo.",
      },
      excursions: {
        title: "Excursiones",
        description: "Descubra las ciudades y lugares más bellos de Marruecos en un solo día.",
      },
      customTours: {
        title: "Circuitos a Medida",
        description: "Viajes auténticos y personalizados de varios días por todo Marruecos.",
      },
      cityTours: {
        title: "Visitas de Ciudades",
        description: "Marrakech, Fez, Rabat, Casablanca y muchos otros destinos por explorar.",
      },
      hotelsAgencies: {
        title: "Hoteles y Agencias",
        description: "Un socio de transporte fiable para sus clientes y grupos, según sus necesidades.",
      },
    },
  },
  map: {
    title: "Nuestros Destinos en Marruecos",
    subtitle:
      "Cubrimos las principales ciudades y regiones de Marruecos, con un servicio de transporte fiable y cómodo.",
    bullets: [
      "Traslados entre ciudades",
      "Excursiones de un día",
      "Circuitos turísticos",
      "Viajes a medida",
    ],
    selectFrom: "Ciudad de salida",
    selectTo: "Ciudad de llegada",
    requestTrip: "Solicitar un trayecto",
    listTitle: "Lista de destinos",
    closePanel: "Cerrar",
    excursionsFrom: "Excursiones desde",
    noExcursions: "Aún no hay excursiones publicadas para este destino.",
    attribution: "Fronteras © colaboradores de OpenStreetMap",
  },
  excursionsPage: {
    title: "Nuestras Excursiones",
    subtitle: "Excursiones de un día o de varios días, diseñadas y validadas por nuestro equipo.",
    filters: {
      destination: "Destino",
      duration: "Duración",
      category: "Categoría",
      reset: "Restablecer",
    },
    noResults: "Ninguna excursión coincide con estos criterios por el momento.",
    requestThis: "Solicitar esta excursión",
    priceOnRequest: "A medida",
  },
  tours: {
    title: "Circuitos a Medida",
    subtitle:
      "Circuitos privados de varios días por todo Marruecos, diseñados según sus deseos y su ritmo.",
    intro:
      "Cada circuito se diseña junto con el Sr. Mustapha: itinerario, etapas, duración y nivel de confort se adaptan a su solicitud. Contáctenos para construir su viaje.",
    cta: "Construir mi circuito a medida",
  },
  transfersPage: {
    title: "Traslados al Aeropuerto y Transporte Privado",
    subtitle:
      "Un servicio de recogida puntual, cómodo y seguro, en todos los aeropuertos y ciudades de Marruecos.",
    points: {
      tracking: {
        title: "Seguimiento de su vuelo",
        description: "Nos adaptamos al horario real de su vuelo en caso de retraso o adelanto.",
      },
      meet: {
        title: "Recepción personalizada",
        description: "Su chófer le espera en la llegada con un cartel con su nombre.",
      },
      comfort: {
        title: "Vehículo cómodo",
        description: "Mercedes Vito con aire acondicionado, hasta 7 pasajeros con equipaje.",
      },
      pro: {
        title: "Chófer profesional",
        description: "Conducción segura, cortés y puntual, en francés, árabe e inglés.",
      },
    },
  },
  vehiclePage: {
    title: "Nuestro Vehículo",
    subtitle: "Un único vehículo por ahora, elegido por su confort y fiabilidad.",
    specsTitle: "Características",
    equipmentTitle: "Equipamiento",
    suitedForTitle: "Servicios compatibles",
    cta: "Reservar este vehículo",
    futureNote:
      "Se podrán añadir otros vehículos a nuestra flota en el futuro, según las necesidades de nuestros clientes.",
  },
  partnersPage: {
    title: "Su socio de transporte turístico en Marruecos",
    subtitle:
      "Hoteles, riads, conserjerías y agencias de viajes: confíenos el transporte de sus clientes, según nuestra disponibilidad.",
    intro:
      "HR Excursions & Voyages acompaña a los profesionales del turismo marroquí con un servicio de transporte fiable, receptivo y elegante para sus clientes y grupos.",
    valueProps: {
      reliability: {
        title: "Servicio fiable y seguro",
        description: "Puntualidad, vehículo bien mantenido y chófer profesional para cada misión.",
      },
      responsiveness: {
        title: "Respuesta rápida",
        description: "Un equipo disponible para responder a sus solicitudes y las de sus clientes.",
      },
      flexibility: {
        title: "Servicio adaptado",
        description: "Traslados, excursiones y circuitos adaptados a las necesidades de sus clientes, según nuestra disponibilidad.",
      },
      singleContact: {
        title: "Un único interlocutor",
        description: "El Sr. Mustapha coordina directamente cada solicitud, para una comunicación simple y rápida.",
      },
    },
    formTitle: "Convertirse en socio",
    formIntro: "Cuéntenos sobre su establecimiento o agencia, y le responderemos rápidamente.",
    fields: {
      companyName: "Nombre del establecimiento / agencia",
      contactName: "Nombre de contacto",
      companyType: "Tipo de estructura",
      phone: "Teléfono",
      email: "Correo electrónico",
      message: "Su necesidad",
    },
    companyTypes: {
      hotel: "Hotel",
      riad: "Riad",
      agency: "Agencia de viajes",
      concierge: "Conserjería",
      other: "Otro",
    },
  },
  aboutPage: {
    title: "Sobre HR Excursions & Voyages",
    subtitle: "Un servicio de transporte turístico en Marruecos, dirigido por el Sr. Mustapha.",
    body: [
      "HR Excursions & Voyages acompaña a viajeros, familias y profesionales del turismo en sus desplazamientos por Marruecos.",
      "Traslados al aeropuerto, transporte privado, excursiones y circuitos a medida: cada trayecto se prepara con cuidado, en un vehículo cómodo y con un chófer profesional.",
      "Nuestra prioridad es la confianza: un servicio claro, puntual y personalizado, para que cada cliente viaje con total tranquilidad.",
    ],
    commitmentsTitle: "Nuestros compromisos",
    commitments: [
      "Servicio fiable y seguro",
      "Chófer experimentado",
      "Confort de alta gama",
      "Respuesta rápida y personalizada",
      "Disponible en todo Marruecos",
    ],
  },
  contactPage: {
    title: "Contacto",
    subtitle: "¿Una pregunta, una solicitud de presupuesto o un proyecto de viaje? Contáctenos directamente.",
    phonesTitle: "Teléfono",
    emailTitle: "Correo electrónico",
    locationTitle: "Zona de servicio",
    location: "Marruecos",
    formTitle: "Enviar un mensaje",
  },
  footer: {
    tagline: "Transporte turístico en Marruecos.",
    linksTitle: "Enlaces útiles",
    legalNotice: "Aviso legal",
    privacyPolicy: "Política de privacidad",
    terms: "Condiciones del servicio",
    followUs: "Síganos",
    contactUs: "Contáctenos",
    rights: "Todos los derechos reservados.",
  },
  trust: {
    reliableService: "Servicio fiable y seguro",
    experiencedDriver: "Chófer experimentado",
    comfort: "Confort de alta gama",
    responsiveness: "Respuesta rápida y personalizada",
    everywhere: "En todo Marruecos",
  },
};

export default es;
