import { Ionicons } from "@expo/vector-icons";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useScreenRefresh } from "@/modules/features/Home/hooks/useScreenRefresh";
import { useCart } from "@/modules/shared/context/CartContext";

import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import EmptyCart from "../components/EmptyCart";

export default function CartScreen() {
  const {
    cartItems = [],
    summary,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const { refreshing, onRefresh } = useScreenRefresh(async () => {
    // TODO: backend refresh logic
  });

  // ✅ SAFE FALLBACK (prevents crash if summary is undefined)
  const safeSummary = {
    subtotal: summary?.subtotal ?? 0,
    shipping: summary?.shipping ?? 0,
    total: summary?.total ?? 0,
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["top"]}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-4 pb-1">
        <Text className="text-3xl font-heading text-orange-500">
          My Cart 🛒
        </Text>

        {cartItems.length > 0 && (
          <View className="bg-primary rounded-full w-6 h-6 items-center justify-center">
            <Text className="text-white text-xs font-bodyMedium">
              {cartItems.length}
            </Text>
          </View>
        )}
      </View>

      {/* Divider */}
      <View className="mx-6 border-b border-border dark:border-darkBorder mb-4" />

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#2563EB"
              colors={["#2563EB"]}
            />
          }
        >
          {/* Cart Items */}
          <View className="px-6 mb-4">
            <Text className="text-sm font-bodyMedium text-textSecondary dark:text-darkTextSecondary mb-3">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </Text>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />
            ))}
          </View>

          {/* Voucher */}
          <TouchableOpacity className="mx-6 mb-4 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-4 flex-row items-center">
            <Ionicons name="ticket-outline" size={20} color="#2563EB" />
            <Text className="flex-1 text-sm font-body text-textSecondary dark:text-darkTextSecondary mx-3">
              Apply voucher or discount code
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color="#64748B"
            />
          </TouchableOpacity>

          {/* Order Summary (SAFE VERSION) */}
          <CartSummary
            summary={safeSummary}
            onCheckout={() => {
              // TODO: navigate to checkout
              console.log("Checkout pressed");
            }}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
