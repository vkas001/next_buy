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
            paddingTop: 150,
            paddingBottom: 40,
          }}
        >
          {/* Brand */}
          <Text
            style={{
              fontSize: 50,
              color: "#F97316",
              marginBottom: 1,
              textAlign: "center",
            }}
          >
            🛍️ NEXTBUY
          </Text>

          {/* Title */}
          <Text
            style={{
              fontSize: 32,
              fontFamily: "Poppins_600SemiBold",
              color: "#1C1917",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Welcome back
          </Text>

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
              paddingVertical: 3,
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
              marginBottom: 8,
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
              placeholder="Enter your password"
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

          {/* Forgot Password */}
          <TouchableOpacity
            style={{ alignSelf: "center", marginBottom: 20, marginTop: 10 }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: "#2563EB",
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>

          {/* Sign in Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2563EB",
              borderRadius: 16,
              paddingVertical: 10,
              paddingHorizontal: 10,
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
              Sign in
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
                color: "black",
                marginHorizontal: 12,
              }}
            >
              or
            </Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#334155" }} />
          </View>

          {/* Sign up link */}
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
                color: "black",
              }}
            >
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_500Medium",
                  color: "#2563EB",
                }}
              >
                Sign up
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
