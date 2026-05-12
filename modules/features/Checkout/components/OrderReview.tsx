import { Text, View } from "react-native";

interface OrderReviewProps {
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

export default function OrderReview({
  subtotal,
  deliveryFee,
  discount,
  total,
}: OrderReviewProps) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FED7AA",
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins_600SemiBold",
          color: "#1C1917",
          marginBottom: 16,
        }}
      >
        Order Summary
      </Text>
      {[
        {
          label: "Subtotal",
          value: `Rs. ${subtotal.toLocaleString()}`,
          color: "#1C1917",
        },
        {
          label: "Delivery Fee",
          value: `Rs. ${deliveryFee.toLocaleString()}`,
          color: "#1C1917",
        },
        {
          label: "Discount",
          value: `- Rs. ${discount.toLocaleString()}`,
          color: "#10B981",
        },
      ].map((row) => (
        <View
          key={row.label}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: "#78716C",
            }}
          >
            {row.label}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: row.color,
            }}
          >
            {row.value}
          </Text>
        </View>
      ))}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#FED7AA",
          paddingTop: 12,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            color: "#1C1917",
          }}
        >
          Total
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Poppins_600SemiBold",
            color: "#F97316",
          }}
        >
          Rs. {total.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}
