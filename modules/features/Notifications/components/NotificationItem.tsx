import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Notification } from "../types";

const typeColors = {
  order: "#F97316",
  chat: "#8B5CF6",
  promo: "#10B981",
  system: "#3B82F6",
};

interface NotificationItemProps {
  notification: Notification;
  onPress: (id: string) => void;
}

export default function NotificationItem({
  notification,
  onPress,
}: NotificationItemProps) {
  const color = typeColors[notification.type];

  return (
    <TouchableOpacity
      onPress={() => onPress(notification.id)}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: notification.isRead ? "#FFFFFF" : "#FFF7ED",
        borderWidth: 1,
        borderColor: notification.isRead ? "#FED7AA" : "#F97316",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
      }}
    >
      {/* Icon */}
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: color + "20",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
      >
        <Ionicons name={notification.icon as any} size={22} color={color} />
      </View>

      {/* Content */}
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
              flex: 1,
              marginRight: 8,
            }}
          >
            {notification.title}
          </Text>
          {!notification.isRead && (
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#F97316",
              }}
            />
          )}
        </View>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Inter_400Regular",
            color: "#78716C",
            marginBottom: 6,
            lineHeight: 18,
          }}
        >
          {notification.message}
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Inter_400Regular",
            color: "#A8A29E",
          }}
        >
          {notification.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
