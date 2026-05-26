import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../components/ProductCard";

const allProducts = [
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: "Rs. 45,000",
    condition: "Good",
    category: "Electronics",
    image: require("@/assets/images/search/iphone13.webp"),
  },
  {
    id: "2",
    name: "Samsung Galaxy S21",
    price: "Rs. 35,000",
    condition: "Like New",
    category: "Electronics",
    image: require("@/assets/images/search/iphone13.webp"),
  },
  {
    id: "3",
    name: "Sony Headphones",
    price: "Rs. 8,000",
    condition: "Good",
    category: "Electronics",
    image: require("@/assets/images/search/sony.jpg"),
  },
  {
    id: "4",
    name: "MacBook Air M1",
    price: "Rs. 85,000",
    condition: "Like New",
    category: "Electronics",
    image: require("@/assets/images/search/macbook.png"),
  },
  {
    id: "5",
    name: "Nike Air Max",
    price: "Rs. 3,500",
    condition: "Like New",
    category: "Fashion",
    image: require("@/assets/images/search/nikey.jpg"),
  },
  {
    id: "6",
    name: "Leather Jacket",
    price: "Rs. 2,800",
    condition: "Good",
    category: "Fashion",
    image: require("@/assets/images/search/jacket.jpg"),
  },
  {
    id: "7",
    name: "Gaming Chair",
    price: "Rs. 12,000",
    condition: "Like New",
    category: "Furniture",
    image: require("@/assets/images/search/chair.jpg"),
  },
  {
    id: "8",
    name: "Study Table",
    price: "Rs. 4,500",
    condition: "Good",
    category: "Furniture",
    image: require("@/assets/images/search/table.jpg"),
  },
  {
    id: "9",
    name: "Canon DSLR Camera",
    price: "Rs. 25,000",
    condition: "Good",
    category: "Electronics",
    image: require("@/assets/images/search/dslr.jpg"),
  },
  {
    id: "10",
    name: "Guitar",
    price: "Rs. 7,000",
    condition: "Like New",
    category: "Music",
    image: require("@/assets/images/search/iphone13.webp"),
  },
  {
    id: "11",
    name: "Cricket Bat",
    price: "Rs. 2,000",
    condition: "Good",
    category: "Sports",
    image: require("@/assets/images/search/cricket.jpg"),
  },
  {
    id: "12",
    name: "Yoga Mat",
    price: "Rs. 800",
    condition: "Like New",
    category: "Sports",
    image: require("@/assets/images/search/mat.jpg"),
  },
];

const categoryIcons: Record<string, string> = {
  Electronics: "phone-portrait-outline",
  Fashion: "shirt-outline",
  Furniture: "bed-outline",
  Books: "book-outline",
  Sports: "football-outline",
  Beauty: "sparkles-outline",
  Music: "musical-notes-outline",
  Other: "grid-outline",
};

export default function CategoryScreen() {
  const { id, name } = useLocalSearchParams<{ id: string; name: string }>();

  const products = allProducts.filter(
    (p) => p.category.toLowerCase() === name?.toLowerCase(),
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#FED7AA",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1C1917" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: "#FFF7ED",
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "#FED7AA",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={(categoryIcons[name] as any) ?? "grid-outline"}
              size={18}
              color="#F97316"
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_600SemiBold",
              color: "#1C1917",
            }}
          >
            {name}
          </Text>
        </View>
        <Text
          style={{
            marginLeft: "auto",
            fontSize: 13,
            fontFamily: "Inter_400Regular",
            color: "#78716C",
          }}
        >
          {products.length} items
        </Text>
      </View>

      {/* Products Grid */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      >
        {products.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 80,
            }}
          >
            <Ionicons name="cube-outline" size={48} color="#FED7AA" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
                marginTop: 16,
              }}
            >
              No products in this category yet
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                condition={product.condition}
                image={product.image}
                onPress={() => router.push(`/product/${product.id}`)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
