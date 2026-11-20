import type { CategoryInfo, HomeCategory, Product, ProductGroup } from "@/types/product";

/**
 * Central product catalogue. Edit this file to add, remove or update products.
 *
 * - `availability`: only list "rent" / "buy" where the business has confirmed it.
 *   Leave it empty ([]) when unknown; the product then appears without a label.
 * - `images`: add photos to /public/images/products and reference them here,
 *   e.g. { src: "/images/products/wheelchair.jpg", alt: "Wheelchair" }.
 *   Products without images use an icon tile.
 * - Do not add prices, ratings, stock levels or specifications unless verified.
 */

export const categories: CategoryInfo[] = [
  { id: "rentals", label: "Medical Equipment Rentals" },
  { id: "orthopedic", label: "Orthopedic Products" },
  { id: "hygiene", label: "Hygiene & Patient Care" },
  { id: "footwear", label: "Diabetic & Orthopedic Footwear" },
];

export const groupLabels: Record<ProductGroup, string> = {
  beds: "Patient Beds & Cots",
  mobility: "Wheelchairs & Mobility Aids",
  respiratory: "Respiratory Equipment",
  supports: "Orthopedic Supports",
  hygiene: "Diapers & Hygiene Products",
  footwear: "Diabetic & Orthopedic Footwear",
};

export const homeCategories: HomeCategory[] = [
  {
    group: "beds",
    category: "rentals",
    title: "Patient Beds & Cots",
    description: "Patient cots and hospital beds for home care. Ask about rental availability.",
    icon: "bed-double",
  },
  {
    group: "mobility",
    category: "rentals",
    title: "Wheelchairs & Mobility Aids",
    description: "Wheelchairs to help with movement at home and on the go.",
    icon: "wheelchair",
  },
  {
    group: "respiratory",
    category: "rentals",
    title: "Respiratory Equipment",
    description: "Oxygen machines, BiPAP, CPAP, suction machines and nebulizers.",
    icon: "wind",
  },
  {
    group: "supports",
    category: "orthopedic",
    title: "Orthopedic Supports",
    description: "Knee, back, ankle and wrist supports and other orthopedic supports.",
    icon: "bone",
  },
  {
    group: "hygiene",
    category: "hygiene",
    title: "Diapers & Hygiene Products",
    description: "Adult diapers, pull-ups and underpads for everyday patient care.",
    icon: "package",
  },
  {
    group: "footwear",
    category: "footwear",
    title: "Diabetic & Orthopedic Footwear",
    description: "Diabetic and orthopedic footwear. Indicative range ₹375–₹999, subject to confirmation.",
    icon: "footprints",
  },
];

const FOOTWEAR_PRICE = "₹375–₹999 (indicative, subject to confirmation)";

export const products: Product[] = [
  {
    id: "patient-cot",
    name: "Patient Cot",
    category: "rentals",
    group: "beds",
    shortDescription: "Patient cots and hospital beds for home care. Enquire for rental availability.",
    details:
      "Patient cots are available to enquire about for home care. Contact us to confirm current availability and rental options.",
    availability: ["rent"],
    images: [],
    icon: "bed-single",
    keywords: ["bed", "cot", "patient bed", "home care", "hospital bed"],
  },
  {
    id: "hospital-bed",
    name: "Hospital Bed",
    category: "rentals",
    group: "beds",
    shortDescription: "Hospital beds for patient care at home. Enquire for availability and options.",
    details: "Contact us to confirm availability, options and pricing for hospital beds.",
    availability: [],
    images: [],
    icon: "bed-double",
    keywords: ["bed", "patient bed", "home care"],
  },
  {
    id: "wheelchair",
    name: "Wheelchair",
    category: "rentals",
    group: "mobility",
    shortDescription: "Wheelchairs for mobility assistance. Enquire for rental availability.",
    details:
      "Wheelchairs are available to enquire about for mobility assistance. Contact us to confirm current availability and rental options.",
    availability: ["rent"],
    images: [],
    icon: "wheelchair",
    keywords: ["mobility", "wheel chair", "walking aid"],
  },
  {
    id: "bipap",
    name: "BiPAP Machine",
    category: "rentals",
    group: "respiratory",
    shortDescription: "BiPAP machines for respiratory support. Enquire for rental availability.",
    details:
      "BiPAP machines are available to enquire about for rental. Please follow your doctor's advice when choosing respiratory equipment, and contact us to confirm availability.",
    availability: ["rent"],
    images: [],
    icon: "wind",
    keywords: ["bi pap", "respiratory", "breathing", "sleep"],
  },
  {
    id: "cpap",
    name: "CPAP Machine",
    category: "rentals",
    group: "respiratory",
    shortDescription: "CPAP machines for respiratory support. Enquire for rental availability.",
    details:
      "CPAP machines are available to enquire about for rental. Please follow your doctor's advice when choosing respiratory equipment, and contact us to confirm availability.",
    availability: ["rent"],
    images: [],
    icon: "wind",
    keywords: ["c pap", "respiratory", "breathing", "sleep"],
  },
  {
    id: "oxygen-concentrator",
    name: "Oxygen Concentrator / Oxygen Machine",
    category: "rentals",
    group: "respiratory",
    shortDescription: "Oxygen concentrators and oxygen machines. Enquire for rental availability.",
    details:
      "Oxygen machines are available to enquire about for rental. Please follow your doctor's advice when choosing respiratory equipment, and contact us to confirm availability.",
    availability: ["rent"],
    images: [],
    icon: "gauge",
    keywords: ["oxygen", "concentrator", "respiratory", "breathing"],
  },
  {
    id: "suction-machine",
    name: "Suction Machine",
    category: "rentals",
    group: "respiratory",
    shortDescription: "Suction machines for patient care at home. Enquire for rental availability.",
    details:
      "Suction machines are available to enquire about for rental. Contact us to confirm current availability.",
    availability: ["rent"],
    images: [],
    icon: "droplets",
    keywords: ["suction", "respiratory", "patient care"],
  },
  {
    id: "nebulizer",
    name: "Nebulizer",
    category: "rentals",
    group: "respiratory",
    shortDescription: "Nebulizers for respiratory care at home. Enquire for availability.",
    details: "Contact us to confirm availability, options and pricing for nebulizers.",
    availability: [],
    images: [],
    icon: "cloud-fog",
    keywords: ["respiratory", "breathing", "inhaler"],
  },
  {
    id: "knee-support",
    name: "Knee Support",
    category: "orthopedic",
    group: "supports",
    shortDescription: "Orthopedic knee supports. Enquire for availability and options.",
    details: "Contact us to confirm availability, options and pricing for knee supports.",
    availability: [],
    images: [],
    icon: "bone",
    keywords: ["orthopedic", "ortho", "brace", "support"],
  },
  {
    id: "back-support",
    name: "Back Support",
    category: "orthopedic",
    group: "supports",
    shortDescription: "Orthopedic back supports. Enquire for availability and options.",
    details: "Contact us to confirm availability, options and pricing for back supports.",
    availability: [],
    images: [],
    icon: "bone",
    keywords: ["orthopedic", "ortho", "lumbar", "belt", "support"],
  },
  {
    id: "ankle-support",
    name: "Ankle Support",
    category: "orthopedic",
    group: "supports",
    shortDescription: "Orthopedic ankle supports. Enquire for availability and options.",
    details: "Contact us to confirm availability, options and pricing for ankle supports.",
    availability: [],
    images: [],
    icon: "bone",
    keywords: ["orthopedic", "ortho", "brace", "support"],
  },
  {
    id: "wrist-support",
    name: "Wrist Support",
    category: "orthopedic",
    group: "supports",
    shortDescription: "Orthopedic wrist supports. Enquire for availability and options.",
    details: "Contact us to confirm availability, options and pricing for wrist supports.",
    availability: [],
    images: [],
    icon: "bone",
    keywords: ["orthopedic", "ortho", "brace", "support"],
  },
  {
    id: "ortho-other",
    name: "Other Orthopedic Supports",
    category: "orthopedic",
    group: "supports",
    shortDescription: "A range of orthopedic supports. Ask us about the support you need.",
    details:
      "Looking for a different orthopedic support? Message us with what you need and we will confirm availability.",
    availability: [],
    images: [],
    icon: "bone",
    keywords: ["orthopedic", "ortho", "brace", "support", "neck", "shoulder", "elbow"],
  },
  {
    id: "adult-diapers",
    name: "Adult Diapers",
    category: "hygiene",
    group: "hygiene",
    shortDescription: "Adult diapers for everyday patient care. Enquire for availability.",
    details: "Contact us to confirm available sizes, options and pricing for adult diapers.",
    availability: [],
    images: [],
    icon: "package",
    keywords: ["diaper", "hygiene", "incontinence", "patient care"],
  },
  {
    id: "pull-up-diapers",
    name: "Pull-Up Diapers",
    category: "hygiene",
    group: "hygiene",
    shortDescription: "Pull-up style diapers for everyday patient care. Enquire for availability.",
    details: "Contact us to confirm available sizes, options and pricing for pull-up diapers.",
    availability: [],
    images: [],
    icon: "package",
    keywords: ["diaper", "pullup", "pull up", "hygiene", "patient care"],
  },
  {
    id: "underpads",
    name: "Underpads",
    category: "hygiene",
    group: "hygiene",
    shortDescription: "Underpads for bed and patient care. Enquire for availability.",
    details: "Contact us to confirm available sizes, options and pricing for underpads.",
    availability: [],
    images: [],
    icon: "layers",
    keywords: ["under pad", "bed pad", "hygiene", "patient care"],
  },
  {
    id: "diabetic-footwear",
    name: "Diabetic Footwear",
    category: "footwear",
    group: "footwear",
    shortDescription: "Diabetic footwear. Indicative price range ₹375–₹999, subject to confirmation.",
    details:
      "Diabetic footwear is available to enquire about. Prices are indicative and subject to confirmation; contact us for current options and sizes.",
    availability: ["buy"],
    images: [],
    icon: "footprints",
    keywords: ["shoes", "sandals", "slippers", "diabetes", "footwear"],
    indicativePrice: FOOTWEAR_PRICE,
  },
  {
    id: "orthopedic-footwear",
    name: "Orthopedic Footwear",
    category: "footwear",
    group: "footwear",
    shortDescription: "Orthopedic footwear. Indicative price range ₹375–₹999, subject to confirmation.",
    details:
      "Orthopedic footwear is available to enquire about. Prices are indicative and subject to confirmation; contact us for current options and sizes.",
    availability: ["buy"],
    images: [],
    icon: "footprints",
    keywords: ["shoes", "sandals", "slippers", "ortho", "footwear"],
    indicativePrice: FOOTWEAR_PRICE,
  },
];

/** IDs shown in the homepage "Featured Products" grid, in display order. */
export const featuredProductIds = [
  "patient-cot",
  "wheelchair",
  "bipap",
  "cpap",
  "oxygen-concentrator",
  "suction-machine",
  "nebulizer",
  "ortho-other",
] as const;

export const featuredProducts: Product[] = featuredProductIds
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is Product => product !== undefined);
