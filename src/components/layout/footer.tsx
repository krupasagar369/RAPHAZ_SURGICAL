import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Logo } from "@/components/layout/logo";
import { categories } from "@/data/products";
import { business, navLinks } from "@/lib/business-config";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-charcoal/10 bg-brand-light">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" aria-label={`${business.name} - home`} className="inline-block rounded-lg">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
            Medical equipment rentals and essential healthcare products in Rajarajeshwari Nagar, Bengaluru.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold tracking-wide text-brand-charcoal uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-brand-muted transition hover:text-brand-orange-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Product categories">
          <h2 className="text-sm font-bold tracking-wide text-brand-charcoal uppercase">Product Categories</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products?category=${category.id}`}
                  className="text-brand-muted transition hover:text-brand-orange-deep"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-brand-charcoal uppercase">Visit &amp; Contact</h2>
          <address className="mt-4 space-y-3 text-sm text-brand-muted not-italic">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange-deep" aria-hidden="true" />
              <span>{business.address.full}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand-orange-deep" aria-hidden="true" />
              <a href={`tel:${business.phone.tel}`} className="transition hover:text-brand-orange-deep">
                {business.phone.display}
              </a>
            </p>
          </address>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={whatsappUrl(generalEnquiryMessage)} variant="whatsapp" size="sm">
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={business.maps.directionsUrl} variant="outline" size="sm">
              <MapPin className="size-4" aria-hidden="true" />
              Google Maps
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div className="border-t border-brand-charcoal/10">
        <Container className="py-5 text-center text-xs text-brand-muted">
          &copy; {year} {business.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
