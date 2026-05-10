import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface ProductActionsProps {
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export default function ProductActions({
  onAddToCart,
  onBuyNow,
}: ProductActionsProps) {
  return (
    <View
      className="px-6 py-4 bg-background dark:bg-darkBackground border-t border-border dark:border-darkBorder flex-row gap-3"
      style={{ paddingBottom: 32 }}
    >
      {/* Add to Cart */}
      <TouchableOpacity
        onPress={onAddToCart}
        className="flex-1 flex-row items-center justify-center gap-2 border border-primary dark:border-darkPrimary rounded-2xl py-4"
      >
        <Ionicons name="cart-outline" size={20} color="#2563EB" />
        <Text className="text-base font-bodyMedium text-primary dark:text-darkPrimary">
          Add to Cart
        </Text>
      </TouchableOpacity>

      {/* Buy Now */}
      <TouchableOpacity
        onPress={onBuyNow}
        className="flex-1 flex-row items-center justify-center gap-2 bg-primary dark:bg-darkPrimary rounded-2xl py-4"
      >
        <Ionicons name="flash-outline" size={20} color="white" />
        <Text className="text-base font-bodyMedium text-white">Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}
