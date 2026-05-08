import { Text, View } from "react-native";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <View className="mb-10">
      <Text className="text-base font-bodyMedium text-secondary mb-3">
        🛍️ NEXTBUY
      </Text>
      <Text className="text-4xl font-heading text-textPrimary dark:text-darkTextPrimary mb-2">
        {title}
      </Text>
      <Text className="text-sm font-body text-textSecondary dark:text-darkTextSecondary">
        {subtitle}
      </Text>
    </View>
  );
}
