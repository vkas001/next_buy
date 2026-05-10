import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
  icon: string;
  label: string;
  onPress?: () => void;
}

interface ProfileMenuProps {
  title: string;
  items: MenuItem[];
}

export default function ProfileMenu({ title, items }: ProfileMenuProps) {
  return (
    <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
      {/* Section Title */}
      <Text
        style={{
          fontSize: 11,
          fontFamily: "Inter_500Medium",
          color: "#64748B",
          marginBottom: 12,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {title}
      </Text>

      {/* Items */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#FED7AA",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {items.map((item, index) => (
          <TouchableOpacity
            key={item.label}
            onPress={item.onPress}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 16,
              borderBottomWidth: index !== items.length - 1 ? 1 : 0,
              borderBottomColor: "#FED7AA",
            }}
          >
            {/* Icon */}
            <View
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#FFF7ED",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons name={item.icon as any} size={18} color="#2563EB" />
            </View>

            {/* Label */}
            <Text
              style={{
                flex: 1,
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: "#1C1917",
              }}
            >
              {item.label}
            </Text>

            {/* Arrow */}
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color="#64748B"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
