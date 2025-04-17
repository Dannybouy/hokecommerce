import DiscoveredForYou from "@/components/DiscoveredForYou";
import ShopOurProducts from "@/components/ShopOurProducts";
import Carousel from "@/components/ui/landingPage/Carousel";
import Newsletter from "@/components/ui/landingPage/Newsletter";
import SearchComponent from "@/components/ui/landingPage/search";
import Testimonial from "@/components/ui/landingPage/Testimonial";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-hokWhite min-h-screen">
      <SearchComponent />
      <div className="mt-[70px] text-center">
        <h2 className="font-playfair text-4xl leading-[95px] lg:text-7xl">
          <span className="text-burntOrange italic">Glow</span> & Shop with{" "}
        </h2>
        <h1 className="font-playfair mt-16 text-4xl leading-[95px] font-normal lg:text-[268px]">
          Ease!
        </h1>

        <section className="mt-20 grid grid-cols-4 gap-10 lg:mt-44">
          <div className="relative mt-10">
            <Image
              src="/hero-img-1.png"
              alt="hero image one"
              width={200}
              height={200}
            />
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-22 ml-22"
            >
              <path
                d="M29.5897 1.8311C29.906 0.299297 32.094 0.299296 32.4103 1.8311L36.9688 23.9121C37.085 24.475 37.525 24.915 38.0879 25.0312L60.1689 29.5897C61.7007 29.906 61.7007 32.094 60.1689 32.4103L38.0879 36.9688C37.525 37.085 37.085 37.525 36.9688 38.0879L32.4103 60.1689C32.094 61.7007 29.906 61.7007 29.5897 60.1689L25.0312 38.0879C24.915 37.525 24.475 37.085 23.9121 36.9688L1.8311 32.4103C0.299297 32.094 0.299296 29.906 1.8311 29.5897L23.9121 25.0312C24.475 24.915 24.915 24.475 25.0312 23.9121L29.5897 1.8311Z"
                fill="#1C1B19"
              />
            </svg>
          </div>
          <div className="col-span-2 mx-auto mt-3">
            <svg
              width="79"
              height="79"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mt-5"
            >
              <path
                d="M29.5897 1.8311C29.906 0.299297 32.094 0.299296 32.4103 1.8311L36.9688 23.9121C37.085 24.475 37.525 24.915 38.0879 25.0312L60.1689 29.5897C61.7007 29.906 61.7007 32.094 60.1689 32.4103L38.0879 36.9688C37.525 37.085 37.085 37.525 36.9688 38.0879L32.4103 60.1689C32.094 61.7007 29.906 61.7007 29.5897 60.1689L25.0312 38.0879C24.915 37.525 24.475 37.085 23.9121 36.9688L1.8311 32.4103C0.299297 32.094 0.299296 29.906 1.8311 29.5897L23.9121 25.0312C24.475 24.915 24.915 24.475 25.0312 23.9121L29.5897 1.8311Z"
                fill="#CC5500"
              />
            </svg>
            <div className="relative">
              <Image
                src="/hero-img-2.png"
                alt="hero image two"
                width={800}
                height={500}
                className="mt-20 rounded-xl object-cover"
              />

              <Image
                src="/sunflower-lg.png"
                alt="hero image two"
                width={150}
                height={150}
                className="absolute -bottom-10 -left-16"
              />
            </div>
          </div>
          <div className="relative">
            <svg
              width="100"
              height="100"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mt-5"
            >
              <path
                d="M29.5897 1.8311C29.906 0.299297 32.094 0.299296 32.4103 1.8311L36.9688 23.9121C37.085 24.475 37.525 24.915 38.0879 25.0312L60.1689 29.5897C61.7007 29.906 61.7007 32.094 60.1689 32.4103L38.0879 36.9688C37.525 37.085 37.085 37.525 36.9688 38.0879L32.4103 60.1689C32.094 61.7007 29.906 61.7007 29.5897 60.1689L25.0312 38.0879C24.915 37.525 24.475 37.085 23.9121 36.9688L1.8311 32.4103C0.299297 32.094 0.299296 29.906 1.8311 29.5897L23.9121 25.0312C24.475 24.915 24.915 24.475 25.0312 23.9121L29.5897 1.8311Z"
                fill="#8DBC86"
              />
            </svg>
            <Image
              src="/hero-img-3.png"
              alt="hero image three"
              width={200}
              height={200}
              className="absolute right-0"
            />
          </div>
        </section>
      </div>

      <div className="bg-cream rounded-3xl border border-[#2D18101]/50 text-center lg:mx-[127px] lg:mt-64 lg:py-[70px]">
        <h1 className="font-playfair text-8xl">Hey. Hi. Hello</h1>
        <p className="font-montserrat mt-5 mb-12 text-xl font-medium text-stone-900">
          WE&apos;RE HOK YOUR SKIN CARE BRAND
        </p>
        <Link
          href="/signup"
          className="flex items-end justify-center text-center"
        >
          <p className="font-playfair text-5xl font-medium text-stone-900">
            JOIN
            <br />
            WHOLE
            <br />
            SALERS{" "}
          </p>
          <span className="mb-2 flex size-10 items-center justify-center rounded-full bg-black hover:bg-black/50">
            <MoveUpRight className="text-hokGray" />
          </span>
        </Link>
      </div>

      <div className="mt-10 w-full">
        <div className="container mx-auto flex justify-between lg:max-w-2xl">
          <Image
            src="/sunflower-lg.png"
            alt="sunflower 1"
            width={110}
            height={110}
            className="mt-[69px] size-20"
          />
          <Image
            src="/sunflower-lg.png"
            alt="sunflower 3"
            width={300}
            height={300}
            className="mt-[151px] size-64"
          />
          <Image
            src="/sunflower-lg.png"
            alt="sunflower 2"
            width={110}
            height={110}
            className="size-28"
          />
        </div>
        <div className="mt-20 text-center">
          <h1 className="font-playfair max-w- mx-auto text-center text-2xl text-stone-900 lg:text-6xl">
            Best Selling Product
          </h1>

          <div className="container mx-auto mt-12 mb-6 max-w-5xl">
            <div className="flex gap-8">
              <Image
                src="/best-selling-img1.png"
                alt="best selling img 1"
                width={500}
                height={500}
                className="rounded-3xl object-cover"
              />
              <Image
                src="/best-selling-img2.png"
                alt="best selling img 1"
                width={500}
                height={500}
                quality={100}
                className="rounded-3xl object-contain"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl">
              <Image
                src="/best-selling-img3.png"
                alt="best selling img 1"
                width={1200}
                height={400}
                quality={100}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-44 w-full bg-white">
        <Carousel />
      </div>

      {/* Featured Products */}
      <div className="mt-44 w-full">
        <DiscoveredForYou />
        <ShopOurProducts />
      </div>

      {/* Testimonial */}
      <div className="bg-cream mt-44 w-full">
        <Testimonial />
      </div>

      {/* Newsletter */}
      <div className="w-full">
        <Newsletter />
      </div>
    </main>
  );
}
