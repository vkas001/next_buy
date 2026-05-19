import { useAuth } from "@/modules/shared/context/AuthContext";
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

export default function RegisterScreen() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: 80,
            paddingBottom: 40,
          }}
        >
          {/* Title */}
          <Text
            style={{
              fontSize: 47,
              fontFamily: "Poppins_600SemiBold",
              color: "#F97316",

              textAlign: "center",
            }}
          >
            Create account
          </Text>

          {/* Full Name */}
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_500Medium",
              color: "black",
              marginBottom: 8,
            }}
          >
            Full Name:
          </Text>
          <View
            style={{
              backgroundColor: "#FFF7ED",
              borderWidth: 1,
              borderColor: "#FED7AA",
              borderRadius: 16,
              paddingHorizontal: 16,

              marginBottom: 16,
            }}
          >
            <TextInput
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: "black",
              }}
              placeholder="Your Name"
              placeholderTextColor="#64748B"
              autoCapitalize="words"
            />
          </View>

          {/* Email */}
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_500Medium",
              color: "black",
              marginBottom: 8,
            }}
          >
            Email address:
          </Text>
          <View
            style={{
              backgroundColor: "#FFF7ED",
              borderWidth: 1,
              borderColor: "#FED7AA",
              borderRadius: 16,
              paddingHorizontal: 16,

              marginBottom: 16,
            }}
          >
            <TextInput
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: "black",
              }}
              placeholder="you@example.com"
              placeholderTextColor="#64748B"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_500Medium",
              color: "black",
              marginBottom: 8,
            }}
          >
            Password:
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF7ED",
              borderWidth: 1,
              borderColor: "#FED7AA",
              borderRadius: 16,
              paddingHorizontal: 16,
              marginBottom: 16,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: "black",
                paddingVertical: 14,
              }}
              placeholder="Create a password"
              placeholderTextColor="#64748B"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#64748B"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_500Medium",
              color: "black",
              marginBottom: 8,
            }}
          >
            Confirm Password:
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF7ED",
              borderWidth: 1,
              borderColor: "#FED7AA",
              borderRadius: 16,
              paddingHorizontal: 16,
              marginBottom: 32,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: "black",
                paddingVertical: 16,
              }}
              placeholder="Repeat your password"
              placeholderTextColor="#64748B"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#64748B"
              />
            </TouchableOpacity>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity
            onPress={() => {
              // TODO: backend will create account
              login({
                id: "1",
                name: "John Doe",
                email: "john@example.com",
                avatar: "JD",
                location: "Kathmandu, Nepal",
              });
              router.replace("/(tabs)");
            }}
            style={{
              backgroundColor: "#F97316",
              borderRadius: 16,
              paddingVertical: 16,
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_500Medium",
                color: "white",
              }}
            >
              Create account
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#334155" }} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: "#64748B",
                marginHorizontal: 12,
              }}
            >
              or
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#334155" }} />
          </View>

          {/* Sign in link */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_400Regular",
                color: "#64748B",
              }}
            >
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_500Medium",
                  color: "#2563EB",
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
