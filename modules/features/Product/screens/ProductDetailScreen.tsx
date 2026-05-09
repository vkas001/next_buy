import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductActions from "../components/ProductActions";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import SellerCard from "../components/SellerCard";
import { useProductDetail } from "../hooks/useProductDetail";

interface ProductDetailScreenProps {
  productId: string;
}

export default function ProductDetailScreen({
  productId,
}: ProductDetailScreenProps) {
  const router = useRouter();
  const { product, isWishlisted, toggleWishlist, addToCart, buyNow } =
    useProductDetail(productId);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF7ED" }}
      edges={["bottom"]}
    >
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Product Images */}
        <ProductImages
          images={product.images}
          onBack={() => router.back()}
          onWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />

        {/* Product Info */}
        <ProductInfo
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          condition={product.condition}
          category={product.category}
          location={product.location}
          postedDate={product.postedDate}
          views={product.views}
          description={product.description}
          tags={product.tags}
        />

        {/* Seller Card */}
        <SellerCard
          seller={product.seller}
          onViewProfile={() => {
            // TODO: navigate to seller profile
          }}
          onChat={() => {
            // TODO: navigate to chat screen
          }}
        />
      </ScrollView>

      {/* Fixed Bottom Actions */}
      <View className="absolute bottom-0 left-0 right-0">
        <ProductActions onAddToCart={addToCart} onBuyNow={buyNow} />
      </View>
    </SafeAreaView>
  );
}
