import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { title: "Browse Equipment", description: "Look through our range of equipment and healthcare products." },
  { title: "Contact Our Team", description: "Call us or send a WhatsApp message with the product you need." },
  {
    title: "Confirm Availability & Rental Details",
    description: "We confirm availability and the rental or purchase details with you.",
  },
];

export function HowToEnquire() {
  return (
    <section className="bg-brand-light py-16 sm:py-20" aria-labelledby="how-heading">
      <Container>
        <SectionHeading id="how-heading" title="How to Enquire" description="Three simple steps to get the equipment you need." />
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 0.1} className="h-full">
                <div className="flex h-full gap-5 rounded-3xl bg-white p-6 shadow-soft md:flex-col md:gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-orange-deep to-brand-red-deep text-lg font-extrabold text-white"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">
                      <span className="sr-only">Step {index + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
