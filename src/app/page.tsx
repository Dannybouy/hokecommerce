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
      <section className="relative w-full py-0 md:py-16">
        {/* Mobile background image */}
        <div className="relative h-[50vh] w-full md:hidden">
          <Image
            src="/lizare-image-2.png"
            alt="Lizara Korean Skincare Products"
            fill
            className="object-cover"
            priority
          />
          {/* Mobile text overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/30 p-8 backdrop-blur-[2px]">
            <h2 className="font-playfair text-4xl font-bold text-[#b88e5b]">
              DISCOVER
            </h2>
            <h1 className="font-playfair mt-2 mb-3 text-4xl font-bold text-white uppercase">
              AUTHENTIC
              <br />
              KOREAN SKINCARE
            </h1>
            <p className="font-montserrat mb-6 text-base text-white">
              Save more on your order!
            </p>
            <Link href="/shop">
              <Button
                className="font-montserrat rounded bg-[#73512c] text-white uppercase hover:bg-[#5d4726]"
                size="lg"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="container mx-auto hidden px-4 md:block">
          <div className="flex items-center justify-between">
            {/* Left content */}
            <div className="mb-0 w-1/2 md:ml-auto md:pr-8 md:pl-16">
              <h2 className="font-playfair text-3xl text-[#7a5c2d] lg:text-6xl">
                DISCOVER
              </h2>
              <h1 className="font-playfair mt-2 mb-3 text-5xl font-bold text-black uppercase lg:text-6xl">
                Authentic
                <br />
                KOREAN SKINCARE
              </h1>
              <p className="font-montserrat mb-6 text-lg">
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
            <div className="h-full w-1/2">
              <div className="relative h-[400px] w-full lg:h-[500px]">
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
      <div className="font-montserrat w-full border-t border-b border-[#2c2c2c] py-3 lg:block">
        <div className="flex items-center justify-center px-4 text-center lg:gap-6">
          <p className="font-montserrat text-xs font-semibold text-black md:text-base text-left lg:text-center">
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

      <section className="mb-8 w-full border-b border-[#2c2c2c]">
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
      <div className=" lg:mt-14 w-full">
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
