import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

interface ProductImagesProps {
  images: string[];
  onBack: () => void;
  onWishlist: () => void;
  isWishlisted: boolean;
}

export default function ProductImages({
  images,
  onBack,
  onWishlist,
  isWishlisted,
}: ProductImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="bg-card dark:bg-darkCard" style={{ height: 320 }}>
      {/* Main Image Placeholder */}
      <View className="flex-1 items-center justify-center bg-darkBorder">
        <Ionicons name="image-outline" size={64} color="#64748B" />
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary mt-2">
          {activeIndex + 1} / {images.length}
        </Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        onPress={onBack}
        className="absolute top-4 left-4 w-10 h-10 bg-background dark:bg-darkBackground rounded-full items-center justify-center"
        style={{ opacity: 0.9 }}
      >
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>

      {/* Wishlist Button */}
      <TouchableOpacity
        onPress={onWishlist}
        className="absolute top-4 right-4 w-10 h-10 bg-background dark:bg-darkBackground rounded-full items-center justify-center"
        style={{ opacity: 0.9 }}
      >
        <Ionicons
          name={isWishlisted ? "heart" : "heart-outline"}
          size={20}
          color={isWishlisted ? "#EF4444" : ""}
        />
      </TouchableOpacity>

      {/* Dot Indicators */}
      <View className="absolute bottom-4 left-0 right-0 flex-row justify-center items-center gap-2">
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveIndex(index)}
            style={{
              width: activeIndex === index ? 20 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: activeIndex === index ? "#2563EB" : "#64748B",
            }}
          />
        ))}
      </View>
    </View>
  );
}
