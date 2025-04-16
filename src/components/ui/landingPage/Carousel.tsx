"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

// Collection data
const collections = [
  {
    id: 1,
    name: "Haircare",
    image: "/haircare.png",
    color: "bg-orange-100",
    url: "/collections/haircare",
  },
  {
    id: 2,
    name: "Bath & Body",
    image: "/bathbody.png",
    color: "bg-blue-100",
    url: "/collections/bath-body",
  },
  {
    id: 3,
    name: "Face",
    image: "/face.png",
    color: "bg-green-100",
    url: "/collections/face",
  },
];

export default function EnhancedCarousel() {
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
            {collections.map((collection) => (
              <CarouselItem
                key={collection.id}
                className="px-2 md:basis-1/2 lg:basis-1/2"
              >
                <Link href={collection.url} className="block">
                  <div
                    className={cn(
                      "mb-3 overflow-hidden rounded-lg",
                      collection.color,
                    )}
                  >
                    <div className="relative">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        width={500}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-inter text-center text-lg font-medium">
                    {collection.name}
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
