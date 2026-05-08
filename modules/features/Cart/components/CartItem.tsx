import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { CartItem as CartItemType } from "../types";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
}

export default function CartItem({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}: CartItemProps) {
  const { product, quantity } = item;
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <View className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-4 mb-3">
      <View className="flex-row">
        {/* Product Image */}
        <View className="w-20 h-20 bg-darkBorder rounded-xl items-center justify-center mr-4">
          <Ionicons name="image-outline" size={32} color="#64748B" />
        </View>

        {/* Product Info */}
        <View className="flex-1">
          {/* Name + Remove */}
          <View className="flex-row items-start justify-between mb-1">
            <Text
              numberOfLines={2}
              className="flex-1 text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mr-2"
            >
              {product.name}
            </Text>
            <TouchableOpacity onPress={() => onRemove(item.id)}>
              <Ionicons name="close-circle" size={20} color="#64748B" />
            </TouchableOpacity>
          </View>

          {/* Condition + Category */}
          <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary mb-1">
            {product.condition} • {product.category}
          </Text>

          {/* Seller */}
          <View className="flex-row items-center mb-3">
            <Ionicons name="person-outline" size={12} color="#64748B" />
            <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary ml-1">
              {product.seller}
            </Text>
          </View>

          {/* Price + Quantity Controls */}
          <View className="flex-row items-center justify-between">
            {/* Price */}
            <View>
              <Text className="text-base font-heading text-primary dark:text-darkPrimary">
                Rs. {product.price.toLocaleString()}
              </Text>
              {product.originalPrice && (
                <View className="flex-row items-center gap-2">
                  <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </Text>
                  <View className="bg-secondary rounded-full px-1.5 py-0.5">
                    <Text className="text-white text-xs font-bodyMedium">
                      -{discount}%
                    </Text>
                  </View>
                </View>
              )}
            </View>

            {/* Quantity Controls */}
            <View className="flex-row items-center bg-background dark:bg-darkBackground border border-border dark:border-darkBorder rounded-xl overflow-hidden">
              <TouchableOpacity
                onPress={() => onDecrease(item.id)}
                className="w-8 h-8 items-center justify-center"
              >
                <Ionicons name="remove" size={16} color="#64748B" />
              </TouchableOpacity>
              <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary px-3">
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => onIncrease(item.id)}
                className="w-8 h-8 items-center justify-center"
              >
                <Ionicons name="add" size={16} color="#64748B" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
