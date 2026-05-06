import { useLoadFonts } from "@/fonts/useLoadFonts";
import { ThemeProvider } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  const { fontsLoaded, error } = useLoadFonts(); // ← destructure now
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === "dark" ? "#0F172A" : "#F8FAFC";

  // If fonts fail, continue without them (app still works)
  if (!fontsLoaded && !error) {
    return <View style={{ flex: 1, backgroundColor }} />;
  }

  return (
    <ThemeProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: { backgroundColor },
        }}
      >
        <Stack.Screen name="index" options={{ animation: "none" }} />
        <Stack.Screen
          name="landing"
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen name="auth" options={{ animation: "slide_from_right" }} />
        <Stack.Screen
          name="(tabs)"
          options={{ animation: "slide_from_right" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
