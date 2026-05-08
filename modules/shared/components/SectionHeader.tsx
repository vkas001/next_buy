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
        marginBottom: 6,
      }}
    >
      <Text
        style={{
          fontSize: 23,
          fontFamily: "Poppins_600SemiBold",
          color: "#F8FAFC",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onSeeAll}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Inter_400Regular",
            color: "#2563EB",
          }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
}
