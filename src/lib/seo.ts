import type { Metadata } from "next";
import { business } from "@/lib/business-config";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
}

/** Builds consistent per-page metadata: canonical URL, Open Graph and Twitter tags. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = `${business.siteUrl}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: business.name,
      title,
      description,
      url,
    },
    twitter: { card: "summary", title, description },
  };
}

/** LocalBusiness / MedicalBusiness structured data. Contains only verified business details. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    description: business.description,
    url: business.siteUrl,
    image: `${business.siteUrl}${business.logo.src}`,
    telephone: business.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: ["Bengaluru", "Rajarajeshwari Nagar"],
    hasMap: business.maps.directionsUrl,
  };
}
