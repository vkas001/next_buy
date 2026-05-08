import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function LandingPage() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      className="flex-1"
    >
      {/* Full screen image */}
      <View style={{ position: "absolute", width: "100%", height: "100%" }}>
        <Image
          source={require("../../assets/images/landing.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
        {/* Dark gradient overlay on image */}
        <LinearGradient
          colors={["transparent", "rgba(15,23,42,0.7)", "#0F172A"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
          }}
        />
      </View>

      {/* Top logo */}

      {/* Bottom content */}
      <View className="flex-1 justify-end px-6 pb-10">
        {/* Tag */}
        <View className="self-center bg-secondary rounded-full px-3 py-1 mb-2">
          <Text className="text-xs font-bodyMedium text-white">
            Your Favourite Secondary Marketplace
          </Text>
        </View>

        {/* Title */}
        <Text className="text-6xl font-heading text-white mb-3 text-center leading-tight">
          Buy & Sell{"\n"}With Confidence
        </Text>

        {/* Description */}
        <Text className="text-sm font-body text-white opacity-70 mb-8 leading-6">
          Discover amazing second-hand deals or list your items in minutes.
          Safe, simple and trusted.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => router.push("/(tabs)")}
          className="w-full bg-primary rounded-2xl py-5 items-center mb-4"
        >
          <Text className="text-lg font-bold font-bodyMedium text-white">
            Let's Explore
          </Text>
        </TouchableOpacity>
        <Text className="self-center text-white text-xl">or</Text>

        {/* Already have account */}
        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="w-full items-center py-3"
        >
          <Text className="text-lg font-bold text-white text-">
            LogIn with account.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
