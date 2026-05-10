import { useState } from "react";
import { Product } from "../types";

// Dummy product - will be replaced by backend API later
const dummyProduct: Product = {
  id: "1",
  name: "iPhone 13 Pro — 256GB Sierra Blue",
  price: 45000,
  originalPrice: 60000,
  condition: "Good",
  category: "Electronics",
  description:
    "Selling my iPhone 13 Pro in great condition. No scratches on the screen, minor wear on the back. Battery health is at 89%. Comes with original box, charger, and unused EarPods. Reason for selling: upgrading to iPhone 15. Price is slightly negotiable for serious buyers.",
  images: ["img1", "img2", "img3"],
  location: "Kathmandu, Nepal",
  postedDate: "2 days ago",
  isWishlisted: false,
  views: 142,
  tags: ["iphone", "apple", "smartphone", "electronics"],
  seller: {
    id: "s1",
    name: "Aarav Sharma",
    avatar: "AS",
    rating: 4.8,
    totalSales: 23,
    joinedDate: "Jan 2023",
    location: "Thamel, Kathmandu",
    isVerified: true,
  },
};

export function useProductDetail(productId: string) {
  const [product, setProduct] = useState<Product>(dummyProduct);
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted);
  const [isLoading, setIsLoading] = useState(false);

  // Toggle wishlist state
  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  // Add to cart - backend will implement this
  const addToCart = () => {
    // TODO: backend will implement cart API call
    console.log("Added to cart:", product.id);
  };

  // Buy now - backend will implement this
  const buyNow = () => {
    // TODO: backend will navigate to checkout
    console.log("Buy now:", product.id);
  };

  return {
    product,
    isWishlisted,
    isLoading,
    toggleWishlist,
    addToCart,
    buyNow,
  };
}
