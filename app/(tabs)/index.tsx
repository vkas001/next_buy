import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    image: "https://via.placeholder.com/150",
    discount: "25%",
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "Rs. 3,500",
    originalPrice: "Rs. 6,000",
    condition: "Like New",
    image: "https://via.placeholder.com/150",
    discount: "42%",
  },
  {
    id: "3",
    name: "Sony Headphones",
    price: "Rs. 8,000",
    originalPrice: "Rs. 12,000",
    condition: "Good",
    image: "https://via.placeholder.com/150",
    discount: "33%",
  },
  {
    id: "4",
    name: "MacBook Air M1",
    price: "Rs. 85,000",
    originalPrice: "Rs. 110,000",
    condition: "Like New",
    image: "https://via.placeholder.com/150",
    discount: "23%",
  },
];

const recentProducts = [
  {
    id: "1",
    name: "Canon DSLR Camera",
    price: "Rs. 25,000",
    condition: "Good",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Gaming Chair",
    price: "Rs. 12,000",
    condition: "Like New",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "Rs. 5,500",
    condition: "Fair",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Leather Jacket",
    price: "Rs. 2,800",
    condition: "Good",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Study Table",
    price: "Rs. 4,500",
    condition: "Good",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    name: "Guitar",
    price: "Rs. 7,000",
    condition: "Like New",
    image: "https://via.placeholder.com/150",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      className="flex-1 bg-background dark:bg-darkBackground"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-4 pb-4">
          <View>
            <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
              NAMASTE
            </Text>
            <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
              Find Great Deals
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="w-10 h-10 bg-card dark:bg-darkCard rounded-full items-center justify-center border border-border dark:border-darkBorder">
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#64748B"
              />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 bg-primary rounded-full items-center justify-center">
              <Text className="text-white font-bodyMedium text-sm">JD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search bar */}
        <View className="px-6 mb-6">
          <View className="flex-row items-center bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl px-4 ">
            <Ionicons name="search-outline" size={18} color="#64748B" />
            <TextInput
              className="flex-1 ml-3 text-base font-body text-textPrimary dark:text-darkTextPrimary"
              placeholder="Search products..."
              placeholderTextColor="#64748B"
            />
            <TouchableOpacity className="bg-primary rounded-xl px-3 py-1">
              <Text className="text-white text-xs font-bodyMedium">Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner */}
        <View className="mx-6 mb-6 bg-primary rounded-3xl p-5 flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-xs font-bodyMedium text-white opacity-80 mb-1">
              LIMITED TIME OFFER
            </Text>
            <Text className="text-2xl font-heading text-white mb-1">
              Up to 50% Off
            </Text>
            <Text className="text-xs font-body text-white opacity-70 mb-3">
              On second-hand electronics
            </Text>
            <TouchableOpacity className="self-start bg-white rounded-xl px-4 py-2">
              <Text className="text-primary text-xs font-bodyMedium">
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-20 h-20 bg-white opacity-20 rounded-full" />
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
            className="px-6"
          >
            {categories.map((cat) => (
              <TouchableOpacity key={cat.id} className="items-center mr-4">
                <View className="w-14 h-14 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl items-center justify-center mb-2">
                  <Ionicons name={cat.icon as any} size={24} color="#2563EB" />
                </View>
                <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
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
            className="px-6"
          >
            {featuredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                className="mr-4 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl overflow-hidden"
                style={{ width: 160 }}
              >
                <View className="w-full h-32 bg-darkBorder items-center justify-center">
                  <Ionicons name="image-outline" size={40} color="#64748B" />
                </View>
                <View className="p-3">
                  <View className="self-start bg-secondary rounded-full px-2 py-0.5 mb-2">
                    <Text className="text-white text-xs font-bodyMedium">
                      -{product.discount}
                    </Text>
                  </View>
                  <Text
                    className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1"
                    numberOfLines={1}
                  >
                    {product.name}
                  </Text>
                  <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary mb-1">
                    {product.condition}
                  </Text>
                  <Text className="text-base font-heading text-primary dark:text-darkPrimary">
                    {product.price}
                  </Text>
                  <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary line-through">
                    {product.originalPrice}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Listings grid */}
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
              <TouchableOpacity
                key={product.id}
                className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl overflow-hidden mb-4"
                style={{ width: "48%" }}
              >
                <View className="w-full h-28 bg-darkBorder items-center justify-center">
                  <Ionicons name="image-outline" size={32} color="#64748B" />
                </View>
                <View className="p-3">
                  <Text
                    className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1"
                    numberOfLines={1}
                  >
                    {product.name}
                  </Text>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-base font-heading text-primary dark:text-darkPrimary">
                      {product.price}
                    </Text>
                    <TouchableOpacity>
                      <Ionicons
                        name="heart-outline"
                        size={18}
                        color="#64748B"
                      />
                    </TouchableOpacity>
                  </View>
                  <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary mt-1">
                    {product.condition}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating sell button */}
      <TouchableOpacity className="absolute bottom-6 right-6 bg-secondary rounded-full w-14 h-14 items-center justify-center shadow-lg">
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
