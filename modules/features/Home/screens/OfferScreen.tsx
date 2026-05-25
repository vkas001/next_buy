import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeaturedCard from "../components/FeaturedCard";

// Dummy offer products - backend will replace with API
const offerProducts = [
  {
    id: "1",
    name: "Canon DSLR Camera",
    price: "Rs. 25,000",
    originalPrice: "Rs. 35,000",
    condition: "Good",
    discount: "29%",
    image: require("@/assets/images/recents/dslr.jpg"),
  },
  {
    id: "2",
    name: "Gaming Chair",
    price: "Rs. 12,000",
    originalPrice: "Rs. 18,000",
    condition: "Like New",
    discount: "33%",
    image: require("@/assets/images/recents/chair.jpg")
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "Rs. 5,500",
    originalPrice: "Rs. 8,500",
    condition: "Fair",
    discount: "35%",
    image: require("@/assets/images/recents/watch.jpg")
  },
  {
    id: "4",
    name: "Leather Jacket",
    price: "Rs. 2,800",
    originalPrice: "Rs. 4,200",
    condition: "Good",
    discount: "33%",
  },
  {
    id: "5",
    name: "Study Table",
    price: "Rs. 4,500",
    originalPrice: "Rs. 6,500",
    condition: "Good",
    discount: "31%",
    image: require("@/assets/images/recents/table.jpg")
  },
  {
    id: "6",
    name: "Guitar",
    price: "Rs. 7,000",
    originalPrice: "Rs. 10,000",
    condition: "Like New",
    discount: "30%",
    image: require("@/assets/images/recents/guitar.jpg")
  },
];

// Offer ends in 24 hours from now
const OFFER_DURATION = 24 * 60 * 60;

function useCountdown(seconds: number) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(secs).padStart(2, "0"),
  };
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#1C1917",
          borderRadius: 10,
          paddingHorizontal: 14,
          paddingVertical: 8,
          minWidth: 52,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Poppins_600SemiBold",
            color: "white",
          }}
        >
          {value}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 11,
          fontFamily: "Inter_400Regular",
          color: "#78716C",
          marginTop: 4,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function OfferScreen() {
  const { hours, minutes, seconds } = useCountdown(OFFER_DURATION);

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
          Limited Time Offer 
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Offer Banner */}
        <View
          style={{
            backgroundColor: "#F97316",
            margin: 24,
            borderRadius: 24,
            padding: 24,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_500Medium",
              color: "rgba(255,255,255,0.8)",
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Flash Sale Ends In
          </Text>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Poppins_600SemiBold",
              color: "white",
              marginBottom: 20,
            }}
          >
            Up to 50% Off 
          </Text>

          {/* Countdown Timer */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <TimeBlock value={hours} label="Hours" />
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Poppins_600SemiBold",
                color: "white",
                marginBottom: 20,
              }}
            >
              :
            </Text>
            <TimeBlock value={minutes} label="Minutes" />
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Poppins_600SemiBold",
                color: "white",
                marginBottom: 20,
              }}
            >
              :
            </Text>
            <TimeBlock value={seconds} label="Seconds" />
          </View>
        </View>

        {/* Offer subtitle */}
        <View style={{ paddingHorizontal: 24, marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_600SemiBold",
              color: "#1C1917",
              marginBottom: 4,
            }}
          >
            {offerProducts.length} deals available
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: "#78716C",
            }}
          >
            Grab them before the timer runs out!
          </Text>
        </View>

        {/* Products Grid */}
        <View style={{ paddingHorizontal: 24 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {offerProducts.map((product) => (
              <View key={product.id} style={{ width: "48%", marginBottom: 16 }}>
                <FeaturedCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  condition={product.condition}
                  discount={product.discount}
                  image={product.image}
                  onPress={() => router.push(`/product/${product.id}`)}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
