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
        paddingBottom: 16,
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Poppins_600SemiBold",
          color: "#F8FAFC",
        }}
      >
        Profile
      </Text>

      {/* Settings */}
      <TouchableOpacity
        onPress={onSettings}
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#1E293B",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#334155",
        }}
      >
        <Ionicons name="settings-outline" size={20} color="#64748B" />
      </TouchableOpacity>
    </View>
  );
}
