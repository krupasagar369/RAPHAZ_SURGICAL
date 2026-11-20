export type ProductCategory = "rentals" | "orthopedic" | "hygiene" | "footwear";

export type ProductGroup = "beds" | "mobility" | "respiratory" | "supports" | "hygiene" | "footwear";

/** Only list an availability type once the business has confirmed it for that product. */
export type Availability = "rent" | "buy";

export type IconKey =
  | "bed-single"
  | "bed-double"
  | "wheelchair"
  | "wind"
  | "gauge"
  | "droplets"
  | "cloud-fog"
  | "bone"
  | "footprints"
  | "package"
  | "layers";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  group: ProductGroup;
  shortDescription: string;
  details: string;
  availability: Availability[];
  images: ProductImage[];
  icon: IconKey;
  keywords: string[];
  /** Only set where the business has supplied a price. Always shown as indicative. */
  indicativePrice?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
}

export interface HomeCategory {
  group: ProductGroup;
  category: ProductCategory;
  title: string;
  description: string;
  icon: IconKey;
}
