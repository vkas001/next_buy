export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  condition: string;
  discount?: string;
  image?: string;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
