import { Check, MapPin, MessageCircle, Package, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { business } from "@/lib/business-config";
import { pageMetadata } from "@/lib/seo";
import { generalEnquiryMessage, rentalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "About Us | Medical Equipment Supplier in Rajarajeshwari Nagar",
  description:
    "Raphaz Surgical & Medical Equipment Rentals is a medical equipment supplier in Rajarajeshwari Nagar, Bengaluru, offering equipment for patient care, mobility, respiratory support and everyday healthcare needs.",
  path: "/about",
});

const productRange = [
  "Patient cots and hospital beds",
  "Wheelchairs",
  "BiPAP and CPAP machines",
  "Oxygen concentrators and suction machines",
  "Nebulizers",
  "Orthopedic supports for knee, back, ankle and wrist",
  "Adult diapers, pull-ups and underpads",
  "Diabetic and orthopedic footwear",
];

const whoWeServe = [
  "Home healthcare customers",
  "Patients and caregivers",
  "Families arranging patient care equipment",
  "Individuals seeking mobility assistance",
  "Customers requiring healthcare consumables",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-light py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <SectionHeading
            as="h1"
            align="left"
            className="mt-6 max-w-4xl"
            title="About Raphaz Surgical & Medical Equipment Rentals"
            description="Raphaz Surgical & Medical Equipment Rentals is a medical equipment supplier located in Rajarajeshwari Nagar, Bengaluru. We provide access to a range of medical equipment and essential healthcare products for patient care, mobility assistance, respiratory support and everyday healthcare needs."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="business-heading">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 id="business-heading" className="text-3xl font-extrabold">
              About Our Business
            </h2>
            <p className="mt-4 leading-relaxed text-brand-muted">
              We focus on medical equipment rentals and healthcare products for people caring for patients at home.
              Whether you need a patient cot, a wheelchair, respiratory equipment or everyday supplies, you can contact
              us to find out what is available.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-extrabold">Our Product &amp; Equipment Range</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {productRange.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-orange-deep" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href="/products" variant="outline">
                Browse All Products
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-light py-16 sm:py-20" aria-labelledby="enquiries-heading">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <h2 id="enquiries-heading" className="text-3xl font-extrabold">
              Rental &amp; Purchase Enquiries
            </h2>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Contact us to ask about renting or buying equipment. Availability, rental options and pricing are
              confirmed directly with you when you enquire.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={whatsappUrl(rentalEnquiryMessage)} size="lg">
              Check Rental Availability
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Contact Us
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="serve-heading">
        <Container>
          <SectionHeading id="serve-heading" title="Who We Serve" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.map((item, index) => (
              <li key={item}>
                <Reveal delay={(index % 3) * 0.08} className="h-full">
                  <FeatureCard
                    icon={Users}
                    title={item}
                    description="Equipment and healthcare products available to enquire about."
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-light py-16 sm:py-20" aria-labelledby="contact-us-heading">
        <Container>
          <SectionHeading id="contact-us-heading" title="Why Customers Can Contact Us" />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            <li>
              <FeatureCard
                icon={Package}
                title="Check Availability"
                description="Ask whether the equipment or product you need is available for rental or purchase."
              />
            </li>
            <li>
              <FeatureCard
                icon={MessageCircle}
                title="Product Information"
                description="Get details about our equipment and healthcare products before you decide."
              />
            </li>
            <li>
              <FeatureCard
                icon={MapPin}
                title="Visit the Store"
                description="Find us in BEML Layout, Rajarajeshwari Nagar and see the products in person."
              />
            </li>
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="visit-heading">
        <Container className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 id="visit-heading" className="text-3xl font-extrabold">
              Visit Our Location
            </h2>
            <address className="mt-4 text-base leading-relaxed text-brand-muted not-italic">
              <strong className="text-brand-charcoal">{business.name}</strong>
              <br />
              {business.address.full}
            </address>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={business.maps.directionsUrl} size="lg">
                <MapPin className="size-5" aria-hidden="true" />
                Get Directions
              </ButtonLink>
              <ButtonLink href={whatsappUrl(generalEnquiryMessage)} variant="whatsapp" size="lg">
                WhatsApp Us
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-brand-charcoal/10 shadow-soft">
            <iframe
              title={`Map showing the location of ${business.name}`}
              src={business.maps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-4/3 w-full"
            />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
