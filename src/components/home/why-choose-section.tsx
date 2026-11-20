import { HeartHandshake, LayoutGrid, MapPin, MessageCircle, PackageCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: LayoutGrid,
    title: "Wide Range of Medical Equipment",
    description: "Beds, wheelchairs, respiratory equipment, supports and more, available to enquire about in one place.",
  },
  {
    icon: MessageCircle,
    title: "Rental & Purchase Enquiries",
    description: "Ask about renting or buying. We confirm availability and details when you contact us.",
  },
  {
    icon: PackageCheck,
    title: "Essential Home Healthcare Supplies",
    description: "Diapers, pull-ups, underpads, orthopedic supports and footwear for everyday care.",
  },
  {
    icon: MapPin,
    title: "Convenient Bengaluru Location",
    description: "Visit us in BEML Layout, Rajarajeshwari Nagar, opposite the Unilet showroom.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Assistance",
    description: "Reach our team by call or WhatsApp with your questions about equipment and products.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="why-heading">
      <Container>
        <SectionHeading id="why-heading" title="Why Choose Raphaz?" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <li key={feature.title}>
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <FeatureCard {...feature} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
