export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: string;
  isRead: boolean;
}

export interface ChatConversation {
  id: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  productName: string;
  productPrice: string;
}
