import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: () => void;
}

export default function SearchBar({
  placeholder = "Search products...",
  onSearch,
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl px-4 py-1">
      {/* Search Icon */}
      <Ionicons name="search-outline" size={18} color="#64748B" />

      {/* Input */}
      <TextInput
        className="flex-1 ml-3 py-3 text-base font-body text-textPrimary dark:text-darkTextPrimary"
        placeholder={placeholder}
        placeholderTextColor="#64748B"
      />

      {/* Search Button */}
      <TouchableOpacity
        onPress={onSearch}
        className="bg-primary rounded-xl px-3 py-2"
      >
        <Ionicons name="search" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
