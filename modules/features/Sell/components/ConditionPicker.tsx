import { Text, TouchableOpacity, View } from "react-native";
import { ProductCondition } from "../types";

const conditions: { label: ProductCondition; description: string }[] = [
  { label: "Like New", description: "Never used or barely used" },
  { label: "Good", description: "Minor signs of use" },
  { label: "Fair", description: "Visible wear but fully functional" },
  { label: "Poor", description: "Heavy wear, may need repair" },
];

const conditionColors: Record<ProductCondition, string> = {
  "Like New": "#10B981",
  Good: "#F97316",
  Fair: "#F59E0B",
  Poor: "#EF4444",
};

interface ConditionPickerProps {
  selected: ProductCondition | null;
  onSelect: (condition: ProductCondition) => void;
  error?: string;
}

export default function ConditionPicker({
  selected,
  onSelect,
  error,
}: ConditionPickerProps) {
  return (
    <View style={{ marginBottom: 24 }}>
      {/* Label */}
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Inter_500Medium",
          color: "#1C1917",
          marginBottom: 12,
        }}
      >
        Condition
      </Text>

      {/* Condition Options */}
      <View style={{ gap: 10 }}>
        {conditions.map((cond) => (
          <TouchableOpacity
            key={cond.label}
            onPress={() => onSelect(cond.label)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 14,
              borderRadius: 12,
              borderWidth: 1.5,
              backgroundColor: selected === cond.label ? "#FFF7ED" : "#FFFFFF",
              borderColor:
                selected === cond.label
                  ? conditionColors[cond.label]
                  : "#FED7AA",
            }}
          >
            {/* Color Dot */}
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: conditionColors[cond.label],
                marginRight: 12,
              }}
            />

            {/* Text */}
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                  color: "#1C1917",
                }}
              >
                {cond.label}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_400Regular",
                  color: "#78716C",
                }}
              >
                {cond.description}
              </Text>
            </View>

            {/* Check */}
            {selected === cond.label && (
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: conditionColors[cond.label],
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Error */}
      {error && (
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter_400Regular",
            color: "#EF4444",
            marginTop: 6,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
