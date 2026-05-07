import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import FeaturedCard from "../components/FeaturedCard";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

// Dummy Data - will be replaced by backend API later

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
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      className="flex-1 bg-background dark:bg-darkBackground"
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-4 pb-4">
          <View>
            <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
              NAMASTE 👋
            </Text>
            <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
              Find Great Deals
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            {/* Notifications */}
            <TouchableOpacity className="w-10 h-10 bg-card dark:bg-darkCard rounded-full items-center justify-center border border-border dark:border-darkBorder">
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#64748B"
              />
            </TouchableOpacity>

            {/* Avatar */}
            <TouchableOpacity className="w-10 h-10 bg-primary rounded-full items-center justify-center">
              <Text className="text-white font-bodyMedium text-sm">JD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="px-6 mb-6">
          <SearchBar placeholder="Search products..." />
        </View>

        {/* Promo Banner */}
        <View className="px-6 mb-6">
          <Banner
            tag="LIMITED TIME OFFER"
            title="Up to 50% Off"
            subtitle="On second-hand electronics"
          />
        </View>

        {/* Categories */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between px-6 mb-3">
            <Text className="text-base font-heading text-textPrimary dark:text-darkTextPrimary">
              Categories
            </Text>
            <TouchableOpacity>
              <Text className="text-sm font-body text-primary dark:text-darkPrimary">
                See all
              </Text>
            </TouchableOpacity>
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
        <View className="mb-6">
          <View className="flex-row items-center justify-between px-6 mb-3">
            <Text className="text-base font-heading text-textPrimary dark:text-darkTextPrimary">
              Featured Deals
            </Text>
            <TouchableOpacity>
              <Text className="text-sm font-body text-primary dark:text-darkPrimary">
                See all
              </Text>
            </TouchableOpacity>
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
              />
            ))}
          </ScrollView>
        </View>

        {/* Recent Listings */}
        <View className="px-6 mb-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-base font-heading text-textPrimary dark:text-darkTextPrimary">
              Recent Listings
            </Text>
            <TouchableOpacity>
              <Text className="text-sm font-body text-primary dark:text-darkPrimary">
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {recentProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                condition={product.condition}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Sell Button */}
      <TouchableOpacity className="absolute bottom-6 right-6 bg-secondary rounded-full w-14 h-14 items-center justify-center shadow-lg">
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
