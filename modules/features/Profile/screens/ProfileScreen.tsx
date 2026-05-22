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
import { useWishlist } from "@/modules/shared/context/WishlistContext";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../../../features/Auth/services/authService";
import GuestProfile from "../components/GuestProfile";
import ProfileCard from "../components/ProfileCard";
import ProfileHeader from "../components/ProfileHeader";
import ProfileMenu from "../components/ProfileMenu";

export default function ProfileScreen() {
  const { wishlistCount } = useWishlist();
  const [user, setUser] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  const { refreshing, onRefresh } = useScreenRefresh(async () => {
    // TODO: backend refresh
  });

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logoutUser();
      setIsLoggedIn(false);
      setUser(null);
      router.replace("/landing");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function checkSession() {
      const currentUser = await getCurrentUser();

      if (currentUser) {
        setUser(currentUser);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    }

    checkSession();
  }, []);

  // Show guest screen if not logged in
  if (!isLoggedIn) {
    return <GuestProfile />;
  }

  //  MENU (updated with wishlistCount)
  const menuSections = [
    {
      title: "Account",
      items: [
        {
          icon: "person-outline",
          label: "Edit Profile",
          onPress: () => router.push("/profile/edit"),
        },
        {
          icon: "shield-checkmark-outline",
          label: "Verify Identity",
          onPress: () => { },
        },
        {
          icon: "star-outline",
          label: "My Reviews",
          onPress: () => { },
        },
      ],
    },
    {
      title: "Shopping",
      items: [
        {
          icon: "bag-outline",
          label: "My Orders",
          onPress: () => router.push("/orders"),
        },
        {
          icon: "heart-outline",
          label: `Wishlist (${wishlistCount})`, // UPDATED HERE
          onPress: () => { },
        },
        {
          icon: "pricetag-outline",
          label: "My Listings",
          onPress: () => { },
        },
        {
          icon: "refresh-outline",
          label: "Refunds",
          onPress: () => { },
        },
      ],
    },
    {
      title: "Payments",
      items: [
        {
          icon: "card-outline",
          label: "Payment Methods",
          onPress: () => { },
        },
        {
          icon: "ticket-outline",
          label: "Vouchers & Discounts",
          onPress: () => { },
        },
        {
          icon: "wallet-outline",
          label: "Transaction History",
          onPress: () => { },
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: "chatbubble-outline",
          label: "Chat Support",
          onPress: () => router.push("/chat"),
        },
        {
          icon: "help-circle-outline",
          label: "FAQ",
          onPress: () => { },
        },
        {
          icon: "document-text-outline",
          label: "Terms & Privacy",
          onPress: () => { },
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: "notifications-outline",
          label: "Notifications",
          onPress: () => router.push("/notifications"),
        },
        {
          icon: "settings-outline",
          label: "Settings",
          onPress: () => router.push("/settings"),
        },
        {
          icon: "language-outline",
          label: "Language",
          onPress: () => { },
        },
      ],
    },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      {/* Header */}
      <ProfileHeader onSettings={() => router.push("/settings")} />

      {/* Divider */}
      <View
        style={{
          marginHorizontal: 24,
          borderBottomWidth: 1,
          borderBottomColor: "#FED7AA",
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
            tintColor="#F97316"
            colors={["#F97316"]}
          />
        }
      >
        {/* Profile Card */}
        <ProfileCard
          name={user?.name}
          email={user?.email}
          avatar={user?.avatar}
          location={user?.location}
          wishlist={wishlistCount}
        />

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <ProfileMenu
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}

        {/* Logout */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <TouchableOpacity
            onPress={handleLogout}
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
