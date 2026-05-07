import { Text, TouchableOpacity } from "react-native";

interface AuthButtonProps {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "outline";
}

export default function AuthButton({
  label,
  onPress,
  variant = "primary",
}: AuthButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-2xl py-4 items-center mb-4 ${
        variant === "primary"
          ? "bg-primary dark:bg-darkPrimary"
          : "border border-border dark:border-darkBorder"
      }`}
    >
      <Text
        className={`text-base font-bodyMedium ${
          variant === "primary"
            ? "text-white"
            : "text-textPrimary dark:text-darkTextPrimary"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
