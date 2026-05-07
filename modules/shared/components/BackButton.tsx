import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

interface BackButtonProps {
  label?: string;
}

export default function BackButton({ label = "Back" }: BackButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="flex-row items-center mb-8 self-start"
    >
      <Ionicons name="arrow-back-outline" size={16} color="#64748B" />
      <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary ml-1">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
