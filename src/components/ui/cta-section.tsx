import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { business } from "@/lib/business-config";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Looking for Medical Equipment for Home Care?",
  description = "Contact Raphaz Surgical & Medical Equipment Rentals to enquire about available equipment, rental options and healthcare products.",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-charcoal px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-linear-to-br from-brand-orange to-brand-red opacity-30 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 id="cta-heading" className="text-3xl leading-tight font-extrabold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={`tel:${business.phone.tel}`} variant="light" size="lg">
                  <Phone className="size-5" aria-hidden="true" />
                  Call Us
                </ButtonLink>
                <ButtonLink href={whatsappUrl(generalEnquiryMessage)} variant="whatsapp" size="lg">
                  <WhatsAppIcon className="size-5" />
                  WhatsApp Enquiry
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
