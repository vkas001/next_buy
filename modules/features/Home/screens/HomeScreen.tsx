import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LoadingScreen from "@/modules/shared/components/LoadingScreen";
import SectionHeader from "@/modules/shared/components/SectionHeader";
import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import FeaturedCard from "../components/FeaturedCard";
import HomeHeader from "../components/HomeHeader";
import ProductCard from "../components/ProductCard";
import { useHomeScreen } from "../hooks/useHomeScreen";
import { useScreenRefresh } from "../hooks/useScreenRefresh";

// Dummy data - will be replaced by backend API later
const categories = [
  { id: "1", name: "Electronics", icon: "phone-portrait-outline" },
  { id: "2", name: "Fashion", icon: "shirt-outline" },
  { id: "3", name: "Furniture", icon: "bed-outline" },
  { id: "4", name: "Books", icon: "book-outline" },
  { id: "5", name: "Sports", icon: "football-outline" },
  { id: "6", name: "Beauty", icon: "sparkles-outline" },
];

const featuredProducts = [
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: "Rs. 45,000",
    originalPrice: "Rs. 60,000",
    condition: "Good",
    discount: "25%",
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "Rs. 3,500",
    originalPrice: "Rs. 6,000",
    condition: "Like New",
    discount: "42%",
  },
  {
    id: "3",
    name: "Sony Headphones",
    price: "Rs. 8,000",
    originalPrice: "Rs. 12,000",
    condition: "Good",
    discount: "33%",
  },
  {
    id: "4",
    name: "MacBook Air M1",
    price: "Rs. 85,000",
    originalPrice: "Rs. 110,000",
    condition: "Like New",
    discount: "23%",
  },
];

const recentProducts = [
  {
    id: "1",
    name: "Canon DSLR Camera",
    price: "Rs. 25,000",
    condition: "Good",
  },
  { id: "2", name: "Gaming Chair", price: "Rs. 12,000", condition: "Like New" },
  { id: "3", name: "Smart Watch", price: "Rs. 5,500", condition: "Fair" },
  { id: "4", name: "Leather Jacket", price: "Rs. 2,800", condition: "Good" },
  { id: "5", name: "Study Table", price: "Rs. 4,500", condition: "Good" },
  { id: "6", name: "Guitar", price: "Rs. 7,000", condition: "Like New" },
];

export default function HomeScreen() {
  const { isLoading, refetchAll } = useHomeScreen();
  const { refreshing, onRefresh } = useScreenRefresh(async () => {
    await refetchAll();
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      {/* Header */}
      <HomeHeader />

      {/* Divider */}
      <View
        style={{
          marginHorizontal: 24,
          borderBottomWidth: 1,
          borderBottomColor: "#FED7AA",
          marginBottom: 8,
        }}
      />

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#F97316"
            colors={["#F97316"]}
          />
        }
      >
        {/* Promo Banner */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24, marginTop: 8 }}>
          <Banner
            tag="LIMITED TIME OFFER"
            title="Up to 50% Off"
            subtitle="On second-hand electronics"
          />
        </View>

        {/* Categories */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <SectionHeader title="Categories" />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {categories.map((cat) => (
              <CategoryCard key={cat.id} name={cat.name} icon={cat.icon} />
            ))}
          </ScrollView>
        </View>

        {/* Featured Deals */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <SectionHeader title="Featured Deals" />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {featuredProducts.map((product) => (
              <FeaturedCard
                key={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                condition={product.condition}
                discount={product.discount}
                onPress={() => router.push(`/product/${product.id}`)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Recent Listings */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <SectionHeader title="Recent Listings" />
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
                name={product.name}
                price={product.price}
                condition={product.condition}
                onPress={() => router.push(`/product/${product.id}`)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Sell Button */}
      <TouchableOpacity
        onPress={() => router.push("/sell")}
        style={{
          position: "absolute",
          bottom: 80,
          right: 24,
          width: 56,
          height: 56,
          backgroundColor: "#F97316",
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>

      {/* Loading Overlay */}
      {isLoading && !refreshing && <LoadingScreen />}
    </SafeAreaView>
  );
}
