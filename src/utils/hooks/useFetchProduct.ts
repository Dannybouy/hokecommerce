/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProduct, getProducts } from "@/lib/shopify";
import { useQuery } from "@tanstack/react-query";

// Using less strict typing to accommodate the API response structure
export function useFetchProduct(handle: string, initialData?: any) {
  return useQuery({
    queryKey: ["product", handle],
    queryFn: () => getProduct(handle),
    enabled: !!handle, // Only run the query if we have a handle
    initialData,
  });
}

export function useFetchRelatedProducts(
  currentProductHandle: string,
  initialData?: any,
) {
  return useQuery({
    queryKey: ["related-products", currentProductHandle],
    queryFn: async () => {
      const { products: allProducts } = await getProducts();
      return allProducts
        .filter((product) => product.handle !== currentProductHandle)
        .slice(0, 4);
    },
    enabled: !!currentProductHandle,
    initialData,
  });
}
