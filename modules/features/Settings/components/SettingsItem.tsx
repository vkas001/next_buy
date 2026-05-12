import { Ionicons } from "@expo/vector-icons";
import { Switch, Text, TouchableOpacity, View } from "react-native";

interface SettingsItemProps {
  label: string;
  icon: string;
  type: "navigate" | "toggle" | "info";
  value?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
  isLast?: boolean;
  destructive?: boolean;
}

export default function SettingsItem({
  label,
  icon,
  type,
  value,
  onPress,
  onToggle,
  isLast,
  destructive,
}: SettingsItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={type === "toggle"}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: isLast ? 0 : 1,
        borderBottomColor: "#FED7AA",
      }}
    >
      {/* Icon */}
      <View
        style={{
          width: 36,
          height: 36,
          backgroundColor: destructive ? "#FEF2F2" : "#FFF7ED",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 14,
        }}
      >
        <Ionicons
          name={icon as any}
          size={18}
          color={destructive ? "#EF4444" : "#F97316"}
        />
      </View>

      {/* Label */}
      <Text
        style={{
          flex: 1,
          fontSize: 14,
          fontFamily: "Inter_400Regular",
          color: destructive ? "#EF4444" : "#1C1917",
        }}
      >
        {label}
      </Text>

      {/* Right side */}
      {type === "navigate" && (
        <Ionicons name="chevron-forward-outline" size={16} color="#A8A29E" />
      )}
      {type === "toggle" && (
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: "#FED7AA", true: "#F97316" }}
          thumbColor="white"
        />
      )}
    </TouchableOpacity>
  );
}
