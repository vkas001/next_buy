import AuthButton from "@/modules/features/Auth/components/AuthButton";
import AuthInput from "@/modules/features/Auth/components/AuthInput";
import AuthHeader from "@/modules/shared/components/AuthHeader";
import BackButton from "@/modules/shared/components/BackButton";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      className="flex-1 bg-background dark:bg-darkBackground"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6 pt-10 pb-10">
          <AuthHeader
            title="Welcome back!"
            subtitle="Sign in to continue shopping great deals"
          />

          <AuthInput
            label="Email address"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <AuthInput
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />

          {/* Forgot password */}
          <TouchableOpacity className="self-end mb-6">
            <Text className="text-sm font-body text-primary dark:text-darkPrimary">
              Forgot password?
            </Text>
          </TouchableOpacity>

          <AuthButton label="Sign in" onPress={() => {}} />

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-border dark:bg-darkBorder" />
            <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary mx-3">
              or
            </Text>
            <View className="flex-1 h-px bg-border dark:bg-darkBorder" />
          </View>

          {/* Register link */}
          <View className="flex-row justify-center mb-8">
            <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text className="text-sm font-bodyMedium text-primary dark:text-darkPrimary">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          <BackButton label="Back to home" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
