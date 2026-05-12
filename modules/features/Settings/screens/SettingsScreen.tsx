import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsSection from "../components/SettingsSection";
import { useSettings } from "../hooks/useSettings";

export default function SettingsScreen() {
  const {
    notifications,
    setNotifications,
    emailAlerts,
    setEmailAlerts,
    orderUpdates,
    setOrderUpdates,
    promotions,
    setPromotions,
  } = useSettings();

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
          Settings
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
      >
        {/* Account */}
        <SettingsSection
          title="Account"
          items={[
            {
              label: "Edit Profile",
              icon: "person-outline",
              type: "navigate",
              onPress: () => router.push("/profile/edit"),
            },
            {
              label: "Change Password",
              icon: "lock-closed-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Verify Identity",
              icon: "shield-checkmark-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Linked Accounts",
              icon: "link-outline",
              type: "navigate",
              onPress: () => {},
            },
          ]}
        />

        {/* Notifications */}
        <SettingsSection
          title="Notifications"
          items={[
            {
              label: "Push Notifications",
              icon: "notifications-outline",
              type: "toggle",
              value: notifications,
              onToggle: setNotifications,
            },
            {
              label: "Email Alerts",
              icon: "mail-outline",
              type: "toggle",
              value: emailAlerts,
              onToggle: setEmailAlerts,
            },
            {
              label: "Order Updates",
              icon: "bag-outline",
              type: "toggle",
              value: orderUpdates,
              onToggle: setOrderUpdates,
            },
            {
              label: "Promotions & Deals",
              icon: "pricetag-outline",
              type: "toggle",
              value: promotions,
              onToggle: setPromotions,
            },
          ]}
        />

        {/* Privacy */}
        <SettingsSection
          title="Privacy & Security"
          items={[
            {
              label: "Privacy Policy",
              icon: "document-text-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Terms of Service",
              icon: "newspaper-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Data & Storage",
              icon: "server-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Block List",
              icon: "ban-outline",
              type: "navigate",
              onPress: () => {},
            },
          ]}
        />

        {/* App */}
        <SettingsSection
          title="App"
          items={[
            {
              label: "Language",
              icon: "language-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Currency",
              icon: "cash-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Rate NextBuy",
              icon: "star-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "App Version 1.0.0",
              icon: "information-circle-outline",
              type: "info",
            },
          ]}
        />

        {/* Support */}
        <SettingsSection
          title="Support"
          items={[
            {
              label: "Help Center",
              icon: "help-circle-outline",
              type: "navigate",
              onPress: () => {},
            },
            {
              label: "Contact Us",
              icon: "chatbubble-outline",
              type: "navigate",
              onPress: () => router.push("/chat"),
            },
            {
              label: "Report a Problem",
              icon: "flag-outline",
              type: "navigate",
              onPress: () => {},
            },
          ]}
        />

        {/* Danger Zone */}
        <SettingsSection
          title="Account Actions"
          items={[
            {
              label: "Log Out",
              icon: "log-out-outline",
              type: "navigate",
              onPress: () => router.replace("/landing"),
              destructive: true,
            },
            {
              label: "Delete Account",
              icon: "trash-outline",
              type: "navigate",
              onPress: () => {},
              destructive: true,
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
