// Product types - backend will use these for API integration

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  totalSales: number;
  joinedDate: string;
  location: string;
  isVerified: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  condition: "Like New" | "Good" | "Fair" | "Poor";
  category: string;
  description: string;
  images: string[];
  seller: Seller;
  location: string;
  postedDate: string;
  isWishlisted: boolean;
  views: number;
  tags: string[];
}
