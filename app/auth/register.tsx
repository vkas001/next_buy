import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      className="flex-1 bg-background dark:bg-darkBackground"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 px-6 pt-12">
          {/* Header */}
          <Text className="text-3xl font-heading text-textPrimary dark:text-darkTextPrimary mb-2">
            Create account
          </Text>
          <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary mb-10">
            Sign up to get started
          </Text>
          {/* Full Name */}
          <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1">
            Full Name
          </Text>
          <TextInput
            className="w-full border border-border dark:border-darkBorder rounded-xl px-4 py-3 text-base font-body text-textPrimary dark:text-darkTextPrimary mb-5"
            placeholder="John Doe"
            placeholderTextColor="#9ca3af"
            autoCapitalize="words"
          />
          {/* Email */}
          <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1">
            Email
          </Text>
          <TextInput
            className="w-full border border-border dark:border-darkBorder rounded-xl px-4 py-3 text-base font-body text-textPrimary dark:text-darkTextPrimary mb-5"
            placeholder="you@example.com"
            placeholderTextColor="#9ca3af"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {/* Password */}
          <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1">
            Password
          </Text>
          <TextInput
            className="w-full border border-border dark:border-darkBorder rounded-xl px-4 py-3 text-base font-body text-textPrimary dark:text-darkTextPrimary mb-5"
            placeholder="Create a password"
            placeholderTextColor="#9ca3af"
            secureTextEntry
          />
          {/* Confirm Password */}
          <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary mb-1">
            Confirm Password
          </Text>
          <TextInput
            className="w-full border border-border dark:border-darkBorder rounded-xl px-4 py-3 text-base font-body text-textPrimary dark:text-darkTextPrimary mb-8"
            placeholder="Repeat your password"
            placeholderTextColor="#9ca3af"
            secureTextEntry
          />
          {/* Register button */}
          <TouchableOpacity className="w-full bg-primary dark:bg-darkPrimary rounded-full py-4 items-center mb-6">
            <Text className="text-base font-bodyMedium text-white">
              Create account
            </Text>
          </TouchableOpacity>
          {/* Login link */}
          <View className="flex-row justify-center">
            <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text className="text-sm font-bodyMedium text-primary dark:text-darkPrimary">
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity onPress={() => router.back()} className="mb-8">
            <Text className="text-sm font-body text-primary dark:text-darkPrimary text-center mb-10">
              Back
            </Text>
          </TouchableOpacity> */}
          {/* BACK BUTTON DISABLED */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
