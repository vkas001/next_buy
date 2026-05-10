import { useState } from "react";
import { Notification } from "../types";

const dummyNotifications: Notification[] = [
  {
    id: "1",
    type: "order",
    title: "Order Confirmed!",
    message: "Your order #ORD001 has been confirmed by the seller.",
    time: "2 min ago",
    isRead: false,
    icon: "bag-check-outline",
  },
  {
    id: "2",
    type: "chat",
    title: "New Message",
    message: "Aarav: Is the iPhone still available?",
    time: "15 min ago",
    isRead: false,
    icon: "chatbubble-outline",
  },
  {
    id: "3",
    type: "promo",
    title: "Flash Sale! 🔥",
    message: "Up to 60% off on electronics. Limited time only!",
    time: "1 hour ago",
    isRead: true,
    icon: "pricetag-outline",
  },
  {
    id: "4",
    type: "order",
    title: "Item Shipped",
    message: "Your order #ORD002 is on the way!",
    time: "2 hours ago",
    isRead: true,
    icon: "car-outline",
  },
  {
    id: "5",
    type: "system",
    title: "Profile Verified",
    message: "Your identity has been successfully verified.",
    time: "1 day ago",
    isRead: true,
    icon: "shield-checkmark-outline",
  },
  {
    id: "6",
    type: "chat",
    title: "New Message",
    message: "Priya: Can you do Rs. 3,000?",
    time: "1 day ago",
    isRead: true,
    icon: "chatbubble-outline",
  },
  {
    id: "7",
    type: "promo",
    title: "New Deals Near You",
    message: "5 new listings in Kathmandu match your wishlist.",
    time: "2 days ago",
    isRead: true,
    icon: "location-outline",
  },
];

export function useNotifications() {
  const [notifications, setNotifications] =
    useState<Notification[]>(dummyNotifications);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return { notifications, unreadCount, markAsRead, markAllAsRead };
}
