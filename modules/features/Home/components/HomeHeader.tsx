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
            fontSize: 28,
            color: "#F97316",
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          🛍️ NextBuy
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#78716C",
            fontFamily: "Inter_400Regular",
          }}
        >
          Find Great Deals
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
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#FED7AA",
          }}
        >
          <Ionicons name="notifications-outline" size={20} color="#F97316" />
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
  );
}
