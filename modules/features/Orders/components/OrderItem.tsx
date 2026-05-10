import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Order } from "../types";
import OrderStatusBadge from "./OrderStatusBadge";

interface OrderItemProps {
  order: Order;
  onPress: (id: string) => void;
}

export default function OrderItem({ order, onPress }: OrderItemProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(order.id)}
      style={{
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FED7AA",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Inter_500Medium",
            color: "#78716C",
          }}
        >
          {order.orderNumber}
        </Text>
        <OrderStatusBadge status={order.status} />
      </View>

      {/* Items */}
      {order.items.map((item) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <View
            style={{
              width: 52,
              height: 52,
              backgroundColor: "#FFF7ED",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
              borderWidth: 1,
              borderColor: "#FED7AA",
            }}
          >
            <Ionicons name="image-outline" size={24} color="#FED7AA" />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: "#1C1917",
                marginBottom: 2,
              }}
            >
              {item.productName}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
              }}
            >
              {item.condition} • Qty: {item.quantity}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
              color: "#F97316",
            }}
          >
            Rs. {item.price.toLocaleString()}
          </Text>
        </View>
      ))}

      {/* Footer */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopWidth: 1,
          borderTopColor: "#FED7AA",
          paddingTop: 12,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: "#78716C",
            }}
          >
            Seller: {order.seller}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: "#78716C",
            }}
          >
            {order.placedDate}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: "#78716C",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_600SemiBold",
              color: "#1C1917",
            }}
          >
            Rs. {order.total.toLocaleString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
