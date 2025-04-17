"use client";

import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/shopify";
import { Products } from "@/lib/shopify/types";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShopOurProducts() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products: fetchedProducts } = await getProducts({
          pageSize: 4,
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-playfair mb-3 text-4xl leading-[75px] lg:text-6xl">
            Shop Our <br />
            Products
          </h2>
          <p className="text-hokBlack font-montserrat mx-auto max-w-3xl text-[22px]">
            Shop quality skincare products discovered for you at both wholesale
            and retail price
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-md bg-white p-4 shadow"
              >
                <div className="mb-4 h-60 w-full rounded-md bg-gray-200"></div>
                <div className="mb-2 h-6 w-3/4 rounded bg-gray-200"></div>
                <div className="h-5 w-1/4 rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.handle}`}
                className="font-montserrat rounded-md p-4 shadow transition-shadow duration-300 hover:shadow-lg"
              >
                {product.featuredImage && (
                  <div className="relative mb-4 h-[200px] overflow-hidden rounded-md lg:h-[400px]">
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      className="object-cover"
                      sizes=""
                    />
                  </div>
                )}
                <h3 className="mb-1 text-lg font-medium">{product.title}</h3>
                <Image src="/stars.png" alt="stars" width={100} height={100} />
                <p className="text-lg font-bold">
                  {formatPrice(product.price, {
                    currencyCode: product.currencyCode,
                  })}
                </p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center lg:mt-24">
          <Button
            asChild
            className="bg-burntOrange hover:bg-burntOrange/90 px-8 py-2 text-white"
            size="lg"
          >
            <Link href="/shop">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
