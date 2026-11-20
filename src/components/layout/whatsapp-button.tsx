import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

/** Floating WhatsApp button shown on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(generalEnquiryMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Raphaz on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 inline-flex h-14 items-center gap-2 rounded-full bg-[#0e7a3f] px-4 text-white shadow-lg transition duration-200 hover:bg-[#0b6633] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
      <span className="hidden pr-1 text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
