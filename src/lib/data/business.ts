/**
 * Core business identity. These details come directly from the brief and must
 * be verified by M. Mustapha before the site goes live — do not add phone
 * numbers, certifications, vehicles or pricing that aren't confirmed here.
 */
export const business = {
  name: "HR Excursions & Voyages",
  owner: "M. Mustapha",
  country: "Maroc",
  phones: [
    { label: "Principal (WhatsApp)", display: "+212 6 67 25 31 90", href: "tel:+212667253190", whatsapp: "212667253190" },
    { label: "Secondaire", display: "+212 6 61 89 49 44", href: "tel:+212661894944", whatsapp: "212661894944" },
    { label: "Secondaire", display: "+212 6 66 41 61 48", href: "tel:+212666416148", whatsapp: "212666416148" },
    { label: "Fixe", display: "05 25 31 61 56", href: "tel:+212525316156", whatsapp: null as string | null },
  ],
  email: "mustaphawidadi06@gmail.com",
  social: {
    whatsapp: "https://wa.me/212667253190",
    facebook: null as string | null,
    instagram: null as string | null,
  },
} as const;

export const primaryWhatsapp = business.phones[0].whatsapp as string;
export const primaryPhone = business.phones[0];
