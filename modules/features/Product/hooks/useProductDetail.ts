import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

import { useCart } from "@/modules/shared/context/CartContext";
import { useWishlist } from "@/modules/shared/context/WishlistContext";
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
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [product] = useState<Product>(dummyProduct);
  const [isLoading] = useState(false);

  // Check wishlist state
  const wishlisted = isWishlisted(product.id);

  // Toggle wishlist
  const handleToggleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: `Rs. ${product.price.toLocaleString()}`,
      condition: product.condition,
    });
  };

  // Add to cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      condition: product.condition,
      category: product.category,
      seller: product.seller.name,
    });

    Alert.alert(
      "Added to Cart! 🛒",
      `${product.name} has been added to your cart.`,
      [
        {
          text: "Continue Shopping",
          style: "cancel",
        },
        {
          text: "View Cart",
          onPress: () => router.push("/(tabs)/cart"),
        },
      ],
    );
  };

  // Buy now
  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      condition: product.condition,
      category: product.category,
      seller: product.seller.name,
    });

    router.push("/checkout");
  };

  return {
    product,
    isLoading,
    isWishlisted: wishlisted,
    toggleWishlist: handleToggleWishlist,
    addToCart: handleAddToCart,
    buyNow: handleBuyNow,
  };
}
