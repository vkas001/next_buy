import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Dummy data - will be replaced by backend API later
const allProducts = [
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: "Rs. 45,000",
    condition: "Good",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "Rs. 3,500",
    condition: "Like New",
    category: "Fashion",
  },
  {
    id: "3",
    name: "Sony Headphones",
    price: "Rs. 8,000",
    condition: "Good",
    category: "Electronics",
  },
  {
    id: "4",
    name: "MacBook Air M1",
    price: "Rs. 85,000",
    condition: "Like New",
    category: "Electronics",
  },
  {
    id: "5",
    name: "Canon DSLR Camera",
    price: "Rs. 25,000",
    condition: "Good",
    category: "Electronics",
  },
  {
    id: "6",
    name: "Gaming Chair",
    price: "Rs. 12,000",
    condition: "Like New",
    category: "Furniture",
  },
  {
    id: "7",
    name: "Smart Watch",
    price: "Rs. 5,500",
    condition: "Fair",
    category: "Electronics",
  },
  {
    id: "8",
    name: "Leather Jacket",
    price: "Rs. 2,800",
    condition: "Good",
    category: "Fashion",
  },
  {
    id: "9",
    name: "Study Table",
    price: "Rs. 4,500",
    condition: "Good",
    category: "Furniture",
  },
  {
    id: "10",
    name: "Guitar",
    price: "Rs. 7,000",
    condition: "Like New",
    category: "Music",
  },
];

const recentSearches = ["iPhone", "Nike", "MacBook", "Chair"];
const filters = [
  "All",
  "Electronics",
  "Fashion",
  "Furniture",
  "Books",
  "Sports",
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = allProducts.filter((product) => {
    const matchesQuery = product.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || product.category === activeFilter;
    return matchesQuery && matchesFilter;
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 8,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Poppins_600SemiBold",
            color: "#44D1F4",
            marginBottom: 1,
          }}
        >
          Search
        </Text>

        {/* Search Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1E293B",
            borderWidth: 1,
            borderColor: "#334155",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 2,
          }}
        >
          <Ionicons name="search-outline" size={18} color="#64748B" />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 10,
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: "#F8FAFC",
            }}
            placeholder="Search products..."
            placeholderTextColor="#64748B"
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Ionicons name="close-circle" size={18} color="#64748B" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category Filters */}
      <View style={{ marginBottom: 16, marginTop: 12 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filters}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setActiveFilter(item)}
              style={{
                marginRight: 8,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 999,
                borderWidth: 1,
                backgroundColor: activeFilter === item ? "#2563EB" : "#1E293B",
                borderColor: activeFilter === item ? "#2563EB" : "#334155",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_500Medium",
                  color: activeFilter === item ? "white" : "#64748B",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Recent Searches */}
      {query.length === 0 && (
        <View style={{ paddingHorizontal: 24, marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_500Medium",
              color: "#64748B",
              marginBottom: 12,
            }}
          >
            Recent Searches
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {recentSearches.map((search) => (
              <TouchableOpacity
                key={search}
                onPress={() => setQuery(search)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#1E293B",
                  borderWidth: 1,
                  borderColor: "#334155",
                  borderRadius: 999,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}
              >
                <Ionicons name="time-outline" size={14} color="#64748B" />
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Inter_400Regular",
                    color: "#64748B",
                    marginLeft: 6,
                  }}
                >
                  {search}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Results count */}
      {query.length > 0 && (
        <View style={{ paddingHorizontal: 24, marginBottom: 8 }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: "#64748B",
            }}
          >
            {filteredProducts.length} results for "{query}"
          </Text>
        </View>
      )}

      {/* Product List */}
      <FlatList
        data={query.length > 0 ? filteredProducts : allProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
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
            <TouchableOpacity style={{ padding: 8 }}>
              <Ionicons name="heart-outline" size={20} color="#64748B" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
