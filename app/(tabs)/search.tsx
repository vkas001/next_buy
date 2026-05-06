import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F172A" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-base font-body text-textSecondary dark:text-darkTextSecondary">
          Search coming soon...
        </Text>
      </View>
    </SafeAreaView>
  );
}
