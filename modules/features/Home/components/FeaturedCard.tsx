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
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FED7AA",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Image Placeholder */}
      <View
        style={{
          width: "100%",
          height: 128,
          backgroundColor: "#FFF7ED",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="image-outline" size={40} color="#FED7AA" />
      </View>

      {/* Info */}
      <View style={{ padding: 12 }}>
        {/* Discount Badge */}
        <View
          style={{
            alignSelf: "flex-start",
            backgroundColor: "#F97316",
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
            color: "#1C1917",
            marginBottom: 4,
          }}
        >
          {name}
        </Text>

        {/* Condition */}
        <Text
          style={{
            fontSize: 11,
            color: "#78716C",
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
            color: "#F97316",
          }}
        >
          {price}
        </Text>

        {/* Original Price */}
        <Text
          style={{
            fontSize: 11,
            color: "#A8A29E",
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
