"use client";

import { Filters } from "@/components/shop/filters";
import ProductGrid from "@/components/shop/product-grid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProducts } from "@/lib/shopify";
import { useEffect, useState } from "react";

// Define the Product type to match what's in ProductGrid
interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: string;
  currencyCode: string;
  image: {
    url: string;
    altText: string | null;
  };
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
        console.log("Products fetched:", fetchedProducts);

        if (fetchedProducts && Array.isArray(fetchedProducts)) {
          setProducts(fetchedProducts);
        } else {
          setError(
            "Could not retrieve products. Check browser console for details.",
          );
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(
          "Failed to load products. Please check your Shopify configuration.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleFilterChange = (filters: {
    colors: string[];
    sizes: string[];
    collections: string[];
    brands: string[];
    skinTypes: string[];
    skinConcerns: string[];
    priceRange: [number, number];
    sortOption: string;
    viewMode: "grid" | "list";
  }) => {
    // Update viewMode when filter changes
    setViewMode(filters.viewMode);

    // Apply other filters here
    // This would filter the products array based on selected criteria
  };

  // Render the product content based on loading/error state
  const renderProductContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="mb-2 aspect-square rounded-md bg-gray-200"></div>
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="py-10 text-center text-red-500">
          <h2 className="text-xl font-medium">Error</h2>
          <p className="mt-2">{error}</p>
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <div className="py-10 text-center">
          <h2 className="text-xl font-medium">No products found</h2>
          <p className="mt-2 text-gray-500">
            Try adjusting your filters or check back later.
          </p>
        </div>
      );
    }

    return (
      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {products.map((product) => (
          <ProductGrid key={product.id} products={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="mx-auto px-10 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Filters onFilterChange={handleFilterChange} />
        </div>
        <div className="md:col-span-3">
          {/* Sort Dropdown */}
          <div className="mb-5 flex items-center justify-end">
            <Select
              value={sortOption}
              onValueChange={(value) => {
                setSortOption(value);
              }}
            >
              <SelectTrigger className="w-[180px] bg-white">
                <span className="mr-2">Sort</span>
                <SelectValue placeholder="Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {renderProductContent()}
        </div>
      </div>
    </div>
  );
}
