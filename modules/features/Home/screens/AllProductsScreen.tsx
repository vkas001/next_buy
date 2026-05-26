import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeaturedCard from "../components/FeaturedCard";
import ProductCard from "../components/ProductCard";

const recentProducts = [
  {
    id: "1",
    name: "Canon DSLR Camera",
    price: "Rs. 25,000",
    condition: "Good",
    image: require("@/assets/images/search/dslr.jpg"),
  },
  {
    id: "2",
    name: "Gaming Chair",
    price: "Rs. 12,000",
    condition: "Like New",
    image: require("@/assets/images/search/chair.jpg")
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "Rs. 5,500",
    condition: "Fair",
    image: require("@/assets/images/search/watch.jpg")
  },
  {
    id: "4",
    name: "Leather Jacket",
    price: "Rs. 2,800",
    condition: "Good",
    image: require("@/assets/images/search/jacket.jpg")
  },
  {
    id: "5",
    name: "Study Table",
    price: "Rs. 4,500",
    condition: "Good",
    image: require("@/assets/images/search/table.jpg")
  },
  {
    id: "6",
    name: "Guitar",
    price: "Rs. 7,000",
    condition: "Like New",
    image: require("@/assets/images/search/iphone13.webp")
  },
];

const featuredProducts = [
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: "Rs. 45,000",
    originalPrice: "Rs. 60,000",
    condition: "Good",
    discount: "25%",
    image: require("@/assets/images/search/iphone13.webp"),
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "Rs. 3,500",
    originalPrice: "Rs. 6,000",
    condition: "Like New",
    discount: "42%",
    image: require("@/assets/images/search/nikey.jpg"),
  },
  {
    id: "3",
    name: "Sony Headphones",
    price: "Rs. 8,000",
    originalPrice: "Rs. 12,000",
    condition: "Good",
    discount: "33%",
    image: require("@/assets/images/search/sony.jpg"),
  },
  {
    id: "4",
    name: "MacBook Air M1",
    price: "Rs. 85,000",
    originalPrice: "Rs. 110,000",
    condition: "Like New",
    discount: "23%",
    image: require("@/assets/images/search/macbook.png"),
  },
];

export default function AllProductsScreen() {
  const { type } = useLocalSearchParams<{ type: string }>();

  const isFeatured = type === "featured";
  const title = isFeatured ? "Featured Deals" : "Recent Listings";
  const itemCount = isFeatured ? featuredProducts.length : recentProducts.length;

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
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_600SemiBold",
            color: "#1C1917",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            marginLeft: "auto",
            fontSize: 13,
            fontFamily: "Inter_400Regular",
            color: "#78716C",
          }}
        >
          {itemCount} items
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      >
        {isFeatured ? (
          // Featured — 2 column grid using FeaturedCard
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            {featuredProducts.map((product) => (
              <FeaturedCard
                key={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                condition={product.condition}
                discount={product.discount}
                image={product.image}
                onPress={() => router.push(`/product/${product.id}`)}
              />
            ))}
          </View>
        ) : (
          // Recent — 2 column grid using ProductCard
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {recentProducts.map((product) => (
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
