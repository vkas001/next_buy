import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GuestProfile() {
  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-darkBackground"
      edges={["top"]}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-4 pb-4">
        <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
          Profile
        </Text>
        <TouchableOpacity className="w-10 h-10 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full items-center justify-center">
          <Ionicons name="settings-outline" size={20} color="#64748B" />
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="mx-6 border-b border-border dark:border-darkBorder mb-6" />

      {/* Guest Card */}
      <View className="mx-6 mb-6 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-3xl p-6 items-center">
        {/* Avatar placeholder */}
        <View className="w-20 h-20 bg-background dark:bg-darkBackground rounded-full items-center justify-center mb-4 border border-border dark:border-darkBorder">
          <Ionicons name="person-outline" size={40} color="#64748B" />
        </View>

        <Text className="text-lg font-heading text-textPrimary dark:text-darkTextPrimary mb-2">
          You're not signed in
        </Text>
        <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary text-center mb-6">
          Sign in to view your orders, wishlist, and manage your listings.
        </Text>

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="w-full bg-primary dark:bg-darkPrimary rounded-2xl py-4 items-center mb-3"
        >
          <Text className="text-base font-bodyMedium text-white">Sign In</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          onPress={() => router.push("/auth/register")}
          className="w-full bg-transparent border border-border dark:border-darkBorder rounded-2xl py-4 items-center"
        >
          <Text className="text-base font-bodyMedium text-textPrimary dark:text-darkTextPrimary">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quick Access Menu - visible even when not logged in */}
      <View className="px-6">
        <Text className="text-xs font-bodyMedium text-textSecondary dark:text-darkTextSecondary mb-3 uppercase">
          Quick Access
        </Text>
        <View className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl overflow-hidden">
          {[
            { icon: "help-circle-outline", label: "FAQ" },
            { icon: "document-text-outline", label: "Terms & Privacy" },
            { icon: "chatbubble-outline", label: "Contact Support" },
          ].map((item, index, arr) => (
            <TouchableOpacity
              key={item.label}
              className={`flex-row items-center px-4 py-4 ${
                index !== arr.length - 1
                  ? "border-b border-border dark:border-darkBorder"
                  : ""
              }`}
            >
              <View className="w-8 h-8 bg-background dark:bg-darkBackground rounded-xl items-center justify-center mr-3">
                <Ionicons name={item.icon as any} size={18} color="#2563EB" />
              </View>
              <Text className="flex-1 text-sm font-body text-textPrimary dark:text-darkTextPrimary">
                {item.label}
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={16}
                color="#64748B"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
