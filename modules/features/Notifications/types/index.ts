export type NotificationType = "order" | "chat" | "promo" | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  icon: string;
}
