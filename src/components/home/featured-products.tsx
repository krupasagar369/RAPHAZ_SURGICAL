import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/products/product-card";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="featured-heading">
      <Container>
        <SectionHeading
          id="featured-heading"
          title="Featured Products"
          description="Popular equipment and healthcare products people enquire about. Contact us to confirm availability."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <li key={product.id}>
              <Reveal delay={(index % 4) * 0.06} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <ButtonLink href="/products" variant="outline" size="lg">
            View All Products
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
