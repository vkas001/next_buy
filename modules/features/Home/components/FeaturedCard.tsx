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
      style={{
        width: 160,
        marginRight: 16,
        backgroundColor: "#1E293B",
        borderWidth: 1,
        borderColor: "#334155",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Image Placeholder */}
      <View
        style={{
          width: "100%",
          height: 128,
          backgroundColor: "#334155",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="image-outline" size={40} color="#64748B" />
      </View>

      {/* Info */}
      <View style={{ padding: 12 }}>
        {/* Discount Badge */}
        <View
          style={{
            alignSelf: "flex-start",
            backgroundColor: "#10B981",
            borderRadius: 999,
            paddingHorizontal: 8,
            paddingVertical: 2,
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 11,
              fontFamily: "Inter_500Medium",
            }}
          >
            -{discount}
          </Text>
        </View>

        {/* Name */}
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            color: "#F8FAFC",
            marginBottom: 4,
          }}
        >
          {name}
        </Text>

        {/* Condition */}
        <Text
          style={{
            fontSize: 11,
            color: "#64748B",
            fontFamily: "Inter_400Regular",
            marginBottom: 4,
          }}
        >
          {condition}
        </Text>

        {/* Price */}
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            color: "#2563EB",
          }}
        >
          {price}
        </Text>

        {/* Original Price */}
        <Text
          style={{
            fontSize: 11,
            color: "#64748B",
            fontFamily: "Inter_400Regular",
            textDecorationLine: "line-through",
          }}
        >
          {originalPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
