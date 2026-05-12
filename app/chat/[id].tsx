import ChatScreen from "@/modules/features/Chat/screens/ChatScreen";
import { useLocalSearchParams } from "expo-router";

export default function ChatPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <ChatScreen conversationId={id} />;
}
