import { MapPin, Phone, Store } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { business } from "@/lib/business-config";
import { enquiryTypes } from "@/lib/schemas";
import { pageMetadata } from "@/lib/seo";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Contact Us | Medical Equipment Rentals in RR Nagar, Bengaluru",
  description:
    "Contact Raphaz Surgical & Medical Equipment Rentals in Rajarajeshwari Nagar, Bengaluru for equipment availability, rental enquiries and product information. Call or WhatsApp us.",
  path: "/contact",
});

interface ContactPageProps {
  searchParams: Promise<{ product?: string | string[]; type?: string | string[] }>;
}

const first = (value?: string | string[]) => (Array.isArray(value) ? value[0] : value);

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const product = (first(params.product) ?? "").slice(0, 100);
  const requestedType = enquiryTypes.find((type) => type.toLowerCase() === first(params.type)?.toLowerCase());

  return (
    <>
      <section className="bg-brand-light py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <SectionHeading
            as="h1"
            align="left"
            className="mt-6 max-w-4xl"
            title="Contact Raphaz Surgical & Medical Equipment Rentals"
            description="Get in touch for medical equipment availability, rental enquiries and product information."
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-label="Contact details and enquiry form">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <h2 className="text-2xl font-extrabold">Contact Information</h2>

            <div className="rounded-3xl border border-brand-charcoal/8 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-orange-deep">
                  <Store className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Business Name</h3>
                  <p className="mt-1 text-sm text-brand-muted">{business.name}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-charcoal/8 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-orange-deep">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <address className="mt-1 text-sm leading-relaxed text-brand-muted not-italic">
                    {business.address.full}
                  </address>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-charcoal/8 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-orange-deep">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Contact Number</h3>
                  <a
                    href={`tel:${business.phone.tel}`}
                    className="mt-1 inline-block text-sm text-brand-muted transition hover:text-brand-orange-deep"
                  >
                    {business.phone.display}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={`tel:${business.phone.tel}`} size="lg" className="flex-1">
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </ButtonLink>
              <ButtonLink href={whatsappUrl(generalEnquiryMessage)} variant="whatsapp" size="lg" className="flex-1">
                <WhatsAppIcon className="size-5" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 text-2xl font-extrabold">Send an Enquiry</h2>
            <ContactForm defaultProduct={product} defaultType={requestedType} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-light py-12 sm:py-16" aria-labelledby="store-heading">
        <Container>
          <h2 id="store-heading" className="text-2xl font-extrabold sm:text-3xl">
            Visit Our Store
          </h2>
          <p className="mt-2 max-w-2xl text-brand-muted">
            Find us in BEML Layout 3rd Stage, Rajarajeshwari Nagar, beside the Hopcoms and BBMP office and opposite the
            Unilet showroom.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-white shadow-soft">
            <iframe
              title={`Map showing the location of ${business.name}`}
              src={business.maps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full sm:h-105"
            />
          </div>
          <div className="mt-6">
            <ButtonLink href={business.maps.directionsUrl} size="lg">
              <MapPin className="size-5" aria-hidden="true" />
              Get Directions on Google Maps
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
