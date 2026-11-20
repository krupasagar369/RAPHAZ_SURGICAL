import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { RentalsSection } from "@/components/home/rentals-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { HowToEnquire } from "@/components/home/how-to-enquire";
import { CTASection } from "@/components/ui/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Medical Equipment Rentals in Bengaluru | Raphaz Surgical & Medical Equipment Rentals",
  description:
    "Medical equipment rentals and healthcare supplies in Rajarajeshwari Nagar, Bengaluru. Enquire about patient cots, wheelchairs, oxygen concentrators, BiPAP, CPAP, nebulizers and orthopedic supports.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <RentalsSection />
      <WhyChooseSection />
      <HowToEnquire />
      <CTASection />
    </>
  );
}
