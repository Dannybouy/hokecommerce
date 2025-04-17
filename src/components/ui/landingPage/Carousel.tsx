"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useFetchAllCollections } from "@/utils/hooks/useFetchAllCollections";
import Image from "next/image";
import Link from "next/link";

export default function EnhancedCarousel() {
  const { data: collections, isLoading, error } = useFetchAllCollections();

  console.log(collections);

  // Loading state with skeleton
  if (isLoading) {
    return (
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="mb-10 text-center">
          <h1 className="font-playfair mx-auto text-center text-2xl text-stone-900 lg:max-w-80 lg:text-7xl">
            Shop By Collection
          </h1>
        </div>

        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="mb-3 h-60 rounded-lg bg-gray-200"></div>
              <div className="mx-auto h-6 w-24 rounded-md bg-gray-200"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="mb-10 text-center">
          <h1 className="font-playfair mx-auto text-center text-2xl text-stone-900 lg:max-w-80 lg:text-7xl">
            Shop By Collection
          </h1>
        </div>
        <div className="rounded-lg bg-red-50 p-4 text-center text-red-500">
          {error.message}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto max-w-5xl px-4 py-16">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="font-playfair mx-auto text-center text-2xl text-stone-900 lg:max-w-80 lg:text-7xl">
          Shop By Collection
        </h1>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Slides container */}
        <Carousel
          className="mx-8 w-full"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="flex">
            {collections?.map((collection) => (
              <CarouselItem
                key={collection.id}
                className="px-2 md:basis-1/2 lg:basis-1/2 rounded-lg overflow-hidden"
              >
                <Link
                  href={`/shop?collections=${collection.handle}`}
                  className="block"
                >
                  <div className={cn("mb-3 overflow-hidden rounded-l")}>
                    <div className="relative h-[400px] w-full lg:h-[700px]">
                      {collection.image ? (
                        <Image
                          src={collection.image.url}
                          alt={collection.image.altText || collection.title}
                          fill
                          className="rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-100">
                          <p className="text-lg font-medium text-gray-500">
                            {collection.title}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-inter text-center text-lg font-medium">
                    {collection.title}
                  </h3>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-goldenBrown text-goldenBrown cursor-pointer hover:bg-gray-100" />
          <CarouselNext className="border-goldenBrown text-goldenBrown cursor-pointer hover:bg-gray-100" />
        </Carousel>
      </div>
    </section>
  );
}
