import { useState } from "react";
import { CartItem, CartSummaryData } from "../types";

// Dummy data - will be replaced by backend API later
const dummyCartItems: CartItem[] = [
  {
    id: "1",
    quantity: 1,
    product: {
      id: "p1",
      name: "iPhone 13 Pro",
      price: 45000,
      originalPrice: 60000,
      condition: "Good",
      category: "Electronics",
      seller: "John D.",
    },
  },
  {
    id: "2",
    quantity: 1,
    product: {
      id: "p2",
      name: "Nike Air Max",
      price: 3500,
      originalPrice: 6000,
      condition: "Like New",
      category: "Fashion",
      seller: "Sarah K.",
    },
  },
  {
    id: "3",
    quantity: 1,
    product: {
      id: "p3",
      name: "Sony Headphones",
      price: 8000,
      originalPrice: 12000,
      condition: "Good",
      category: "Electronics",
      seller: "Mike R.",
    },
  },
];

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(dummyCartItems);

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase item quantity
  const increaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // Calculate cart summary
  const summary: CartSummaryData = {
    subtotal: cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    ),
    discount: cartItems.reduce((acc, item) => {
      const originalPrice = item.product.originalPrice ?? item.product.price;
      return acc + (originalPrice - item.product.price) * item.quantity;
    }, 0),
    deliveryFee: cartItems.length > 0 ? 150 : 0,
    total:
      cartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      ) + (cartItems.length > 0 ? 150 : 0),
  };

  return {
    cartItems,
    summary,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  };
}
