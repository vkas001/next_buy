import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface HomeHeaderProps {
  username?: string;
  onAvatar?: () => void;
}

export default function HomeHeader({
  username = "JD",
  onAvatar,
}: HomeHeaderProps) {
  return (
    <View style={{ paddingHorizontal: 24, paddingTop: 14, paddingBottom: 8 }}>
      {/* Top Row */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 1,
        }}
      >
        {/* Brand */}
        <View>
          <Text
            style={{
              fontSize: 26,
              color: "#F97316",
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            🛍️ NextBuy
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#78716C",
              fontFamily: "Inter_400Regular",
            }}
          >
            Find Great Deals
          </Text>
        </View>

        {/* Right Icons */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {/* Notification Bell */}
          <TouchableOpacity
            onPress={() => router.push("/notifications")}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#FED7AA",
            }}
          >
            <Ionicons name="notifications-outline" size={20} color="#F97316" />
            {/* Unread dot */}
            <View
              style={{
                position: "absolute",
                top: 8,
                right: 9,
                width: 8,
                height: 8,
                backgroundColor: "#EF4444",
                borderRadius: 4,
                borderWidth: 1.5,
                borderColor: "#FFF7ED",
              }}
            />
          </TouchableOpacity>

          {/* Chat */}
          <TouchableOpacity
            onPress={() => router.push("/chat")}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#FED7AA",
            }}
          >
            <Ionicons name="chatbubble-outline" size={20} color="#F97316" />
          </TouchableOpacity>

          {/* Avatar */}
          <TouchableOpacity
            onPress={onAvatar}
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
                color: "white",
                fontFamily: "Inter_500Medium",
                fontSize: 14,
              }}
            >
              {username}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
