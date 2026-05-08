import { FlatList, Text, TouchableOpacity } from "react-native";

const filters = [
  "All",
  "Electronics",
  "Fashion",
  "Furniture",
  "Books",
  "Sports",
];

interface SearchFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SearchFilters({
  activeFilter,
  onFilterChange,
}: SearchFiltersProps) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={filters}
      keyExtractor={(item) => item}
      contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 12 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onFilterChange(item)}
          style={{
            marginRight: 8,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 999,
            borderWidth: 1,
            backgroundColor: activeFilter === item ? "#2563EB" : "#1E293B",
            borderColor: activeFilter === item ? "#2563EB" : "#334155",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_500Medium",
              color: activeFilter === item ? "white" : "#64748B",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
