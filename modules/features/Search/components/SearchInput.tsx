import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}

export default function SearchInput({
  value,
  onChangeText,
  onClear,
}: SearchInputProps) {
  return (
    <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 }}>
      {/* Title */}
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Poppins_600SemiBold",
          color: "#F8FAFC",
          marginBottom: 16,
        }}
      >
        Search
      </Text>

      {/* Input */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#1E293B",
          borderWidth: 1,
          borderColor: "#334155",
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <Ionicons name="search-outline" size={18} color="#64748B" />
        <TextInput
          style={{
            flex: 1,
            marginLeft: 10,
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: "#F8FAFC",
          }}
          placeholder="Search products..."
          placeholderTextColor="#64748B"
          value={value}
          onChangeText={onChangeText}
        />
        {value.length > 0 && (
          <TouchableOpacity onPress={onClear}>
            <Ionicons name="close-circle" size={18} color="#64748B" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
