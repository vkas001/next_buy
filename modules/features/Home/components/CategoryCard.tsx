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
      style={{ width: 70, alignItems: "center", marginRight: 1 }}
    >
      {/* Icon Box */}
      <View
        style={{
          width: 56,
          height: 56,
          backgroundColor: "#1E293B",
          borderWidth: 1,
          borderColor: "#334155",
          borderRadius: 29,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
        }}
      >
        <Ionicons name={icon as any} size={24} color="#1CD9B9" />
      </View>

      {/* Label */}
      <Text
        numberOfLines={1}
        style={{
          fontSize: 11,
          color: "white",
          textAlign: "center",
          fontFamily: "Inter_400Regular",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
