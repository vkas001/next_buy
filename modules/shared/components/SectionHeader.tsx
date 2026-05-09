import { Text, TouchableOpacity, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

export default function SectionHeader({ title, onSeeAll }: SectionHeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins_600SemiBold",
          color: "#1C1917",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onSeeAll}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Inter_400Regular",
            color: "#F97316",
          }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
}
