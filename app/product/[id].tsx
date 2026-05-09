import ProductDetailScreen from "@/modules/features/Product/screens/ProductDetailScreen";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <ProductDetailScreen productId={id} />;
}
