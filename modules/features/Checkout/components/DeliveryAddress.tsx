import { Text, TouchableOpacity, View } from "react-native";
import { Address } from "../types";

interface DeliveryAddressProps {
  addresses: Address[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function DeliveryAddress({
  addresses,
  selectedId,
  onSelect,
}: DeliveryAddressProps) {
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
        Delivery Address
      </Text>
      {addresses.map((address) => (
        <TouchableOpacity
          key={address.id}
          onPress={() => onSelect(address.id)}
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            backgroundColor: "#FFFFFF",
            borderWidth: 1.5,
            borderColor: selectedId === address.id ? "#F97316" : "#FED7AA",
            borderRadius: 16,
            padding: 16,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selectedId === address.id ? "#F97316" : "#FED7AA",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
              marginTop: 2,
            }}
          >
            {selectedId === address.id && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#F97316",
                }}
              />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                  color: "#1C1917",
                }}
              >
                {address.name}
              </Text>
              {address.isDefault && (
                <View
                  style={{
                    backgroundColor: "#FFF7ED",
                    borderRadius: 999,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderWidth: 1,
                    borderColor: "#FED7AA",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: "Inter_500Medium",
                      color: "#F97316",
                    }}
                  >
                    Default
                  </Text>
                </View>
              )}
            </View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
              }}
            >
              {address.street}, {address.city}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Inter_400Regular",
                color: "#78716C",
              }}
            >
              {address.phone}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
