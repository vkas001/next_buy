import { useCart } from "@/modules/shared/context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DeliveryAddress from "../components/DeliveryAddress";
import OrderReview from "../components/OrderReview";
import PaymentMethod from "../components/PaymentMethod";
import { useCheckout } from "../hooks/useCheckout";

export default function CheckoutScreen() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const deliveryFee = 150;
  const discount = cartItems.reduce((acc, item) => {
    const original = item.product.originalPrice ?? item.product.price;
    return acc + (original - item.product.price) * item.quantity;
  }, 0);
  const total = cartTotal + deliveryFee;
  const {
    addresses,
    paymentMethods,
    form,
    isPlacingOrder,
    updateForm,
    placeOrder,
  } = useCheckout();

  const handlePlaceOrder = async () => {
    const success = await placeOrder();
    if (success) {
      clearCart();
      Alert.alert(
        "Order Placed! 🎉",
        "Your order has been placed successfully.",
        [{ text: "Track Order", onPress: () => router.push("/orders") }],
      );
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#FED7AA",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1C1917" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_600SemiBold",
            color: "#1C1917",
          }}
        >
          Checkout
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingBottom: 120 }}
      >
        {/* Delivery Address */}
        <DeliveryAddress
          addresses={addresses}
          selectedId={form.addressId}
          onSelect={(id) => updateForm("addressId", id)}
        />

        {/* Payment Method */}
        <PaymentMethod
          methods={paymentMethods}
          selectedId={form.paymentMethodId}
          onSelect={(id) => updateForm("paymentMethodId", id)}
        />

        {/* Order Note */}
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_600SemiBold",
              color: "#1C1917",
              marginBottom: 12,
            }}
          >
            Order Note (optional)
          </Text>
          <TextInput
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#FED7AA",
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: "#1C1917",
              height: 100,
              textAlignVertical: "top",
            }}
            placeholder="Any special instructions for the seller..."
            placeholderTextColor="#A8A29E"
            value={form.note}
            onChangeText={(text) => updateForm("note", text)}
            multiline
          />
        </View>

        {/* Order Review */}
        <OrderReview
          subtotal={cartTotal}
          deliveryFee={deliveryFee}
          discount={discount}
          total={total}
        />
      </ScrollView>

      {/* Place Order Button */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 24,
          backgroundColor: "#FFF7ED",
          borderTopWidth: 1,
          borderTopColor: "#FED7AA",
        }}
      >
        <TouchableOpacity
          onPress={handlePlaceOrder}
          disabled={isPlacingOrder}
          style={{
            backgroundColor: isPlacingOrder ? "#FED7AA" : "#F97316",
            borderRadius: 16,
            paddingVertical: 18,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {isPlacingOrder ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color="white"
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter_500Medium",
                  color: "white",
                }}
              >
                Place Order — Rs. {total.toLocaleString()}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
