import { Text, View } from "react-native";
import { OrderStatus } from "../types";

const statusConfig: Record<
  OrderStatus,
  { label: string; color: string; bg: string }
> = {
  pending: { label: "Pending", color: "#F59E0B", bg: "#FEF3C7" },
  confirmed: { label: "Confirmed", color: "#3B82F6", bg: "#EFF6FF" },
  shipped: { label: "Shipped", color: "#8B5CF6", bg: "#F5F3FF" },
  delivered: { label: "Delivered", color: "#10B981", bg: "#ECFDF5" },
  cancelled: { label: "Cancelled", color: "#EF4444", bg: "#FEF2F2" },
  refunded: { label: "Refunded", color: "#64748B", bg: "#F1F5F9" },
};

export default function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const config = statusConfig[status];
  return (
    <View
      style={{
        backgroundColor: config.bg,
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 4,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Inter_500Medium",
          color: config.color,
        }}
      >
        {config.label}
      </Text>
    </View>
  );
}
