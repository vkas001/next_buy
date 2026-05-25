import { useWishlist } from "@/modules/shared/context/WishlistContext";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Image } from "react-native";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  condition: string;
  image: any;
  onPress?: () => void;
}

export default function ProductCard({
  id,
  name,
  price,
  condition,
  image,
  onPress,
}: ProductCardProps) {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const wishlisted = isWishlisted(id);

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
      {image ? (
        <Image
          source={image}
          style={{ width: "100%", height: 112 }}
          resizeMode="contain"
        />
      ) : (
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
      )}

      {/* Content */}
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

          <TouchableOpacity
            onPress={() =>
              toggleWishlist({
                id,
                name,
                price,
                condition,
              })
            }
          >
            <Ionicons
              name={wishlisted ? "heart" : "heart-outline"}
              size={18}
              color={wishlisted ? "#EF4444" : "#F97316"}
            />
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
