import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ProductCatalog } from "@/components/products/product-catalog";
import { CTASection } from "@/components/ui/cta-section";
import { JsonLd } from "@/components/ui/json-ld";
import { categories, products } from "@/data/products";
import { business } from "@/lib/business-config";
import { pageMetadata } from "@/lib/seo";
import type { ProductCategory } from "@/types/product";

export const metadata = pageMetadata({
  title: "Medical Equipment & Healthcare Products in Bengaluru",
  description:
    "Hospital bed, wheelchair, oxygen concentrator, BiPAP and CPAP machine rentals in Bengaluru, plus orthopedic supports, adult diapers and diabetic footwear in RR Nagar.",
  path: "/products",
});

interface ProductsPageProps {
  searchParams: Promise<{ category?: string | string[] }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const requested = Array.isArray(category) ? category[0] : category;
  const initialCategory = categories.some((item) => item.id === requested)
    ? (requested as ProductCategory)
    : "all";

  // Catalogue listing only: names, no prices or other unverified product details.
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical equipment & healthcare products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${business.siteUrl}/products`,
    })),
  };

  return (
    <>
      <JsonLd data={listJsonLd} />
      <section className="bg-brand-light py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Products" }]} />
          <SectionHeading
            as="h1"
            align="left"
            className="mt-6"
            title="Medical Equipment & Healthcare Products"
            description="Explore our range of medical equipment rentals, mobility aids, respiratory devices, orthopedic supports, hygiene essentials and diabetic footwear."
          />
        </Container>
      </section>

      <section className="py-10 sm:py-14" aria-label="Product catalogue">
        <Container>
          <ProductCatalog initialCategory={initialCategory} />
          <p className="mt-10 text-sm text-brand-muted">
            Footwear price range of ₹375–₹999 is indicative and subject to confirmation. Availability and pricing for
            all other products are confirmed on enquiry.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
