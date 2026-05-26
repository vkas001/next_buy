import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ImagePickerProps {
  images: string[];
  onAddImage: () => void;
  onRemoveImage: (index: number) => void;
}

export default function ImagePicker({
  images,
  onAddImage,
  onRemoveImage,
}: ImagePickerProps) {
  return (
    <View style={{ marginBottom: 24 }}>
      {/* Label */}
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Inter_500Medium",
          color: "#1C1917",
          marginBottom: 12,
        }}
      >
        Product Photos
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Inter_400Regular",
          color: "#78716C",
          marginBottom: 12,
        }}
      >
        Add up to 5 photos. First photo will be the cover.
      </Text>

      {/* Image Grid */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
        {/* Existing Images */}
        {images.map((imageUri, index) => (
          <View
            key={index}
            style={{
              width: 100,
              height: 100,
              borderRadius: 12,
              backgroundColor: "#FFF7ED",
              borderWidth: 1,
              borderColor: "#FED7AA",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: imageUri }}
              style={{ width: "100%", height: "100%" }}
            />
            <TouchableOpacity
              onPress={() => onRemoveImage(index)}
              style={{
                position: "absolute",
                top: -6,
                right: -6,
                backgroundColor: "#EF4444",
                borderRadius: 10,
                width: 20,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="close" size={12} color="white" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Add Photo Button */}
        {images.length < 5 && (
          <TouchableOpacity
            onPress={onAddImage}
            style={{
              width: 100,
              height: 100,
              borderRadius: 12,
              backgroundColor: "#FFF7ED",
              borderWidth: 2,
              borderColor: "#FED7AA",
              borderStyle: "dashed",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="camera-outline" size={28} color="#F97316" />
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Inter_400Regular",
                color: "#F97316",
                marginTop: 4,
              }}
            >
              Add Photo
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
