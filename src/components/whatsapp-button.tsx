import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { schoolInfo } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-pulse-ring" />
      <Link
        href={schoolInfo.whatsapp}
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(37,211,102,0.5)]"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={25} />
      </Link>
    </div>
  );
}
