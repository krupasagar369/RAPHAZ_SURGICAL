import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { rentalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

const rentalItems = [
  "Patient cots",
  "Wheelchairs",
  "BiPAP machines",
  "CPAP machines",
  "Oxygen equipment",
  "Suction machines",
];

export function RentalsSection() {
  return (
    <section className="bg-brand-light py-16 sm:py-20" aria-labelledby="rentals-heading">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-orange-deep uppercase">Rentals</p>
          <h2 id="rentals-heading" className="text-3xl leading-tight font-extrabold sm:text-4xl">
            Medical Equipment Rentals for Home Healthcare
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Need equipment for a patient at home? Enquire with us about rental availability and we will confirm the
            options and details for you.
          </p>
          <div className="mt-8">
            <ButtonLink href={whatsappUrl(rentalEnquiryMessage)} size="lg">
              Check Rental Availability
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {rentalItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-base font-semibold shadow-soft"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-orange-deep to-brand-red-deep text-white">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
