import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { PaymentMethod as PaymentMethodType } from "../types";

interface PaymentMethodProps {
  methods: PaymentMethodType[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function PaymentMethod({
  methods,
  selectedId,
  onSelect,
}: PaymentMethodProps) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins_600SemiBold",
          color: "#1C1917",
          marginBottom: 12,
        }}
      >
        Payment Method
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {methods.map((method) => (
          <TouchableOpacity
            key={method.id}
            onPress={() => onSelect(method.id)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 12,
              borderWidth: 1.5,
              backgroundColor: selectedId === method.id ? "#FFF7ED" : "#FFFFFF",
              borderColor: selectedId === method.id ? "#F97316" : "#FED7AA",
              gap: 8,
            }}
          >
            <Ionicons
              name={method.icon as any}
              size={18}
              color={selectedId === method.id ? "#F97316" : "#78716C"}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_500Medium",
                color: selectedId === method.id ? "#F97316" : "#78716C",
              }}
            >
              {method.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
