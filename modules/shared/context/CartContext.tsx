import { createContext, ReactNode, useContext, useState } from "react";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  condition: string;
  category: string;
  seller: string;
}

interface CartItem {
  id: string;
  product: CartProduct;
  quantity: number;
}

interface CartSummary {
  subtotal: number;
  shipping: number;
  total: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  summary: CartSummary;

  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  summary: {
    subtotal: 0,
    shipping: 0,
    total: 0,
  },
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // -------------------------
  // ADD TO CART
  // -------------------------
  const addToCart = (product: CartProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { id: product.id, product, quantity: 1 }];
    });
  };

  // -------------------------
  // REMOVE ITEM (FIXED)
  // -------------------------
  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  // -------------------------
  // QUANTITY CONTROL
  // -------------------------
  const increaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setCartItems([]);

  // -------------------------
  // DERIVED VALUES
  // -------------------------
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 100 : 0;

  const cartTotal = subtotal + shipping;

  const summary: CartSummary = {
    subtotal,
    shipping,
    total: cartTotal,
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        summary,

        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
