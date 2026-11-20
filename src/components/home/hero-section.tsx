import { Accessibility, BedDouble, Gauge, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

const tiles = [
  { icon: BedDouble, label: "Patient Cots & Beds", className: "col-span-2 row-span-2" },
  { icon: Accessibility, label: "Wheelchairs", className: "" },
  { icon: Gauge, label: "Oxygen Machines", className: "" },
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-130 rounded-full bg-linear-to-br from-brand-orange/25 to-brand-yellow/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-sm font-semibold text-brand-orange-deep ring-1 ring-brand-orange/25">
            <MapPin className="size-4" aria-hidden="true" />
            Rajarajeshwari Nagar, Bengaluru
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl leading-[1.1] font-extrabold text-brand-charcoal sm:text-5xl lg:text-6xl"
          >
            Quality Medical Equipment for Rent &amp; Sale in Bengaluru
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Reliable medical equipment rentals and essential healthcare supplies for home care and patient support.
            Explore patient beds, wheelchairs, oxygen machines, BiPAP, CPAP, nebulizers, orthopedic supports and more.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/products" size="lg">
              Explore Products
            </ButtonLink>
            <ButtonLink href={whatsappUrl(generalEnquiryMessage)} variant="whatsapp" size="lg">
              <WhatsAppIcon className="size-5" />
              Enquire on WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none" role="img" aria-label="Patient bed, wheelchair and oxygen machine available from Raphaz">
          <div className="grid grid-cols-3 grid-rows-2 gap-4" aria-hidden="true">
            {tiles.map(({ icon: Icon, label, className }) => (
              <div
                key={label}
                className={`flex flex-col items-center justify-center gap-3 rounded-3xl bg-linear-to-br from-brand-light via-white to-brand-yellow/15 p-6 text-center shadow-soft ring-1 ring-brand-orange/15 ${className}`}
              >
                <div className="flex size-16 items-center justify-center rounded-3xl bg-white text-brand-orange-deep shadow-soft ring-1 ring-brand-orange/15">
                  <Icon className="size-9" strokeWidth={1.6} />
                </div>
                <span className="text-sm font-bold text-brand-charcoal">{label}</span>
              </div>
            ))}
            <div className="col-span-3 flex items-center justify-center rounded-3xl bg-brand-charcoal px-6 py-5 text-center">
              <span className="text-sm font-semibold text-white">BiPAP &bull; CPAP &bull; Suction &bull; Nebulizer</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
