export type ProductCondition = "Like New" | "Good" | "Fair" | "Poor";

export type ProductCategory =
  | "Electronics"
  | "Fashion"
  | "Furniture"
  | "Books"
  | "Sports"
  | "Beauty"
  | "Music"
  | "Other";

export interface SellForm {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  condition: ProductCondition | null;
  category: ProductCategory | null;
  location: string;
  images: string[];
}
