import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function EmptyCart() {
  return (
    <View className="flex-1 items-center justify-center px-6">
      {/* Icon */}
      <View className="w-24 h-24 bg-card dark:bg-darkCard rounded-full items-center justify-center mb-6">
        <Ionicons name="cart-outline" size={48} color="#2563EB" />
      </View>

      {/* Text */}
      <Text className="text-2xl font-heading text-textPrimary dark:text-darkTextPrimary mb-2">
        Your cart is empty
      </Text>
      <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary text-center mb-8">
        Looks like you haven't added anything yet. Start exploring great deals!
      </Text>

      {/* Browse Button */}
      <TouchableOpacity
        onPress={() => router.push("/(tabs)")}
        className="bg-primary dark:bg-darkPrimary rounded-2xl px-8 py-4"
      >
        <Text className="text-base font-bodyMedium text-white">
          Browse Products
        </Text>
      </TouchableOpacity>
    </View>
  );
}
