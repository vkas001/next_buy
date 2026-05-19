import { useLoadFonts } from "@/fonts/useLoadFonts";
import { AppProvider } from "@/modules/shared/context/AppContext";
import { ThemeProvider } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "../global.css";

export default function RootLayout() {
  const { fontsLoaded, error } = useLoadFonts();
  const backgroundColor = "#FFF7ED";

  if (!fontsLoaded && !error) {
    return <View style={{ flex: 1, backgroundColor }} />;
  }

  return (
    <AppProvider>
      <ThemeProvider>
        <StatusBar style="dark" />
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
          <Stack.Screen
            name="auth"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{ animation: "slide_from_right" }}
          />
        </Stack>
      </ThemeProvider>
    </AppProvider>
  );
}
