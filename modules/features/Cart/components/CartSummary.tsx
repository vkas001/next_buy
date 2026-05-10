import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { CartSummaryData } from "../types";

interface CartSummaryProps {
  summary: CartSummaryData;
  onCheckout: () => void;
}

export default function CartSummary({ summary, onCheckout }: CartSummaryProps) {
  return (
    <View className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-5 mx-6 mb-10">
      {/* Title */}
      <Text className="text-base font-heading text-textPrimary dark:text-darkTextPrimary mb-4">
        Order Summary
      </Text>

      {/* Subtotal */}
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
          Subtotal
        </Text>
        <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary">
          Rs. {summary.subtotal.toLocaleString()}
        </Text>
      </View>

      {/* Discount */}
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
          Discount
        </Text>
        <Text className="text-sm font-bodyMedium text-secondary">
          - Rs. {summary.discount.toLocaleString()}
        </Text>
      </View>

      {/* Delivery */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
          Delivery Fee
        </Text>
        <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary">
          Rs. {summary.deliveryFee.toLocaleString()}
        </Text>
      </View>

      {/* Divider */}
      <View className="border-t border-border dark:border-darkBorder mb-4" />

      {/* Total */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-base font-heading text-textPrimary dark:text-darkTextPrimary">
          Total
        </Text>
        <Text className="text-xl font-heading text-primary dark:text-darkPrimary">
          Rs. {summary.total.toLocaleString()}
        </Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        onPress={() => router.push("/checkout")}
        className="bg-primary dark:bg-darkPrimary rounded-2xl py-4 items-center"
      >
        <Text className="text-base font-bodyMedium text-white">
          Proceed to Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
