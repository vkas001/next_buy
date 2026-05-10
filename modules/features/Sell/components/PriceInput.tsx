import { Text, TextInput, View } from "react-native";

interface PriceInputProps {
  price: string;
  originalPrice: string;
  onPriceChange: (value: string) => void;
  onOriginalPriceChange: (value: string) => void;
  priceError?: string;
}

export default function PriceInput({
  price,
  originalPrice,
  onPriceChange,
  onOriginalPriceChange,
  priceError,
}: PriceInputProps) {
  const discount =
    price && originalPrice
      ? Math.round(
          ((Number(originalPrice) - Number(price)) / Number(originalPrice)) *
            100,
        )
      : 0;

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
        Pricing
      </Text>

      {/* Selling Price */}
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Inter_400Regular",
          color: "#78716C",
          marginBottom: 6,
        }}
      >
        Selling Price (Rs.)
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderWidth: 1.5,
          borderColor: priceError ? "#EF4444" : "#FED7AA",
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 14,
          marginBottom: 6,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            color: "#F97316",
            marginRight: 8,
          }}
        >
          Rs.
        </Text>
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            fontFamily: "Inter_500Medium",
            color: "#1C1917",
          }}
          placeholder="0"
          placeholderTextColor="#A8A29E"
          keyboardType="numeric"
          value={price}
          onChangeText={onPriceChange}
        />
      </View>
      {priceError && (
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter_400Regular",
            color: "#EF4444",
            marginBottom: 8,
          }}
        >
          {priceError}
        </Text>
      )}

      {/* Original Price */}
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Inter_400Regular",
          color: "#78716C",
          marginBottom: 6,
        }}
      >
        Original Price (Rs.) — optional
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderWidth: 1.5,
          borderColor: "#FED7AA",
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 14,
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            color: "#A8A29E",
            marginRight: 8,
          }}
        >
          Rs.
        </Text>
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            fontFamily: "Inter_500Medium",
            color: "#1C1917",
          }}
          placeholder="0"
          placeholderTextColor="#A8A29E"
          keyboardType="numeric"
          value={originalPrice}
          onChangeText={onOriginalPriceChange}
        />
      </View>

      {/* Discount Badge */}
      {discount > 0 && (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View
            style={{
              backgroundColor: "#F97316",
              borderRadius: 999,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_500Medium",
                color: "white",
              }}
            >
              {discount}% off
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: "#78716C",
            }}
          >
            Buyers will see this discount
          </Text>
        </View>
      )}
    </View>
  );
}
