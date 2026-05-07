import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface HomeHeaderProps {
  username?: string;
  onNotification?: () => void;
  onAvatar?: () => void;
}

export default function HomeHeader({
  username = "JD",
  onNotification,
  onAvatar,
}: HomeHeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      {/* Greeting */}
      <View>
        <Text
          style={{
            fontSize: 45,
            color: "#1CD9B9",
            fontFamily: "Inter_400Regular",
          }}
        >
          🛍️NextBuy
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#F8FAFC",
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Find Great Deals..
        </Text>
      </View>

      {/* Right Icons */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        {/* Notification Bell */}
        <TouchableOpacity
          onPress={onNotification}
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#1E293B",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#334155",
          }}
        >
          <Ionicons name="notifications-outline" size={20} color="#64748B" />
        </TouchableOpacity>

        {/* Avatar */}
        <TouchableOpacity
          onPress={onAvatar}
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#2563EB",
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
  );
}
