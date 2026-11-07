import { MessageCircle } from "lucide-react";
import { business } from "@/lib/data/business";

export function WhatsappFloatButton({ label }: { label: string }) {
  return (
    <a
      href={business.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 md:right-8 md:bottom-8 md:h-14 md:w-14"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
