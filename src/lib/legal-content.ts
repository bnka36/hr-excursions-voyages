import type { Locale } from "@/lib/i18n/config";
import { business } from "@/lib/data/business";

/**
 * Minimal placeholder legal content — not a substitute for review by a
 * Moroccan legal professional. Replace before the site goes live.
 */
export const legalContent: Record<"mentions" | "privacy" | "terms", Record<Locale, { title: string; paragraphs: string[] }>> = {
  mentions: {
    fr: {
      title: "Mentions légales",
      paragraphs: [
        `Le site HR Excursions & Voyages est édité par ${business.owner}, exerçant une activité de transport touristique au Maroc.`,
        `Contact : ${business.email} — ${business.phones[0].display}`,
        "Ce texte est un modèle à compléter avec les informations officielles de l'entreprise (forme juridique, numéro RC/ICE, siège social) avant la mise en ligne du site.",
      ],
    },
    en: {
      title: "Legal Notice",
      paragraphs: [
        `The HR Excursions & Voyages website is published by ${business.owner}, operating a tourist transport business in Morocco.`,
        `Contact: ${business.email} — ${business.phones[0].display}`,
        "This is placeholder text to be completed with the company's official details (legal form, registration number, registered office) before the site goes live.",
      ],
    },
    es: {
      title: "Aviso Legal",
      paragraphs: [
        `El sitio web HR Excursions & Voyages es publicado por ${business.owner}, que ejerce una actividad de transporte turístico en Marruecos.`,
        `Contacto: ${business.email} — ${business.phones[0].display}`,
        "Este es un texto provisional que debe completarse con los datos oficiales de la empresa (forma jurídica, número de registro, domicilio social) antes de la publicación del sitio.",
      ],
    },
    ar: {
      title: "الإشعار القانوني",
      paragraphs: [
        `يُنشر موقع HR Excursions & Voyages من طرف ${business.owner}، الذي يزاول نشاط النقل السياحي في المغرب.`,
        `للتواصل: ${business.email} — ${business.phones[0].display}`,
        "هذا نص مؤقت يجب استكماله بالمعلومات الرسمية للمؤسسة (الشكل القانوني، رقم السجل التجاري، المقر الاجتماعي) قبل نشر الموقع.",
      ],
    },
  },
  privacy: {
    fr: {
      title: "Politique de confidentialité",
      paragraphs: [
        "Ce site ne collecte aucune donnée personnelle via une base de données : les demandes de devis sont envoyées directement par WhatsApp ou par email, vers les coordonnées de l'entreprise.",
        "Aucune donnée n'est revendue ni partagée avec des tiers.",
        "Pour toute question relative à vos données, contactez-nous directement.",
      ],
    },
    en: {
      title: "Privacy Policy",
      paragraphs: [
        "This site does not collect personal data into a database: quote requests are sent directly via WhatsApp or email to the company's own contact details.",
        "No data is sold or shared with third parties.",
        "For any question about your data, please contact us directly.",
      ],
    },
    es: {
      title: "Política de Privacidad",
      paragraphs: [
        "Este sitio no recopila datos personales en una base de datos: las solicitudes de presupuesto se envían directamente por WhatsApp o correo electrónico a los datos de contacto de la empresa.",
        "Ningún dato se vende ni se comparte con terceros.",
        "Para cualquier pregunta sobre sus datos, contáctenos directamente.",
      ],
    },
    ar: {
      title: "سياسة الخصوصية",
      paragraphs: [
        "لا يجمع هذا الموقع بيانات شخصية في قاعدة بيانات: تُرسل طلبات عروض الأسعار مباشرة عبر واتساب أو البريد الإلكتروني إلى بيانات اتصال المؤسسة.",
        "لا تُباع أي بيانات ولا تُشارك مع أطراف ثالثة.",
        "لأي سؤال بخصوص بياناتكم، تواصلوا معنا مباشرة.",
      ],
    },
  },
  terms: {
    fr: {
      title: "Conditions de service",
      paragraphs: [
        "Toute demande effectuée via ce site (devis, réservation) est confirmée directement avec HR Excursions & Voyages par WhatsApp, téléphone ou email.",
        "Les prix communiqués le sont à titre indicatif et confirmés au moment de la réservation.",
        "Ce texte est un modèle à faire valider par l'entreprise avant la mise en ligne du site.",
      ],
    },
    en: {
      title: "Terms of Service",
      paragraphs: [
        "Any request made through this site (quote, booking) is confirmed directly with HR Excursions & Voyages by WhatsApp, phone or email.",
        "Prices shown are indicative and confirmed at the time of booking.",
        "This is placeholder text to be validated by the company before the site goes live.",
      ],
    },
    es: {
      title: "Condiciones del Servicio",
      paragraphs: [
        "Cualquier solicitud realizada a través de este sitio (presupuesto, reserva) se confirma directamente con HR Excursions & Voyages por WhatsApp, teléfono o correo electrónico.",
        "Los precios mostrados son indicativos y se confirman en el momento de la reserva.",
        "Este es un texto provisional que debe ser validado por la empresa antes de la publicación del sitio.",
      ],
    },
    ar: {
      title: "شروط الخدمة",
      paragraphs: [
        "يتم تأكيد أي طلب يُقدَّم عبر هذا الموقع (عرض سعر، حجز) مباشرة مع HR Excursions & Voyages عبر واتساب أو الهاتف أو البريد الإلكتروني.",
        "الأسعار المعروضة إرشادية ويتم تأكيدها عند الحجز.",
        "هذا نص مؤقت يجب أن تتحقق منه المؤسسة قبل نشر الموقع.",
      ],
    },
  },
};
