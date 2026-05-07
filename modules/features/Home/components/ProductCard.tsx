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
        backgroundColor: "#1E293B",
        borderWidth: 1,
        borderColor: "#334155",
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
          backgroundColor: "#334155",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="image-outline" size={32} color="#64748B" />
      </View>

      {/* Info */}
      <View style={{ padding: 12 }}>
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
              color: "#2563EB",
            }}
          >
            {price}
          </Text>
          <TouchableOpacity onPress={onWishlist}>
            <Ionicons name="heart-outline" size={18} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Condition */}
        <Text
          style={{
            fontSize: 11,
            color: "#64748B",
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
