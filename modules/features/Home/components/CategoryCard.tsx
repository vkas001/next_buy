import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface CategoryCardProps {
  name: string;
  icon: string;
  onPress?: () => void;
}

export default function CategoryCard({
  name,
  icon,
  onPress,
}: CategoryCardProps) {
  return (
    <TouchableOpacity onPress={onPress} className="items-center mr-4">
      {/* Icon Box */}
      <View className="w-14 h-14 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl items-center justify-center mb-2">
        <Ionicons name={icon as any} size={24} color="#2563EB" />
      </View>

      {/* Label */}
      <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
