import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps {
  name: string;
  price: string;
  condition: string;
  onPress?: () => void;
  onWishlist?: () => void;
}

export default function ProductCard({
  name,
  price,
  condition,
  onPress,
  onWishlist,
}: ProductCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl overflow-hidden mb-4"
      style={{ width: "48%" }}
    >
      {/* Product Image Placeholder */}
      <View className="w-full h-28 bg-darkBorder items-center justify-center">
        <Ionicons name="image-outline" size={32} color="#64748B" />
      </View>

      {/* Product Info */}
      <View className="p-3">
        {/* Product Name */}
        <Text
          numberOfLines={1}
          className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1"
        >
          {name}
        </Text>

        {/* Price and Wishlist */}
        <View className="flex-row items-center justify-between">
          {/* Price */}
          <Text className="text-base font-heading text-primary dark:text-darkPrimary">
            {price}
          </Text>

          {/* Wishlist Button */}
          <TouchableOpacity onPress={onWishlist}>
            <Ionicons name="heart-outline" size={18} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Condition */}
        <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary mt-1">
          {condition}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
