import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const menuSections = [
  {
    title: "Account",
    items: [
      {
        icon: "person-outline",
        label: "Edit Profile",
        screen: "/profile/edit",
      },
      {
        icon: "shield-checkmark-outline",
        label: "Verify Identity",
        screen: "/profile/verify",
      },
      { icon: "star-outline", label: "My Reviews", screen: "/profile/reviews" },
    ],
  },
  {
    title: "Shopping",
    items: [
      { icon: "bag-outline", label: "My Orders", screen: "/profile/orders" },
      { icon: "heart-outline", label: "Wishlist", screen: "/profile/wishlist" },
      {
        icon: "pricetag-outline",
        label: "My Listings",
        screen: "/profile/listings",
      },
      { icon: "refresh-outline", label: "Refunds", screen: "/profile/refunds" },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        icon: "card-outline",
        label: "Payment Methods",
        screen: "/profile/payments",
      },
      {
        icon: "ticket-outline",
        label: "Vouchers & Discounts",
        screen: "/profile/vouchers",
      },
      {
        icon: "wallet-outline",
        label: "Transaction History",
        screen: "/profile/transactions",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        icon: "chatbubble-outline",
        label: "Chat Support",
        screen: "/profile/support",
      },
      { icon: "help-circle-outline", label: "FAQ", screen: "/profile/faq" },
      {
        icon: "document-text-outline",
        label: "Terms & Privacy",
        screen: "/profile/terms",
      },
    ],
  },
  {
    title: "Preferences",
    items: [
      {
        icon: "notifications-outline",
        label: "Notifications",
        screen: "/profile/notifications",
      },
      { icon: "moon-outline", label: "Dark Mode", screen: "/profile/theme" },
      {
        icon: "language-outline",
        label: "Language",
        screen: "/profile/language",
      },
    ],
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      className="flex-1 bg-background dark:bg-darkBackground"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-4 pb-4">
          <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
            Profile
          </Text>
          <TouchableOpacity className="w-10 h-10 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full items-center justify-center">
            <Ionicons name="settings-outline" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Profile card */}
        <View className="mx-6 mb-6 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-3xl p-5">
          <View className="flex-row items-center mb-4">
            {/* Avatar */}
            <View className="w-16 h-16 bg-primary rounded-full items-center justify-center mr-4">
              <Text className="text-2xl font-heading text-white">JD</Text>
            </View>
            {/* Info */}
            <View className="flex-1">
              <Text className="text-lg font-heading text-textPrimary dark:text-darkTextPrimary">
                John Doe
              </Text>
              <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
                john@example.com
              </Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="location-outline" size={12} color="#64748B" />
                <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary ml-1">
                  Kathmandu, Nepal
                </Text>
              </View>
            </View>
            {/* Edit button */}
            <TouchableOpacity className="bg-primary rounded-xl px-3 py-2">
              <Text className="text-xs font-bodyMedium text-white">Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View className="flex-row justify-between pt-4 border-t border-border dark:border-darkBorder">
            <View className="items-center flex-1">
              <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
                12
              </Text>
              <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
                Listings
              </Text>
            </View>
            <View className="w-px bg-border dark:bg-darkBorder" />
            <View className="items-center flex-1">
              <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
                48
              </Text>
              <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
                Orders
              </Text>
            </View>
            <View className="w-px bg-border dark:bg-darkBorder" />
            <View className="items-center flex-1">
              <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
                4.8 ⭐
              </Text>
              <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
                Rating
              </Text>
            </View>
            <View className="w-px bg-border dark:bg-darkBorder" />
            <View className="items-center flex-1">
              <Text className="text-xl font-heading text-textPrimary dark:text-darkTextPrimary">
                5
              </Text>
              <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
                Wishlist
              </Text>
            </View>
          </View>
        </View>

        {/* Menu sections */}
        {menuSections.map((section) => (
          <View key={section.title} className="px-6 mb-6">
            <Text className="text-xs font-bodyMedium text-textSecondary dark:text-darkTextSecondary mb-3 uppercase">
              {section.title}
            </Text>
            <View className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl overflow-hidden">
              {section.items.map((item, index) => (
                <TouchableOpacity
                  key={item.label}
                  className={`flex-row items-center px-4 py-4 ${
                    index !== section.items.length - 1
                      ? "border-b border-border dark:border-darkBorder"
                      : ""
                  }`}
                >
                  <View className="w-8 h-8 bg-background dark:bg-darkBackground rounded-xl items-center justify-center mr-3">
                    <Ionicons
                      name={item.icon as any}
                      size={18}
                      color="#2563EB"
                    />
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
        ))}

        {/* Logout button */}
        <View className="px-6 mb-10">
          <TouchableOpacity
            onPress={() => router.replace("/landing")}
            className="w-full flex-row items-center justify-center bg-red-500 rounded-2xl py-4 gap-2"
          >
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text className="text-base font-bodyMedium text-white">
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
