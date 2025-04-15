import ShopClient from "@/components/shop/shop-client";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { getProducts } from "@/lib/shopify";
import { Suspense } from "react";

export default async function ShopPage() {
  // Server-side data fetching
  const products = await getProducts();

  return (
    <div className="mx-auto px-10 py-8">
      <Suspense fallback={<ProductGridSkeleton />}>
        <ShopClient initialProducts={products} />
      </Suspense>
    </div>
  );
}
