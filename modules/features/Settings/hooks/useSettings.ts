import { useState } from "react";

export function useSettings() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [promotions, setPromotions] = useState(false);

  return {
    notifications,
    setNotifications,
    emailAlerts,
    setEmailAlerts,
    orderUpdates,
    setOrderUpdates,
    promotions,
    setPromotions,
  };
}
