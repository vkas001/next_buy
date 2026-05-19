import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const allProducts = [
  // Electronics
  {
    id: "1",
    name: "iPhone 13 Pro",
    price: "Rs. 45,000",
    condition: "Good",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Sony Headphones",
    price: "Rs. 8,000",
    condition: "Good",
    category: "Electronics",
  },
  {
    id: "3",
    name: "MacBook Air M1",
    price: "Rs. 85,000",
    condition: "Like New",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Canon DSLR Camera",
    price: "Rs. 25,000",
    condition: "Good",
    category: "Electronics",
  },
  {
    id: "5",
    name: "Smart Watch",
    price: "Rs. 5,500",
    condition: "Fair",
    category: "Electronics",
  },

  // Fashion
  {
    id: "6",
    name: "Nike Air Max",
    price: "Rs. 3,500",
    condition: "Like New",
    category: "Fashion",
  },
  {
    id: "7",
    name: "Leather Jacket",
    price: "Rs. 2,800",
    condition: "Good",
    category: "Fashion",
  },
  {
    id: "8",
    name: "Levi's Jeans",
    price: "Rs. 1,800",
    condition: "Good",
    category: "Fashion",
  },
  {
    id: "9",
    name: "Adidas Hoodie",
    price: "Rs. 1,200",
    condition: "Like New",
    category: "Fashion",
  },

  // Furniture
  {
    id: "10",
    name: "Gaming Chair",
    price: "Rs. 12,000",
    condition: "Like New",
    category: "Furniture",
  },
  {
    id: "11",
    name: "Study Table",
    price: "Rs. 4,500",
    condition: "Good",
    category: "Furniture",
  },
  {
    id: "12",
    name: "Bookshelf",
    price: "Rs. 3,200",
    condition: "Good",
    category: "Furniture",
  },
  {
    id: "13",
    name: "Office Chair",
    price: "Rs. 6,000",
    condition: "Like New",
    category: "Furniture",
  },

  // Books
  {
    id: "14",
    name: "Harry Potter Set",
    price: "Rs. 1,500",
    condition: "Good",
    category: "Books",
  },
  {
    id: "15",
    name: "Rich Dad Poor Dad",
    price: "Rs. 300",
    condition: "Like New",
    category: "Books",
  },
  {
    id: "16",
    name: "Atomic Habits",
    price: "Rs. 400",
    condition: "Good",
    category: "Books",
  },
  {
    id: "17",
    name: "The Alchemist",
    price: "Rs. 250",
    condition: "Fair",
    category: "Books",
  },

  // Sports
  {
    id: "18",
    name: "Cricket Bat",
    price: "Rs. 2,000",
    condition: "Good",
    category: "Sports",
  },
  {
    id: "19",
    name: "Yoga Mat",
    price: "Rs. 800",
    condition: "Like New",
    category: "Sports",
  },
  {
    id: "20",
    name: "Football",
    price: "Rs. 600",
    condition: "Good",
    category: "Sports",
  },
  {
    id: "21",
    name: "Badminton Racket",
    price: "Rs. 1,200",
    condition: "Like New",
    category: "Sports",
  },
];

const recentSearches = ["iPhone", "Nike", "MacBook", "Chair"];

const filters = [
  { label: "All", icon: "grid-outline" },
  { label: "Electronics", icon: "phone-portrait-outline" },
  { label: "Fashion", icon: "shirt-outline" },
  { label: "Furniture", icon: "bed-outline" },
  { label: "Books", icon: "book-outline" },
  { label: "Sports", icon: "football-outline" },
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

  const handleFilterPress = (label: string) => {
    setActiveFilter(label);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Poppins_600SemiBold",
            color: "#F97316",
            marginBottom: 12,
          }}
        >
          Search
        </Text>

        {/* Search Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderColor: "#FED7AA",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}
        >
          <Ionicons name="search-outline" size={18} color="#F97316" />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 10,
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: "#1C1917",
            }}
            placeholder="Search products..."
            placeholderTextColor="#A8A29E"
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Ionicons name="close-circle" size={18} color="#F97316" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category Filters */}
      <View style={{ marginBottom: 12, marginTop: 12 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filters}
          keyExtractor={(item) => item.label}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleFilterPress(item.label)}
              style={{
                marginRight: 10,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 999,
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor:
                  activeFilter === item.label ? "#F97316" : "#FFFFFF",
                borderColor:
                  activeFilter === item.label ? "#F97316" : "#FED7AA",
              }}
            >
              <Ionicons
                name={item.icon as any}
                size={14}
                color={activeFilter === item.label ? "white" : "#F97316"}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_500Medium",
                  color: activeFilter === item.label ? "white" : "#78716C",
                }}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Divider */}
      <View
        style={{
          marginHorizontal: 24,
          borderBottomWidth: 1,
          borderBottomColor: "#FED7AA",
          marginBottom: 12,
        }}
      />

      {/* Recent Searches */}
      {query.length === 0 && activeFilter === "All" && (
        <View style={{ paddingHorizontal: 24, marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_500Medium",
              color: "#78716C",
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
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderColor: "#FED7AA",
                  borderRadius: 999,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}
              >
                <Ionicons name="time-outline" size={14} color="#F97316" />
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Inter_400Regular",
                    color: "#78716C",
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
              color: "#78716C",
            }}
          >
            {filteredProducts.length} results for "{query}"
          </Text>
        </View>
      )}

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        extraData={activeFilter}
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
            <Ionicons name="search-outline" size={48} color="#FED7AA" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
                marginTop: 16,
              }}
            >
              No results found
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_400Regular",
                color: "#A8A29E",
                marginTop: 4,
              }}
            >
              Try a different search term
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/product/${item.id}`)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#FED7AA",
              borderRadius: 16,
              padding: 12,
              marginBottom: 12,
            }}
          >
            {/* Image */}
            <View
              style={{
                width: 64,
                height: 64,
                backgroundColor: "#FFF7ED",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
                borderWidth: 1,
                borderColor: "#FED7AA",
              }}
            >
              <Ionicons name="image-outline" size={24} color="#FED7AA" />
            </View>

            {/* Info */}
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                  color: "#1C1917",
                  marginBottom: 4,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFF7ED",
                    borderRadius: 999,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderWidth: 1,
                    borderColor: "#FED7AA",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: "Inter_400Regular",
                      color: "#F97316",
                    }}
                  >
                    {item.category}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Inter_400Regular",
                    color: "#78716C",
                  }}
                >
                  {item.condition}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_600SemiBold",
                  color: "#F97316",
                }}
              >
                {item.price}
              </Text>
            </View>

            {/* Wishlist */}
            <TouchableOpacity style={{ padding: 8 }}>
              <Ionicons name="heart-outline" size={20} color="#F97316" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
