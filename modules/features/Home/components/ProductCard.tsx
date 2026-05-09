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
      style={{
        width: "48%",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FED7AA",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 16,
      }}
    >
      {/* Image Placeholder */}
      <View
        style={{
          width: "100%",
          height: 112,
          backgroundColor: "#FFF7ED",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="image-outline" size={32} color="#FED7AA" />
      </View>

      {/* Info */}
      <View style={{ padding: 12 }}>
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

        {/* Price + Wishlist */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_600SemiBold",
              color: "#F97316",
            }}
          >
            {price}
          </Text>
          <TouchableOpacity onPress={onWishlist}>
            <Ionicons name="heart-outline" size={18} color="#F97316" />
          </TouchableOpacity>
        </View>

        {/* Condition */}
        <Text
          style={{
            fontSize: 11,
            color: "#78716C",
            fontFamily: "Inter_400Regular",
            marginTop: 4,
          }}
        >
          {condition}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
