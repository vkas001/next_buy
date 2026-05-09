import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
  condition: string;
  category: string;
  location: string;
  postedDate: string;
  views: number;
  description: string;
  tags: string[];
}

export default function ProductInfo({
  name,
  price,
  originalPrice,
  condition,
  category,
  location,
  postedDate,
  views,
  description,
  tags,
}: ProductInfoProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <View className="px-6 py-4">
      {/* Category + Condition */}
      <View className="flex-row items-center gap-2 mb-3">
        <View className="bg-primary rounded-full px-3 py-1">
          <Text className="text-white text-xs font-bodyMedium">{category}</Text>
        </View>
        <View className="bg-secondary rounded-full px-3 py-1">
          <Text className="text-white text-xs font-bodyMedium">
            {condition}
          </Text>
        </View>
      </View>

      {/* Product Name */}
      <Text className="text-2xl font-heading text-textPrimary dark:text-darkTextPrimary mb-3">
        {name}
      </Text>

      {/* Price */}
      <View className="flex-row items-center gap-3 mb-4">
        <Text className="text-3xl font-heading text-primary dark:text-darkPrimary">
          Rs. {price.toLocaleString()}
        </Text>
        {originalPrice && (
          <View className="flex-row items-center gap-2">
            <Text className="text-base font-body text-textSecondary dark:text-darkTextSecondary line-through">
              Rs. {originalPrice.toLocaleString()}
            </Text>
            <View className="bg-red-500 rounded-full px-2 py-0.5">
              <Text className="text-white text-xs font-bodyMedium">
                -{discount}%
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Meta Info */}
      <View className="flex-row items-center gap-4 mb-4">
        <View className="flex-row items-center gap-1">
          <Ionicons name="location-outline" size={14} color="#64748B" />
          <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
            {location}
          </Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Ionicons name="time-outline" size={14} color="#64748B" />
          <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
            {postedDate}
          </Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Ionicons name="eye-outline" size={14} color="#64748B" />
          <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
            {views} views
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View className="border-t border-border dark:border-darkBorder mb-4" />

      {/* Description */}
      <Text className="text-base font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-2">
        Description
      </Text>
      <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary leading-6 mb-4">
        {description}
      </Text>

      {/* Tags */}
      {tags.length > 0 && (
        <View className="flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <View
              key={tag}
              className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full px-3 py-1"
            >
              <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
                #{tag}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
