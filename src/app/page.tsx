"use client";

import ShopOurProducts from "@/components/ShopOurProducts";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import EnhancedCarousel from "@/components/ui/landingPage/Carousel";
import NewArrival from "@/components/ui/landingPage/NewArrival";
import ProductCategories from "@/components/ui/landingPage/ProductCategories";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const carouselItems = [
  {
    src: "/brands-carousel-1.png",
    alt: "corsx Skincare Products",
  },
  {
    src: "/brands-carousel-2.png",
    alt: "Lizara Skincare Products",
  },
  {
    src: "/brands-carousel-3.png",
    alt: "Derma factor Skincare Products",
  },
  {
    src: "/12-grabs-slide.png",
    alt: "12 Grabs Skincare Products",
  },
  {
    src: "/anua-slide.png",
    alt: "Anua Skincare Products",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-[#f8f4e8] py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            {/* Left content */}
            <div className="mb-8 w-full md:mb-0 md:ml-auto md:w-1/2 md:pr-8 md:pl-16">
              <h2 className="font-playfair text-2xl text-[#7a5c2d] md:text-3xl lg:text-6xl">
                DISCOVER
              </h2>
              <h1 className="font-playfair mt-2 mb-3 text-4xl font-bold text-black uppercase md:text-5xl lg:text-6xl">
                Authentic
                <br />
                KOREAN SKINCARE
              </h1>
              <p className="font-montserrat mb-6 text-base md:text-lg">
                Save more on your order!
              </p>
              <Link href="/shop">
                <Button
                  className="font-montserrat rounded bg-[#73512c] text-white uppercase hover:bg-[#5d4726]"
                  size="lg"
                >
                  Shop Now
                </Button>
              </Link>
            </div>

            {/* Right content - Product Image */}
            <div className="h-full w-full md:w-1/2">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/lizare-image-2.png"
                  alt="Lizara Korean Skincare Products"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesaler Banner */}
      <div className="font-montserrat container hidden w-full border-t border-b border-[#2c2c2c] bg-[#f8f4e8] py-3 font-semibold lg:block">
        <div className="container mx-auto flex items-center justify-center gap-6">
          <p className="font-montserrat mb-2 text-center text-sm font-semibold text-black md:text-base">
            JOIN THE HOK TRYBE & BECOME A WHOLESALER
          </p>
          <Link href="/wholesale">
            <Button
              className="border border-[#2D1801] bg-transparent text-xs font-medium text-[#2D1801] hover:bg-[#2D1801] hover:text-white md:text-sm"
              variant="outline"
            >
              JOIN NOW
            </Button>
          </Link>
        </div>
      </div>

      <section className="mb-8 w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    quality={100}
                    priority
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Carousel */}
      <div className="w-full">
        <EnhancedCarousel />
      </div>

      {/* Featured Products */}
      <div className="mt-14 w-full">
        <ShopOurProducts />
      </div>

      {/* Product Categories Section */}
      <div className="w-full">
        <ProductCategories />
      </div>

      {/* Testimonial */}
      <div className="my-44 w-full">
        <NewArrival />
      </div>

      {/* Newsletter */}
    </main>
  );
}
