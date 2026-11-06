import { MessageCircle } from "lucide-react";
import { business } from "@/lib/data/business";

export function WhatsappFloatButton({ label }: { label: string }) {
  return (
    <a
      href={business.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
