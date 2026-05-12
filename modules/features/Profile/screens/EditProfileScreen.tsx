import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("9800000000");
  const [location, setLocation] = useState("Kathmandu, Nepal");
  const [bio, setBio] = useState("");

  const fields = [
    {
      label: "Full Name",
      value: name,
      onChange: setName,
      placeholder: "Your name",
      icon: "person-outline",
    },
    {
      label: "Email",
      value: email,
      onChange: setEmail,
      placeholder: "your@email.com",
      icon: "mail-outline",
      keyboardType: "email-address" as any,
    },
    {
      label: "Phone",
      value: phone,
      onChange: setPhone,
      placeholder: "98XXXXXXXX",
      icon: "call-outline",
      keyboardType: "phone-pad" as any,
    },
    {
      label: "Location",
      value: location,
      onChange: setLocation,
      placeholder: "City, Country",
      icon: "location-outline",
    },
  ];

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
          justifyContent: "space-between",
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
          Edit Profile
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: "#F97316",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>

      {/* KeyboardAvoidingView wraps the scrollable content */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 24, paddingBottom: 60 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Avatar */}
          <View style={{ alignItems: "center", marginBottom: 32 }}>
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: "#F97316",
                borderRadius: 45,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: "Poppins_600SemiBold",
                  color: "white",
                }}
              >
                JD
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#FFF7ED",
                borderWidth: 1,
                borderColor: "#FED7AA",
                borderRadius: 999,
                paddingHorizontal: 16,
                paddingVertical: 8,
              }}
            >
              <Ionicons name="camera-outline" size={16} color="#F97316" />
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_500Medium",
                  color: "#F97316",
                }}
              >
                Change Photo
              </Text>
            </TouchableOpacity>
          </View>

          {/* Fields */}
          {fields.map((field) => (
            <View key={field.label} style={{ marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_500Medium",
                  color: "#78716C",
                  marginBottom: 8,
                }}
              >
                {field.label}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1.5,
                  borderColor: "#FED7AA",
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                }}
              >
                <Ionicons
                  name={field.icon as any}
                  size={18}
                  color="#F97316"
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontFamily: "Inter_400Regular",
                    color: "#1C1917",
                  }}
                  placeholder={field.placeholder}
                  placeholderTextColor="#A8A29E"
                  value={field.value}
                  onChangeText={field.onChange}
                  keyboardType={field.keyboardType}
                />
              </View>
            </View>
          ))}

          {/* Bio */}
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_500Medium",
                color: "#78716C",
                marginBottom: 8,
              }}
            >
              Bio (optional)
            </Text>
            <TextInput
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1.5,
                borderColor: "#FED7AA",
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 14,
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: "#1C1917",
                height: 120,
                textAlignVertical: "top",
              }}
              placeholder="Tell buyers a bit about yourself..."
              placeholderTextColor="#A8A29E"
              value={bio}
              onChangeText={setBio}
              multiline
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
