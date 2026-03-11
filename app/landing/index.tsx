import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function LandingPage() {
  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-darkBackground"
    >
      <View>
        <Image
          source={require("../../assets/images/bg1.png")}
          className="w-screen h-[600px]"
          resizeMode="cover"
        />
      </View>

      {/* Bottom Card */}
      <View className="flex-1 bg-card dark:bg-darkCard rounded-t-3xl py-4 items-center -mt-8 z-10">

        {/*Title */}
        <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
          Welcome to Next Buy
        </Text>

        {/* Description */}
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary mt-2 text-center px-6">
          Discover the best deals and products at your fingertips.
        </Text>

        {/* Done Button */}
        <TouchableOpacity className="self-stretch mx-4 bg-secondary rounded-full py-4 mt-6 items-center">
          <Text className="text-base font-bodyMedium text-textPrimary dark:text-darkTextPrimary">
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity className="self-stretch mx-4 bg-transparent rounded-full py-4 items-center mt-4 border border-border dark:border-darkBorder">
          <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
            Skip
          </Text>
        </TouchableOpacity>

        {/* Pagination Dots */}
        <View className="flex-row items-center justify-center mt-4">
          <View className="w-3 h-3 bg-primary rounded-full mx-1" />
          <View className="w-3 h-3 bg-border rounded-full mx-1" />
          <View className="w-3 h-3 bg-border rounded-full mx-1" />
          <View className="w-3 h-3 bg-border rounded-full mx-1" />
        </View>
      </View>
    </SafeAreaView>
  );
}