import { Text, TouchableOpacity, View } from "react-native";

interface BannerProps {
  title?: string;
  subtitle?: string;
  tag?: string;
  onPress?: () => void;
}

export default function Banner({
  title = "Up to 50% Off",
  subtitle = "On second-hand electronics",
  tag = "LIMITED TIME OFFER",
  onPress,
}: BannerProps) {
  return (
    <View className="bg-primary rounded-3xl p-5 flex-row items-center justify-between">
      {/* Left Content */}
      <View className="flex-1">
        {/* Tag */}
        <Text className="text-xs font-bodyMedium text-white opacity-80 mb-1">
          {tag}
        </Text>

        {/* Title */}
        <Text className="text-2xl font-heading text-white mb-1">{title}</Text>

        {/* Subtitle */}
        <Text className="text-xs font-body text-white opacity-70 mb-3">
          {subtitle}
        </Text>

        {/* Button */}
        <TouchableOpacity
          onPress={onPress}
          className="self-start bg-white rounded-xl px-4 py-2"
        >
          <Text className="text-primary text-xs font-bodyMedium">Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Decorative Circle */}
      <View className="w-20 h-20 bg-white opacity-20 rounded-full" />
    </View>
  );
}
