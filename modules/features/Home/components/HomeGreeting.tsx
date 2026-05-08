import { Text, View } from "react-native";

interface HomeGreetingProps {
  title?: string;
  subtitle?: string;
}

export default function HomeGreeting({
  title = "Find Great Deals",
  subtitle = "Discover second-hand products near you",
}: HomeGreetingProps) {
  return (
    <View style={{ paddingHorizontal: 24, paddingBottom: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Poppins_600SemiBold",
          color: "#F8FAFC",
          marginBottom: 4,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontFamily: "Inter_400Regular",
          color: "#64748B",
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}
