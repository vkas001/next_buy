import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderItem from "../components/OrderItem";
import { useOrders } from "../hooks/useOrders";

export default function OrderHistoryScreen() {
  const { orders, activeTab, setActiveTab } = useOrders();

  const tabs = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

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
          My Orders
        </Text>
      </View>

      {/* Tabs */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 24,
          paddingVertical: 12,
          gap: 8,
        }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActiveTab(tab.key as any)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 999,
              backgroundColor: activeTab === tab.key ? "#F97316" : "#FFFFFF",
              borderWidth: 1,
              borderColor: activeTab === tab.key ? "#F97316" : "#FED7AA",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_500Medium",
                color: activeTab === tab.key ? "white" : "#78716C",
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      >
        {orders.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 80,
            }}
          >
            <Ionicons name="bag-outline" size={48} color="#FED7AA" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
                marginTop: 16,
              }}
            >
              No orders found
            </Text>
          </View>
        ) : (
          orders.map((order) => (
            <OrderItem
              key={order.id}
              order={order}
              onPress={(id) => console.log("Order:", id)}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
