import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface FeaturedCardProps {
  name: string;
  price: string;
  originalPrice: string;
  condition: string;
  discount: string;
  onPress?: () => void;
}

export default function FeaturedCard({
  name,
  price,
  originalPrice,
  condition,
  discount,
  onPress,
}: FeaturedCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mr-4 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl overflow-hidden"
      style={{ width: 160 }}
    >
      {/* Product Image Placeholder */}
      <View className="w-full h-32 bg-darkBorder items-center justify-center">
        <Ionicons name="image-outline" size={40} color="#64748B" />
      </View>

      {/* Product Info */}
      <View className="p-3">
        {/* Discount Badge */}
        <View className="self-start bg-secondary rounded-full px-2 py-0.5 mb-2">
          <Text className="text-white text-xs font-bodyMedium">
            -{discount}
          </Text>
        </View>

        {/* Product Name */}
        <Text
          numberOfLines={1}
          className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1"
        >
          {name}
        </Text>

        {/* Condition */}
        <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary mb-1">
          {condition}
        </Text>

        {/* Price */}
        <Text className="text-base font-heading text-primary dark:text-darkPrimary">
          {price}
        </Text>

        {/* Original Price */}
        <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary line-through">
          {originalPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
