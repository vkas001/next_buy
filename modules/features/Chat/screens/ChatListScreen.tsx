import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useChat } from "../hooks/useChat";

export default function ChatListScreen() {
  const { conversations } = useChat();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#FED7AA",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1C1917" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_600SemiBold",
            color: "#1C1917",
          }}
        >
          Messages
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      >
        {conversations.map((conv) => (
          <TouchableOpacity
            key={conv.id}
            onPress={() => router.push(`/chat/${conv.id}`)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#FED7AA",
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}
          >
            {/* Avatar */}
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: "#F97316",
                borderRadius: 26,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_600SemiBold",
                  color: "white",
                }}
              >
                {conv.participantAvatar}
              </Text>
            </View>

            {/* Info */}
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter_500Medium",
                    color: "#1C1917",
                  }}
                >
                  {conv.participantName}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Inter_400Regular",
                    color: "#A8A29E",
                  }}
                >
                  {conv.lastMessageTime}
                </Text>
              </View>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_400Regular",
                  color: "#78716C",
                  marginBottom: 4,
                }}
              >
                {conv.lastMessage}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 11,
                  fontFamily: "Inter_400Regular",
                  color: "#F97316",
                }}
              >
                Re: {conv.productName} — {conv.productPrice}
              </Text>
            </View>

            {/* Unread Badge */}
            {conv.unreadCount > 0 && (
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: "#F97316",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Inter_500Medium",
                    color: "white",
                  }}
                >
                  {conv.unreadCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
