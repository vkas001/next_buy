import { Ionicons } from "@expo/vector-icons";
import * as ImagePickerLib from "expo-image-picker";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CategoryPicker from "../components/CategoryPicker";
import ConditionPicker from "../components/ConditionPicker";
import ImagePicker from "../components/ImagePicker";
import PriceInput from "../components/PriceInput";
import { useSellForm } from "../hooks/useSellForm";

export default function SellScreen() {
  const { form, errors, isSubmitting, updateField, submitListing } =
    useSellForm();

  const handleAddImage = async () => {
    try {
      const result = await ImagePickerLib.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        updateField("images", [...form.images, result.assets[0].uri]);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick image");
    }
  };

  const handleSubmit = async () => {
    await submitListing();
    Alert.alert("Success! ", "Your listing has been posted!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
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
            List a Product
          </Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Image Picker */}
          <ImagePicker
            images={form.images}
            onAddImage={handleAddImage}
            onRemoveImage={(index) => {
              const updated = form.images.filter((_, i) => i !== index);
              updateField("images", updated);
            }}
          />

          {/* Divider */}
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#FED7AA",
              marginBottom: 24,
            }}
          />

          {/* Title */}
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: "#1C1917",
              marginBottom: 8,
            }}
          >
            Product Title
          </Text>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 1.5,
              borderColor: errors.title ? "#EF4444" : "#FED7AA",
              borderRadius: 12,
              paddingHorizontal: 16,
              paddingVertical: 14,
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: "#1C1917",
              marginBottom: errors.title ? 6 : 24,
            }}
            placeholder="e.g. iPhone 13 Pro 256GB"
            placeholderTextColor="#A8A29E"
            value={form.title}
            onChangeText={(text) => updateField("title", text)}
          />
          {errors.title && (
            <Text
              style={{
                fontSize: 12,
                color: "#EF4444",
                fontFamily: "Inter_400Regular",
                marginBottom: 16,
              }}
            >
              {errors.title}
            </Text>
          )}

          {/* Description */}
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: "#1C1917",
              marginBottom: 8,
            }}
          >
            Description
          </Text>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 1.5,
              borderColor: errors.description ? "#EF4444" : "#FED7AA",
              borderRadius: 12,
              paddingHorizontal: 16,
              paddingVertical: 14,
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: "#1C1917",
              marginBottom: errors.description ? 6 : 24,
              height: 120,
              textAlignVertical: "top",
            }}
            placeholder="Describe your product — condition, features, reason for selling..."
            placeholderTextColor="#A8A29E"
            value={form.description}
            onChangeText={(text) => updateField("description", text)}
            multiline
            numberOfLines={5}
          />
          {errors.description && (
            <Text
              style={{
                fontSize: 12,
                color: "#EF4444",
                fontFamily: "Inter_400Regular",
                marginBottom: 16,
              }}
            >
              {errors.description}
            </Text>
          )}

          {/* Price */}
          <PriceInput
            price={form.price}
            originalPrice={form.originalPrice}
            onPriceChange={(text) => updateField("price", text)}
            onOriginalPriceChange={(text) => updateField("originalPrice", text)}
            priceError={errors.price}
          />

          {/* Category */}
          <CategoryPicker
            selected={form.category}
            onSelect={(cat) => updateField("category", cat)}
            error={errors.category}
          />

          {/* Condition */}
          <ConditionPicker
            selected={form.condition}
            onSelect={(cond) => updateField("condition", cond)}
            error={errors.condition}
          />

          {/* Location */}
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: "#1C1917",
              marginBottom: 8,
            }}
          >
            Location
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderWidth: 1.5,
              borderColor: errors.location ? "#EF4444" : "#FED7AA",
              borderRadius: 12,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: errors.location ? 6 : 24,
            }}
          >
            <Ionicons
              name="location-outline"
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
              placeholder="e.g. Kathmandu, Nepal"
              placeholderTextColor="#A8A29E"
              value={form.location}
              onChangeText={(text) => updateField("location", text)}
            />
          </View>
          {errors.location && (
            <Text
              style={{
                fontSize: 12,
                color: "#EF4444",
                fontFamily: "Inter_400Regular",
                marginBottom: 16,
              }}
            >
              {errors.location}
            </Text>
          )}

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isSubmitting}
            style={{
              backgroundColor: isSubmitting ? "#FED7AA" : "#F97316",
              borderRadius: 16,
              paddingVertical: 18,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {isSubmitting ? (
              <ActivityIndicator color="white" />
            ) : (
              <>
                <Ionicons name="cloud-upload-outline" size={20} color="white" />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Inter_500Medium",
                    color: "white",
                  }}
                >
                  Post Listing
                </Text>
              </>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
