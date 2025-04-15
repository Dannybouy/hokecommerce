import { getProducts } from "@/lib/shopify";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllProducts = () => {
  return useQuery({
    queryKey: ["get-all-products"],
    queryFn: getProducts,
  });
};
