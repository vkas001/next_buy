import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-darkBackground">
      <View className="flex-1 items-center justify-center bg-background dark:bg-darkBackground">
        <Text className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary">
          Welcome to Next Buy!
        </Text>
      </View>
    </SafeAreaView>
  );
}