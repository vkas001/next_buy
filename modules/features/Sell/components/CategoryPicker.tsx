import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { ProductCategory } from "../types";

const categories: { label: ProductCategory; icon: string }[] = [
  { label: "Electronics", icon: "phone-portrait-outline" },
  { label: "Fashion", icon: "shirt-outline" },
  { label: "Furniture", icon: "bed-outline" },
  { label: "Books", icon: "book-outline" },
  { label: "Sports", icon: "football-outline" },
  { label: "Beauty", icon: "sparkles-outline" },
  { label: "Music", icon: "musical-notes-outline" },
  { label: "Other", icon: "grid-outline" },
];

interface CategoryPickerProps {
  selected: ProductCategory | null;
  onSelect: (category: ProductCategory) => void;
  error?: string;
}

export default function CategoryPicker({
  selected,
  onSelect,
  error,
}: CategoryPickerProps) {
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
        Category
      </Text>

      {/* Categories Grid */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.label}
            onPress={() => onSelect(cat.label)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 12,
              borderWidth: 1.5,
              backgroundColor: selected === cat.label ? "#F97316" : "#FFFFFF",
              borderColor: selected === cat.label ? "#F97316" : "#FED7AA",
              gap: 6,
            }}
          >
            <Ionicons
              name={cat.icon as any}
              size={16}
              color={selected === cat.label ? "white" : "#F97316"}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_500Medium",
                color: selected === cat.label ? "white" : "#78716C",
              }}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Error */}
      {error && (
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter_400Regular",
            color: "#EF4444",
            marginTop: 6,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
