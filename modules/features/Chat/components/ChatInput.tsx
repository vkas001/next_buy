import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  value,
  onChangeText,
  onSend,
}: ChatInputProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#FED7AA",
        gap: 12,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFF7ED",
          borderRadius: 24,
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderWidth: 1,
          borderColor: "#FED7AA",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: "#1C1917",
          }}
          placeholder="Type a message..."
          placeholderTextColor="#A8A29E"
          value={value}
          onChangeText={onChangeText}
          multiline
        />
      </View>
      <TouchableOpacity
        onPress={onSend}
        style={{
          width: 44,
          height: 44,
          backgroundColor: value.trim() ? "#F97316" : "#FED7AA",
          borderRadius: 22,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="send" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}
