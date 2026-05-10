import { useState } from "react";
import { Order } from "../types";

const dummyOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    status: "delivered",
    items: [
      {
        id: "1",
        productName: "iPhone 13 Pro",
        price: 45000,
        quantity: 1,
        condition: "Good",
      },
    ],
    total: 45150,
    placedDate: "May 1, 2026",
    deliveryDate: "May 3, 2026",
    seller: "Aarav Sharma",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    status: "shipped",
    items: [
      {
        id: "2",
        productName: "Nike Air Max",
        price: 3500,
        quantity: 1,
        condition: "Like New",
      },
    ],
    total: 3650,
    placedDate: "May 5, 2026",
    seller: "Sarah K.",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    status: "pending",
    items: [
      {
        id: "3",
        productName: "Sony Headphones",
        price: 8000,
        quantity: 1,
        condition: "Good",
      },
    ],
    total: 8150,
    placedDate: "May 8, 2026",
    seller: "Mike R.",
  },
  {
    id: "4",
    orderNumber: "ORD-2024-004",
    status: "cancelled",
    items: [
      {
        id: "4",
        productName: "MacBook Air M1",
        price: 85000,
        quantity: 1,
        condition: "Like New",
      },
    ],
    total: 85150,
    placedDate: "Apr 28, 2026",
    seller: "Tech Store",
  },
];

export function useOrders() {
  const [orders] = useState<Order[]>(dummyOrders);
  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed">(
    "all",
  );

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "active")
      return ["pending", "confirmed", "shipped"].includes(order.status);
    if (activeTab === "completed")
      return ["delivered", "cancelled", "refunded"].includes(order.status);
    return true;
  });

  return { orders: filteredOrders, activeTab, setActiveTab };
}
