import { useLoadFonts } from "@/fonts/useLoadFonts";
import { ThemeProvider } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";


export default function RootLayout() {

const fontsLoaded = useLoadFonts();

if (!fontsLoaded) {
  return null; // or a loading spinner
}

  return (
    <ThemeProvider>
      <StatusBar style="auto"/>
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}

