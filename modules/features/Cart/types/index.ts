// Cart types - backend will use these interfaces for API integration

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  condition: string;
  category: string;
  seller: string;
  image?: string;
}

export interface CartItem {
  id: string;
  product: CartProduct;
  quantity: number;
}

export interface CartSummaryData {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
}
