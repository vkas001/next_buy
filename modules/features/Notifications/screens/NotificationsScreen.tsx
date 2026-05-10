import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationItem from "../components/NotificationItem";
import { useNotifications } from "../hooks/useNotifications";

export default function NotificationsScreen() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } =
    useNotifications();

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
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#FED7AA",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#1C1917" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins_600SemiBold",
                color: "#1C1917",
              }}
            >
              Notifications
            </Text>
            {unreadCount > 0 && (
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_400Regular",
                  color: "#78716C",
                }}
              >
                {unreadCount} unread
              </Text>
            )}
          </View>
        </View>
        {unreadCount > 0 && (
          <TouchableOpacity onPress={markAllAsRead}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_500Medium",
                color: "#F97316",
              }}
            >
              Mark all read
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      >
        {notifications.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 80,
            }}
          >
            <Ionicons
              name="notifications-off-outline"
              size={48}
              color="#FED7AA"
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
                marginTop: 16,
              }}
            >
              No notifications yet
            </Text>
          </View>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onPress={markAsRead}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
