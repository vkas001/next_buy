import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useScreenRefresh } from "@/modules/features/Home/hooks/useScreenRefresh";
import ProfileCard from "../components/ProfileCard";
import ProfileHeader from "../components/ProfileHeader";
import ProfileMenu from "../components/ProfileMenu";

// Menu data - will be connected to backend later
const menuSections = [
  {
    title: "Account",
    items: [
      { icon: "person-outline", label: "Edit Profile" },
      { icon: "shield-checkmark-outline", label: "Verify Identity" },
      { icon: "star-outline", label: "My Reviews" },
    ],
  },
  {
    title: "Shopping",
    items: [
      { icon: "bag-outline", label: "My Orders" },
      { icon: "heart-outline", label: "Wishlist" },
      { icon: "pricetag-outline", label: "My Listings" },
      { icon: "refresh-outline", label: "Refunds" },
    ],
  },
  {
    title: "Payments",
    items: [
      { icon: "card-outline", label: "Payment Methods" },
      { icon: "ticket-outline", label: "Vouchers & Discounts" },
      { icon: "wallet-outline", label: "Transaction History" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: "chatbubble-outline", label: "Chat Support" },
      { icon: "help-circle-outline", label: "FAQ" },
      { icon: "document-text-outline", label: "Terms & Privacy" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: "notifications-outline", label: "Notifications" },
      { icon: "moon-outline", label: "Dark Mode" },
      { icon: "language-outline", label: "Language" },
    ],
  },
];

export default function ProfileScreen() {
  const { refreshing, onRefresh } = useScreenRefresh(async () => {
    // TODO: backend will add refetch logic here
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      edges={["top"]}
    >
      {/* Header */}
      <ProfileHeader />

      {/* Divider */}
      <View
        style={{
          marginHorizontal: 24,
          borderBottomWidth: 1,
          borderBottomColor: "#1E293B",
          marginBottom: 8,
        }}
      />

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#2563EB"
            colors={["#2563EB"]}
          />
        }
      >
        {/* Profile Card */}
        <ProfileCard />

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <ProfileMenu
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}

        {/* Logout Button */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <TouchableOpacity
            onPress={() => router.replace("/landing")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#EF4444",
              borderRadius: 16,
              paddingVertical: 16,
              gap: 8,
            }}
          >
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_500Medium",
                color: "white",
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
