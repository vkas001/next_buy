import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface AuthInputProps {
  label: string;
  placeholder: string;
  keyboardType?: any;
  autoCapitalize?: any;
  secureTextEntry?: boolean;
}

export default function AuthInput({
  label,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  secureTextEntry = false,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="mb-4">
      <Text className="text-sm font-bodyMedium text-textSecondary dark:text-darkTextSecondary mb-2">
        {label}
      </Text>
      <View className="w-full border border-border dark:border-darkBorder bg-card dark:bg-darkCard rounded-2xl flex-row items-center">
        <TextInput
          className="flex-1 px-4 py-4 text-base font-body text-textPrimary dark:text-darkTextPrimary"
          placeholder={placeholder}
          placeholderTextColor="#64748B"
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry && !showPassword}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="px-4"
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#64748B"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
