import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

import { useCart } from "@/modules/shared/context/CartContext";
import { useWishlist } from "@/modules/shared/context/WishlistContext";
import { Product } from "../types";

// Product database - will be replaced by backend API later
const productsDatabase: Record<string, Product> = {
  "1": {
    id: "1",
    name: "iPhone 13 Pro — 256GB Sierra Blue",
    price: 45000,
    originalPrice: 60000,
    condition: "Good",
    category: "Electronics",
    description:
      "Selling my iPhone 13 Pro in great condition. No scratches on the screen, minor wear on the back. Battery health is at 89%. Comes with original box, charger, and unused EarPods.",
    images: [
      require("@/assets/images/search/iphone13.webp"),
    ],
    location: "Kathmandu, Nepal",
    postedDate: "2 days ago",
    isWishlisted: false,
    views: 142,
    tags: ["iphone", "apple", "smartphone"],
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
  },
  "2": {
    id: "2",
    name: "Sony WH-1000XM4 Headphones",
    price: 8000,
    originalPrice: 12000,
    condition: "Good",
    category: "Electronics",
    description:
      "Premium noise-canceling headphones. Used for 3 months, excellent condition. Original box and cable included.",
    images: [
      require("@/assets/images/search/sony.jpg"),
      require("@/assets/images/search/sony.jpg"),
    ],
    location: "Kathmandu, Nepal",
    postedDate: "1 week ago",
    isWishlisted: false,
    views: 87,
    tags: ["headphones", "sony", "audio"],
    seller: {
      id: "s2",
      name: "Priya Patel",
      avatar: "PP",
      rating: 4.6,
      totalSales: 15,
      joinedDate: "Mar 2023",
      location: "Patan, Kathmandu",
      isVerified: true,
    },
  },
  "3": {
    id: "3",
    name: "MacBook Air M1 — 256GB",
    price: 85000,
    originalPrice: 110000,
    condition: "Like New",
    category: "Electronics",
    description:
      "MacBook Air M1 in like new condition. Minimal usage, all accessories included.",
    images: [
      require("@/assets/images/search/macbook.png"),
      require("@/assets/images/search/macbook.png"),
    ],
    location: "Kathmandu, Nepal",
    postedDate: "3 days ago",
    isWishlisted: false,
    views: 215,
    tags: ["macbook", "apple", "laptop"],
    seller: {
      id: "s3",
      name: "Rohan Singh",
      avatar: "RS",
      rating: 4.9,
      totalSales: 45,
      joinedDate: "Jan 2022",
      location: "Boudha, Kathmandu",
      isVerified: true,
    },
  },
  "4": {
    id: "4",
    name: "Canon EOS 5D Mark IV DSLR",
    price: 25000,
    originalPrice: 35000,
    condition: "Good",
    category: "Electronics",
    description:
      "Professional DSLR camera with 2 lenses and accessories. Perfect for photography enthusiasts.",
    images: [
      require("@/assets/images/search/dslr.jpg"),
      require("@/assets/images/search/dslr.jpg"),
    ],
    location: "Kathmandu, Nepal",
    postedDate: "5 days ago",
    isWishlisted: false,
    views: 156,
    tags: ["camera", "dslr", "photography"],
    seller: {
      id: "s4",
      name: "Vikram Kumar",
      avatar: "VK",
      rating: 4.7,
      totalSales: 32,
      joinedDate: "Jun 2022",
      location: "Kathmandu",
      isVerified: true,
    },
  },
  "5": {
    id: "5",
    name: "Apple Watch Series 7",
    price: 5500,
    originalPrice: 7000,
    condition: "Fair",
    category: "Electronics",
    description: "Apple Watch with some cosmetic wear. Works perfectly. Charger included.",
    images: [require("@/assets/images/search/watch.jpg")],
    location: "Kathmandu, Nepal",
    postedDate: "1 day ago",
    isWishlisted: false,
    views: 98,
    tags: ["watch", "apple", "wearable"],
    seller: {
      id: "s5",
      name: "Simran Gupta",
      avatar: "SG",
      rating: 4.5,
      totalSales: 18,
      joinedDate: "Sep 2023",
      location: "Kathmandu",
      isVerified: false,
    },
  },
  "6": {
    id: "6",
    name: "Nike Air Max 90",
    price: 3500,
    originalPrice: 6000,
    condition: "Like New",
    category: "Fashion",
    description:
      "Authentic Nike Air Max 90 in size 10. Worn only twice, like new condition.",
    images: [require("@/assets/images/search/nikey.jpg")],
    location: "Kathmandu, Nepal",
    postedDate: "4 days ago",
    isWishlisted: false,
    views: 124,
    tags: ["nike", "shoes", "fashion"],
    seller: {
      id: "s6",
      name: "Ananya Verma",
      avatar: "AV",
      rating: 4.8,
      totalSales: 28,
      joinedDate: "Feb 2023",
      location: "Kathmandu",
      isVerified: true,
    },
  },
  "7": {
    id: "7",
    name: "Premium Leather Jacket",
    price: 2800,
    originalPrice: 4500,
    condition: "Good",
    category: "Fashion",
    description: "Genuine leather jacket in brown. Perfect condition, rarely worn.",
    images: [require("@/assets/images/search/jacket.jpg")],
    location: "Kathmandu, Nepal",
    postedDate: "6 days ago",
    isWishlisted: false,
    views: 167,
    tags: ["jacket", "leather", "fashion"],
    seller: {
      id: "s7",
      name: "Raj Malhotra",
      avatar: "RM",
      rating: 4.6,
      totalSales: 22,
      joinedDate: "Aug 2022",
      location: "Kathmandu",
      isVerified: true,
    },
  },
  "10": {
    id: "10",
    name: "Gaming Chair Pro",
    price: 12000,
    originalPrice: 16000,
    condition: "Like New",
    category: "Furniture",
    description: "Ergonomic gaming chair with lumbar support. Excellent condition.",
    images: [require("@/assets/images/search/chair.jpg")],
    location: "Kathmandu, Nepal",
    postedDate: "2 days ago",
    isWishlisted: false,
    views: 203,
    tags: ["chair", "gaming", "furniture"],
    seller: {
      id: "s8",
      name: "Arjun Reddy",
      avatar: "AR",
      rating: 4.9,
      totalSales: 51,
      joinedDate: "Dec 2021",
      location: "Kathmandu",
      isVerified: true,
    },
  },
};

export function useProductDetail(productId: string) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  // Get product from database by ID
  const product = productId ? productsDatabase[productId] : productsDatabase["1"];
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
