import { useState } from "react";
import { ChatConversation, Message } from "../types";

const dummyConversations: ChatConversation[] = [
  {
    id: "1",
    participantName: "Aarav Sharma",
    participantAvatar: "AS",
    lastMessage: "Is the iPhone still available?",
    lastMessageTime: "2 min ago",
    unreadCount: 2,
    productName: "iPhone 13 Pro",
    productPrice: "Rs. 45,000",
  },
  {
    id: "2",
    participantName: "Priya Singh",
    participantAvatar: "PS",
    lastMessage: "Can you do Rs. 3,000?",
    lastMessageTime: "1 hour ago",
    unreadCount: 1,
    productName: "Nike Air Max",
    productPrice: "Rs. 3,500",
  },
  {
    id: "3",
    participantName: "Mike Rana",
    participantAvatar: "MR",
    lastMessage: "Thanks! I'll pick it up tomorrow.",
    lastMessageTime: "2 hours ago",
    unreadCount: 0,
    productName: "Sony Headphones",
    productPrice: "Rs. 8,000",
  },
  {
    id: "4",
    participantName: "Sarah KC",
    participantAvatar: "SK",
    lastMessage: "What's the battery health?",
    lastMessageTime: "1 day ago",
    unreadCount: 0,
    productName: "MacBook Air M1",
    productPrice: "Rs. 85,000",
  },
];

const dummyMessages: Message[] = [
  {
    id: "1",
    text: "Hi! Is the iPhone still available?",
    senderId: "other",
    timestamp: "10:30 AM",
    isRead: true,
  },
  {
    id: "2",
    text: "Yes it is! Still in great condition.",
    senderId: "me",
    timestamp: "10:32 AM",
    isRead: true,
  },
  {
    id: "3",
    text: "Can you share more photos?",
    senderId: "other",
    timestamp: "10:33 AM",
    isRead: true,
  },
  {
    id: "4",
    text: "Sure, I'll send them now.",
    senderId: "me",
    timestamp: "10:35 AM",
    isRead: true,
  },
  {
    id: "5",
    text: "Is the iPhone still available?",
    senderId: "other",
    timestamp: "10:40 AM",
    isRead: false,
  },
];

export function useChat() {
  const [conversations] = useState<ChatConversation[]>(dummyConversations);
  return { conversations };
}

export function useChatMessages(conversationId: string) {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMessage: Message = {
      id: String(messages.length + 1),
      text: inputText.trim(),
      senderId: "me",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isRead: false,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };

  return { messages, inputText, setInputText, sendMessage };
}
