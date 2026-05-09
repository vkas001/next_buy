import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface CategoryCardProps {
  name: string;
  icon: string;
  onPress?: () => void;
}

export default function CategoryCard({
  name,
  icon,
  onPress,
}: CategoryCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: 72, alignItems: "center", marginRight: 12 }}
    >
      {/* Icon Box */}
      <View
        style={{
          width: 56,
          height: 56,
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#FED7AA",
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
        }}
      >
        <Ionicons name={icon as any} size={24} color="#F97316" />
      </View>

      {/* Label */}
      <Text
        numberOfLines={1}
        style={{
          fontSize: 11,
          color: "#78716C",
          textAlign: "center",
          fontFamily: "Inter_400Regular",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
