import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryCard } from "@/components/home/category-card";
import { homeCategories } from "@/data/products";

export function CategoriesSection() {
  return (
    <section className="bg-brand-light py-16 sm:py-20" aria-labelledby="categories-heading">
      <Container>
        <SectionHeading
          id="categories-heading"
          title="Explore Our Medical Equipment & Healthcare Products"
          description="From patient beds and mobility aids to respiratory equipment, orthopedic supports and everyday hygiene essentials."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeCategories.map((category, index) => (
            <li key={category.title}>
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <CategoryCard category={category} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
