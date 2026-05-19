import { createContext, ReactNode, useContext, useState } from "react";

interface WishlistProduct {
  id: string;
  name: string;
  price: string;
  condition: string;
}

interface WishlistContextType {
  wishlist: WishlistProduct[];
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (product: WishlistProduct) => void;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  isWishlisted: () => false,
  toggleWishlist: () => {},
  wishlistCount: 0,
});

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);

  const isWishlisted = (id: string) => wishlist.some((item) => item.id === id);

  const toggleWishlist = (product: WishlistProduct) => {
    setWishlist((prev) =>
      isWishlisted(product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product],
    );
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{ wishlist, isWishlisted, toggleWishlist, wishlistCount }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
