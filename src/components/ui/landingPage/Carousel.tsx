"use client";

import type React from "react";
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
      <div className="text-center">
        <h1 className="font-valky text-cente text-2xl text-stone-900 lg:text-9xl">
          Shop By Collection
        </h1>
      </div>

      {/* Tagline */}
      <div className="mx-auto mb-12 text-center lg:max-w-3xl">
        <p className="font-inter mt-11 text-base text-stone-900 lg:text-xl">
          YOUR DAILY MORNING COFEE. DEPENDABLE AND INTENTIONAL ESSENTIALS WHEN
          YOU’RE CRAVING YOUR GO-TO’S FOR HEALTH SKIN.
        </p>
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
                className="md:basis-1/2 px-2 lg:basis-1/2"
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
                        className="object-cover rounded-lg"
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
