import { Text, TouchableOpacity, View } from "react-native";

interface CartSummaryProps {
  summary?: {
    subtotal?: number;
    shipping?: number;
    total?: number;
  };
  onCheckout: () => void;
}

export default function CartSummary({ summary, onCheckout }: CartSummaryProps) {
  //  SAFE FALLBACKS (prevents crashes)
  const subtotal = summary?.subtotal ?? 0;
  const shipping = summary?.shipping ?? 0;
  const total = summary?.total ?? 0;

  return (
    <View className="mx-6 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-4">
      {/* Title */}
      <Text className="text-base font-heading text-textPrimary dark:text-darkTextPrimary mb-3">
        Order Summary
      </Text>

      {/* Subtotal */}
      <View className="flex-row justify-between mb-2">
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
          Subtotal
        </Text>
        <Text className="text-sm font-body text-textPrimary dark:text-darkTextPrimary">
          Rs. {subtotal.toLocaleString()}
        </Text>
      </View>

      {/* Shipping */}
      <View className="flex-row justify-between mb-2">
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
          Shipping
        </Text>
        <Text className="text-sm font-body text-textPrimary dark:text-darkTextPrimary">
          Rs. {shipping.toLocaleString()}
        </Text>
      </View>

      {/* Divider */}
      <View className="border-b border-border dark:border-darkBorder my-3" />

      {/* Total */}
      <View className="flex-row justify-between mb-4">
        <Text className="text-base font-heading text-textPrimary dark:text-darkTextPrimary">
          Total
        </Text>
        <Text className="text-base font-heading text-primary">
          Rs. {total.toLocaleString()}
        </Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        onPress={onCheckout}
        className="bg-primary py-3 rounded-xl items-center"
      >
        <Text className="text-white font-heading">Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
