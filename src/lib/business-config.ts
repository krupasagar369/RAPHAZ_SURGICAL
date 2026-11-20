/**
 * Central business configuration.
 * Contact numbers can be overridden with environment variables (see .env.example).
 */

const digitsOnly = (value: string) => value.replace(/\D/g, "");

const whatsappDigits = digitsOnly(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919611051111");
// Click-to-call falls back to the WhatsApp number until a separate phone line is confirmed.
const phoneDigits = digitsOnly(process.env.NEXT_PUBLIC_PHONE_NUMBER ?? whatsappDigits);

function formatInternational(digits: string) {
  if (digits.startsWith("91") && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return `+${digits}`;
}

const street =
  "No. 887, Ground Floor, 9th Cross, 6th Cross Road, beside the road of Hopcoms and BBMP Office, opposite Unilet Showroom, BEML Layout 3rd Stage, Rajarajeshwari Nagar";

const fullAddress = `${street}, Bengaluru, Karnataka 560098, India`;
const mapsQuery = encodeURIComponent(`Raphaz Surgical & Medical Equipment Rentals, ${fullAddress}`);

export const business = {
  name: "Raphaz Surgical & Medical Equipment Rentals",
  shortName: "Raphaz",
  description:
    "Medical equipment rentals and essential healthcare products in Rajarajeshwari Nagar, Bengaluru: patient cots, wheelchairs, oxygen machines, BiPAP, CPAP, nebulizers, orthopedic supports, hygiene products and footwear.",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  logo: {
    // Replace /public/logo/logo.svg with the original company logo (see README).
    src: "/logo/logo.png",
    width: 260,
    height: 64,
    alt: "Raphaz Surgical & Medical Equipment Rentals logo",
  },
  whatsapp: {
    number: whatsappDigits,
    display: formatInternational(whatsappDigits),
  },
  phone: {
    tel: `+${phoneDigits}`,
    display: formatInternational(phoneDigits),
  },
  address: {
    street,
    locality: "Rajarajeshwari Nagar",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560098",
    country: "IN",
    full: fullAddress,
  },
  maps: {
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
    embedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
] as const;
