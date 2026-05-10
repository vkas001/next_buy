import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";
import { useChatMessages } from "../hooks/useChat";

interface ChatScreenProps {
  conversationId: string;
}

export default function ChatScreen({ conversationId }: ChatScreenProps) {
  const { messages, inputText, setInputText, sendMessage } =
    useChatMessages(conversationId);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            paddingHorizontal: 24,
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            borderBottomColor: "#FED7AA",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#1C1917" />
          </TouchableOpacity>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#F97316",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins_600SemiBold",
                color: "white",
              }}
            >
              AS
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_500Medium",
                color: "#1C1917",
              }}
            >
              Aarav Sharma
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
              }}
            >
              iPhone 13 Pro — Rs. 45,000
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={20} color="#78716C" />
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 24, paddingBottom: 12 }}
        >
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
        </ScrollView>

        {/* Input */}
        <ChatInput
          value={inputText}
          onChangeText={setInputText}
          onSend={sendMessage}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
