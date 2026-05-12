import { Text, View } from "react-native";
import { Message } from "../types";

export default function ChatBubble({ message }: { message: Message }) {
  const isMe = message.senderId === "me";
  return (
    <View
      style={{ alignItems: isMe ? "flex-end" : "flex-start", marginBottom: 12 }}
    >
      <View
        style={{
          maxWidth: "75%",
          backgroundColor: isMe ? "#F97316" : "#FFFFFF",
          borderRadius: 16,
          borderBottomRightRadius: isMe ? 4 : 16,
          borderBottomLeftRadius: isMe ? 16 : 4,
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderWidth: isMe ? 0 : 1,
          borderColor: "#FED7AA",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: isMe ? "white" : "#1C1917",
            lineHeight: 20,
          }}
        >
          {message.text}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 11,
          fontFamily: "Inter_400Regular",
          color: "#A8A29E",
          marginTop: 4,
          marginHorizontal: 4,
        }}
      >
        {message.timestamp}
      </Text>
    </View>
  );
}
