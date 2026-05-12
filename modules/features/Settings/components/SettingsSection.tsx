import { Text, View } from "react-native";
import SettingsItem from "./SettingsItem";

interface Item {
  label: string;
  icon: string;
  type: "navigate" | "toggle" | "info";
  value?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
  destructive?: boolean;
}

interface SettingsSectionProps {
  title: string;
  items: Item[];
}

export default function SettingsSection({
  title,
  items,
}: SettingsSectionProps) {
  return (
    <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
      {/* Section Title */}
      <Text
        style={{
          fontSize: 11,
          fontFamily: "Inter_500Medium",
          color: "#A8A29E",
          marginBottom: 10,
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
          <SettingsItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            type={item.type}
            value={item.value}
            onPress={item.onPress}
            onToggle={item.onToggle}
            isLast={index === items.length - 1}
            destructive={item.destructive}
          />
        ))}
      </View>
    </View>
  );
}
