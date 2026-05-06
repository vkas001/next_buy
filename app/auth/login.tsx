import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

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
        <View className="flex-1 px-6 pt-24 pb-10">
          {/* Header */}
          <View className="mb-10">
            <Text className="text-6xl font-bodyMedium text-secondary dark:text-secondary mb-3 self-center">
              🛍️ NEXTBUY
            </Text>
            <Text className="text-4xl font-heading text-textPrimary dark:text-darkTextPrimary mb-2 self-center">
              Welcome back!
            </Text>
          </View>

          {/* Email */}
          <Text className="text-sm font-bodyMedium text-textSecondary dark:text-darkTextSecondary mb-2">
            Email address
          </Text>
          <TextInput
            className="w-full border border-border dark:border-darkBorder bg-card dark:bg-darkCard rounded-2xl px-4 py-4 text-base font-body text-textPrimary dark:text-darkTextPrimary mb-4"
            placeholder="you@example.com"
            placeholderTextColor="#64748B"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password */}
          <Text className="text-sm font-bodyMedium text-textSecondary dark:text-darkTextSecondary mb-2">
            Password
          </Text>
          <View className="w-full border border-border dark:border-darkBorder bg-card dark:bg-darkCard rounded-2xl flex-row items-center mb-2">
            <TextInput
              className="flex-1 px-4 py-4 text-base font-body text-textPrimary dark:text-darkTextPrimary"
              placeholder="Enter your password"
              placeholderTextColor="#64748B"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="px-4"
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#64748B"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot password */}
          <TouchableOpacity className="self-center mb-8">
            <Text className="text-sm font-body text-primary dark:text-darkPrimary">
              Forgot password?
            </Text>
          </TouchableOpacity>

          {/* Sign in button */}
          <TouchableOpacity className="w-full bg-primary dark:bg-darkPrimary rounded-2xl py-4 items-center mb-4">
            <Text className="text-base font-bodyMedium text-white">
              Sign in
            </Text>
          </TouchableOpacity>

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
            <Text className="text-lg font-body text-textSecondary dark:text-darkTextSecondary">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text className="text-lg font-bodyMedium text-primary dark:text-darkPrimary">
                Sign up.
              </Text>
            </TouchableOpacity>
          </View>

          {/* Back button at bottom */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center justify-center"
          >
            {/* <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary ml-1">
              Back to home
            </Text> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
