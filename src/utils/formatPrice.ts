import { Product } from "@/lib/shopify/types";

export const formatPrice = (price: string, product: Product) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: product.currencyCode || "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(`${price}.00`));
};
