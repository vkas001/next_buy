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
        backgroundColor: "#F97316",
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
        <View
          style={{
            alignSelf: "flex-start",
            backgroundColor: "rgba(255,255,255,0.25)",
            borderRadius: 999,
            paddingHorizontal: 10,
            paddingVertical: 3,
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "white",
              fontFamily: "Inter_500Medium",
            }}
          >
            {tag}
          </Text>
        </View>

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
            color: "rgba(255,255,255,0.85)",
            marginBottom: 14,
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
              color: "#F97316",
              fontSize: 12,
              fontFamily: "Inter_500Medium",
            }}
          >
            Shop Now →
          </Text>
        </TouchableOpacity>
      </View>

      {/* Decorative Circles */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 35,
          }}
        />
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 20,
            position: "absolute",
          }}
        />
      </View>
    </View>
  );
}
