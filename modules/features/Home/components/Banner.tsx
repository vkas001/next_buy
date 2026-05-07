import { Text, TouchableOpacity, View } from "react-native";

interface BannerProps {
  title?: string;
  subtitle?: string;
  tag?: string;
  onPress?: () => void;
}

export default function Banner({
  title = "Up to 50% Off",
  subtitle = "On second-hand electronics",
  tag = "LIMITED TIME OFFER",
  onPress,
}: BannerProps) {
  return (
    <View
      style={{
        backgroundColor: "#2563EB",
        borderRadius: 24,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left Content */}
      <View style={{ flex: 1 }}>
        {/* Tag */}
        <Text
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.8)",
            marginBottom: 4,
            fontFamily: "Inter_500Medium",
          }}
        >
          {tag}
        </Text>

        {/* Title */}
        <Text
          style={{
            fontSize: 22,
            color: "white",
            marginBottom: 4,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          {title}
        </Text>

        {/* Subtitle */}
        <Text
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 12,
            fontFamily: "Inter_400Regular",
          }}
        >
          {subtitle}
        </Text>

        {/* Shop Now Button */}
        <TouchableOpacity
          onPress={onPress}
          style={{
            alignSelf: "flex-start",
            backgroundColor: "white",
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              color: "#2563EB",
              fontSize: 12,
              fontFamily: "Inter_500Medium",
            }}
          >
            Shop Now
          </Text>
        </TouchableOpacity>
      </View>

      {/* Decorative Circle */}
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: 40,
        }}
      />
    </View>
  );
}
