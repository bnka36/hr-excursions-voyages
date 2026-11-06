import { primaryWhatsapp } from "@/lib/data/business";

/** Builds a wa.me link pre-filled with a message, no backend required. */
export function buildWhatsappLink(message: string, phone: string = primaryWhatsapp): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/** Builds a mailto link pre-filled with subject and body. */
export function buildMailtoLink(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
