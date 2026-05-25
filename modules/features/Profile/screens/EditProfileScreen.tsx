import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getCurrentUser } from "../../../features/Auth/services/authService";

import { getUserProfilePictureUrl, uploadUserProfilePicture } from "../services/profileService";

import { APPWRITE_CONFIG, database } from '@/shared/services/appwrite';

export default function EditProfileScreen() {
  const [userId, setUserId] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");

  const [imagePickerResponse, setImagePickerResponse] = useState<any>(null);
  const [profilePreviewUrl, setProfilePreviewUrl] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setIsLoading(true);
        const user = await getCurrentUser();
        if (user) {
          setUserId(user.$id);
          setName(user.name || "");
          setEmail(user.email || "");
          setPhone(user.phone || "");

          // Fetch the document using your APPWRITE_CONFIG object
          try {
            const userDoc: any = await database.getDocument(
              APPWRITE_CONFIG.databaseId,
              APPWRITE_CONFIG.collectionId,
              user.$id
            );

            if (userDoc && userDoc.profilePicId) {
              // Fetch preview URL from your profile service
              const url = await getUserProfilePictureUrl(userDoc.profilePicId);
              setProfilePreviewUrl(url);
            }
          } catch (docError) {
            console.log("No profile record found in Appwrite DB yet.");
          }
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const handlePickImage = async () => {
    try {
      // Request permissions first
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "You need to grant permission to access your photo library.");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (result.canceled) return;

      if (result.assets && result.assets.length > 0) {
        setImagePickerResponse(result);
        setProfilePreviewUrl(result.assets[0].uri || null); // Instant local preview
      }
    } catch (error: any) {
      Alert.alert("Error", error?.message || "Failed to pick image");
    }
  };

  const handleSaveProfile = async () => {
    if (!userId) return;

    try {
      setIsSaving(true);

      // Trigger your profile service file upload logic
      if (imagePickerResponse) {
        await uploadUserProfilePicture(userId, imagePickerResponse);
      }

      Alert.alert("Success", "Profile updated successfully!");
      router.back();
    } catch (error: any) {
      Alert.alert("Save Error", error.message || "Something went wrong.");
    } finally {
      setIsSaving(false);
    }
  };
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
        <TouchableOpacity onPress={handleSaveProfile} disabled={isSaving}>
          {isSaving ? (
            <ActivityIndicator size="small" color="#F97316" />
          ) : (
            <Text style={{ fontSize: 14, fontFamily: "Inter_500Medium", color: "#F97316" }}>
              Save
            </Text>
          )}
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
                {name
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase() || "?"}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handlePickImage}
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
              <Text style={{ fontSize: 13, fontFamily: "Inter_500Medium", color: "#F97316" }}>
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
