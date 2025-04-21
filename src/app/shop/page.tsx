import Filters from "@/components/shop/filters";
import Pagination from "@/components/ui/pagination";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { getProducts } from "@/lib/shopify";
import { Products } from "@/lib/shopify/types";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

// Re-add the interface from shopify/index.ts for page props typing
// (Can't directly import from index.ts due to server/client boundary)
interface ShopPageSearchParams {
  minPrice?: string;
  maxPrice?: string;
  collections?: string | string[];
  vendors?: string | string[];
  productType?: string | string[];
  tags?: string | string[];
  category?: string | string[];
  page?: string;
  cursor?: string;
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams?: ShopPageSearchParams;
}) {
  const cursor = searchParams?.cursor || null;
  const pageSize = 15;

  // Get products with pagination
  const { products, pageInfo } = await getProducts({
    searchParams,
    cursor,
    pageSize,
  });

  // Build URLs for pagination links, preserving existing search params
  const buildPaginationUrls = (newCursor: string): string | null => {
    const params = new URLSearchParams();

    // Add all existing search params
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, value]) => {
        if (key !== "cursor") {
          // Don't copy the cursor parameter
          if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v));
          } else if (value) {
            params.append(key, value);
          }
        }
      });
    }

    // Add new cursor parameter
    if (newCursor) {
      params.set("cursor", newCursor);
    }

    return `/shop?${params.toString()}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Use container for better spacing */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* Render the Filters component */}
          <Filters />
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<ProductGridSkeleton />}>
            {/* Render the filtered products directly */}
            {/* Replace this with your actual ProductGrid component */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products && products.length > 0 ? (
                products.map(
                  (
                    product: Products, // Use imported Products type
                  ) => (
                    <Link
                      key={product.id}
                      href={`/shop/${product.handle}`}
                      className="group"
                    >
                      <div className="rounded border p-4 transition-shadow duration-200 group-hover:shadow-md">
                        {/* Basic Product Card - Replace with your design */}
                        {product.featuredImage && ( // Use featuredImage
                          <Image
                            src={product.featuredImage.url}
                            alt={product.featuredImage.altText || product.title}
                            width={product.featuredImage.width}
                            height={product.featuredImage.height}
                            className="mb-2 h-48 w-full object-cover "
                          />
                        )}
                        <h3 className="font-semibold font-montserrat">
                          {product.title}
                        </h3>
                        {/* Display price correctly */}
                        <p className="font-medium text-gray-700 font-montserrat">
                          {formatPrice(product.price, {
                            currencyCode: product.currencyCode,
                          })}
                        </p>
                      </div>
                    </Link>
                  ),
                )
              ) : (
                <p>No products found matching your filters.</p>
              )}
            </div>
            {/* TODO: Add Pagination controls here based on total product count and searchParams */}
            <Pagination
              hasNextPage={pageInfo.hasNextPage}
              hasPreviousPage={pageInfo.hasPreviousPage}
              startCursor={pageInfo.startCursor}
              endCursor={pageInfo.endCursor}
              buildUrl={buildPaginationUrls}
            />
          </Suspense>
          {/* <ShopClient initialProducts={products} /> */}
        </div>
      </div>
    </div>
  );
}
