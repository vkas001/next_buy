import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface ProfileHeaderProps {
  onSettings?: () => void;
}

export default function ProfileHeader({ onSettings }: ProfileHeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 1,
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Poppins_600SemiBold",
          color: "#F97316",
        }}
      >
        Profile👤
      </Text>

      {/* Settings */}
      <TouchableOpacity
        onPress={onSettings}
        style={{
          width: 33,
          height: 33,
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#FED7AA",
        }}
      >
        <Ionicons name="settings-outline" size={20} color="#64748B" />
      </TouchableOpacity>
    </View>
  );
}
