import { ThemeProvider } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import './global.css';


 

export default function RootLayout() {
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

