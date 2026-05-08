import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface Product {
  id: string;
  name: string;
  price: string;
  condition: string;
  category: string;
}

interface SearchResultsProps {
  products: Product[];
  query: string;
  onWishlist?: (id: string) => void;
  onPress?: (id: string) => void;
}

export default function SearchResults({
  products,
  query,
  onWishlist,
  onPress,
}: SearchResultsProps) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        query.length > 0 ? (
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: "#64748B",
              marginBottom: 12,
            }}
          >
            {products.length} results for "{query}"
          </Text>
        ) : null
      }
      ListEmptyComponent={
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 80,
          }}
        >
          <Ionicons name="search-outline" size={48} color="#64748B" />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_400Regular",
              color: "#64748B",
              marginTop: 16,
            }}
          >
            No results found
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: "#64748B",
              marginTop: 4,
            }}
          >
            Try a different search term
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onPress?.(item.id)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1E293B",
            borderWidth: 1,
            borderColor: "#334155",
            borderRadius: 16,
            padding: 12,
            marginBottom: 12,
          }}
        >
          {/* Image Placeholder */}
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: "#334155",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Ionicons name="image-outline" size={24} color="#64748B" />
          </View>

          {/* Product Info */}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: "#F8FAFC",
                marginBottom: 4,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: "#64748B",
                marginBottom: 4,
              }}
            >
              {item.condition} • {item.category}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_600SemiBold",
                color: "#2563EB",
              }}
            >
              {item.price}
            </Text>
          </View>

          {/* Wishlist */}
          <TouchableOpacity
            onPress={() => onWishlist?.(item.id)}
            style={{ padding: 8 }}
          >
            <Ionicons name="heart-outline" size={20} color="#64748B" />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    />
  );
}
