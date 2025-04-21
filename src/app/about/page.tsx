import { Button } from "@/components/ui/button";
import Newsletter from "@/components/ui/landingPage/Newsletter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <main className="px-6 lg:px-0">
      <div className="container mx-auto mt-22">
        <h2 className="font-playfair text-center text-6xl">About</h2>
        
      </div>

      <section
        id="story"
        className="relative container mx-auto mt-22 lg:px-[119px]"
      >
        <h2 className="font-playfair text-6xl text-[#2D1801]">
          Our Brand <br />
          Story: Why HOK?
        </h2>
        <p className="
          font-montserrat mt-5 lg:mt-10 md:text-lg
          leading-10 font-medium text-pretty text-black
        ">
          At Home of Korean Beauty (HOK), skincare isn&apos;t just a
          routine—it&apos;s a journey to confidence, radiance, and self-care. We
          saw a growing need for authentic, high-quality Korean skincare in
          Nigeria, but finding the right products was a challenge. Too many
          beauty lovers struggled with counterfeit products, lack of expert
          guidance, and skincare that wasn&apos;t tailored to our climate.
          That&apos;s why we created HOK—to be Nigeria&apos;s #1 destination for
          trusted K-beauty, offering only genuine, dermatologist-backed skincare
          that works for all skin types and concerns. From hydrating essentials
          to targeted treatments for acne, hyperpigmentation, and aging, we
          bring the best of Korean innovation straight to you.
        </p>
        
        <div className="relative mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-10">
          <Image
            src="/why-hok1.png"
            alt="why hok 1"
            width={350}
            height={350}
            quality={100}
            priority
            className="object-cover"
          />
          <Image
            src="/why-hok2.png"
            alt="why hok 2"
            width={350}
            height={350}
            quality={100}
            priority
            className="object-cover"
          />
          <Image
            src="/why-hok3.png"
            alt="why hok 3"
            width={350}
            height={350}
            quality={100}
            priority
            className="object-cover"
          />
          <Image
            src="/why-hok4.png"
            alt="why hok 4"
            width={350}
            height={350}
            quality={100}
            priority
            className="object-cover"
          />
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 -left-16"
          >
            <path
              d="M18.5897 1.8311C18.906 0.299292 21.094 0.299294 21.4103 1.8311L24.0865 14.7944C24.2027 15.3574 24.6426 15.7973 25.2056 15.9135L38.1689 18.5897C39.7007 18.906 39.7007 21.094 38.1689 21.4103L25.2056 24.0865C24.6426 24.2027 24.2027 24.6426 24.0865 25.2056L21.4103 38.1689C21.094 39.7007 18.906 39.7007 18.5897 38.1689L15.9135 25.2056C15.7973 24.6426 15.3574 24.2027 14.7944 24.0865L1.8311 21.4103C0.299292 21.094 0.299294 18.906 1.8311 18.5897L14.7944 15.9135C15.3574 15.7973 15.7973 15.3574 15.9135 14.7944L18.5897 1.8311Z"
              fill="#1C1B19"
            />
          </svg>
        </div>
      </section>

      <section id="brand" className="container mx-auto mt-22 lg:px-[119px]">
        <div className="flex items-center justify-between">
          <h2 className="font-playfair text-4xl md:text-6xl text-[#2D1801]">
            Our Brands: <br />
            Only the Best for Your Skin
          </h2>
          <Image
            src="/sunflower-lg.png"
            alt="sunflower"
            width={80}
            height={80}
          />
        </div>
        <div className="mt-10">
          <Image
            src="/our-brand.png"
            alt="our brands"
            width={1200}
            height={100}
            quality={100}
            priority
            className="w-full rounded-xl object-cover"
          />
          <p className="font-montserrat mt-10 md:text-lg leading-10 font-medium text-black">
            At Home of Korean Beauty (HOK), we don&apos;t just sell skincare, we
            bring trusted, effective K-beauty solutions straight to your
            doorstep. We know the struggle of finding authentic products that
            truly work for our African skin and climate, so we went all the way
            to Korea to partner with brands that deliver real results.
          </p>
        </div>
        <div className="mt-22">
          <div>
            <h2 className="font-montserrat mb-5 text-2xl font-bold text-black/70">
              Derma Factory
            </h2>

            <div className="flex flex-col items-start gap-6 overflow-hidden rounded-xl md:flex-row">
              <div className="border-gold shadow-gold w-full rounded-[18px] border-[3px] shadow-xl md:w-1/2 lg:w-[600px]">
                <Image
                  src="/derma-factory.jpg"
                  alt="Derma factory"
                  width={600}
                  height={500}
                  quality={100}
                  priority
                  className="h-auto w-full rounded-[15px] object-cover"
                />
              </div>
              <div className="flex w-full flex-col md:w-1/2 md:p-8">
                <p className="font-montserrat mb-6 text-base leading-relaxed font-medium text-pretty text-black/70 md:text-xl lg:max-w-xl">
                  Science meets skincare! Powered by high-performance
                  ingredients, Derma Factory delivers effective, no-nonsense
                  solutions for every skin type. Whether it&apos;s hydration,
                  brightening, or anti-aging, this brand focuses on pure,
                  concentrated formulas that work.
                </p>
                <div className="mt-auto">
                  <Link href="/shop">
                    <Button className="font-montserrat rounded-full bg-[#2d1801] px-8 py-2 font-medium tracking-wide text-white hover:bg-[#472b07]">
                      SHOP NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item-center mr-20 flex justify-end">
              <svg
                width="160"
                height="202"
                viewBox="0 0 160 202"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5084 198.85L30.104 195.355L30.8328 201.083L25.5084 198.85ZM29.9 197.787C61.5256 193.662 91.3723 187.582 114.387 178.724C137.439 169.853 153.473 158.257 157.754 143.206C162.024 128.193 154.668 109.455 130.182 86.097C105.718 62.7605 64.2827 34.9409 0.768793 1.80858L1.2313 0.921965C64.773 34.0688 106.306 61.9399 130.872 85.3734C155.415 108.786 163.148 127.896 158.716 143.48C154.295 159.025 137.834 170.772 114.747 179.658C91.6226 188.557 61.6852 194.65 30.0293 198.779L29.9 197.787Z"
                  fill="#CC5500"
                />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="font-montserrat mb-5 text-2xl font-bold text-black/70">
              12 Grabs
            </h2>

            <div className="flex flex-col items-start gap-6 overflow-hidden rounded-xl md:flex-row">
              <div className="shadow-burntOrange order-2 w-full rounded-[18px] shadow-lg md:w-1/2 lg:w-[600px]">
                <Image
                  src="/12grabs.jpg"
                  alt="Derma factory"
                  width={600}
                  height={500}
                  quality={100}
                  priority
                  className="h-auto w-full rounded-[15px] object-cover"
                />
              </div>
              <div className="md: order-1 flex w-full flex-col md:w-1/2">
                <p className="font-montserrat mb-6 text-base leading-relaxed font-medium text-pretty text-black/70 md:text-xl lg:max-w-xl">
                  Your go-to for gentle yet powerful skincare! 12 Grabs
                  harnesses the power of natural extracts and skin-friendly
                  actives to keep your skin healthy, hydrated, and
                  glowing—without irritation. Perfect for those who love simple,
                  effective beauty.
                </p>
                <div className="mt-auto">
                  <Link href="/shop">
                    <Button className="font-montserrat rounded-full bg-[#2d1801] px-8 py-2 font-medium tracking-wide text-white hover:bg-[#472b07]">
                      SHOP NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item-center mt-10 mr-20 flex justify-center">
              <svg
                width="274"
                height="171"
                viewBox="0 0 274 171"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M250.405 1.34029C250.405 1.34029 172.128 39.7401 173.995 57.5846C177.402 90.1484 263.853 66.3337 272.736 97.8471C279.965 123.488 0.547028 169.407 0.547028 169.407"
                  stroke="#CC5500"
                  stroke-width="2.07174"
                />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="font-montserrat mb-5 text-2xl font-bold text-black/70">
              COSRX
            </h2>

            <div className="flex flex-col items-start gap-6 overflow-hidden rounded-xl md:flex-row">
              <div className="border-gold shadow-gold w-full rounded-[18px] border-[3px] shadow-xl md:w-1/2 lg:w-[600px]">
                <Image
                  src="/corsx-image.png"
                  alt="Derma factory"
                  width={600}
                  height={500}
                  quality={100}
                  priority
                  className="h-auto w-full rounded-[15px] object-cover"
                />
              </div>
              <div className="flex w-full flex-col p-5 md:w-1/2 md:p-8">
                <p className="font-montserrat mb-6 text-base leading-relaxed font-medium text-pretty text-black/70 md:text-xl lg:max-w-xl">
                  A cult-favorite Korean skincare brand loved for its minimalist
                  formulas with maximum results. Whether you&apos;re battling
                  acne, dryness, or dull skin, COSRX&apos;s ingredient-focused
                  solutions (hello, snail mucin & centella!) are designed to
                  heal, soothe, and transform.
                </p>
                <div className="mt-auto">
                  <Link href="/shop">
                    <Button className="font-montserrat rounded-full bg-[#2d1801] px-8 py-2 font-medium tracking-wide text-white hover:bg-[#472b07]">
                      SHOP NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item-center my-5 ml-20 flex justify-start">
              <svg
                width="109"
                height="203"
                viewBox="0 0 109 203"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M95.3345 199.851L90.5493 196.62L90.1444 202.38L95.3345 199.851ZM90.8779 199.036C68.9886 197.351 48.3733 193.578 32.4533 186.527C16.5359 179.477 5.38729 169.188 2.26039 154.499C-0.871741 139.786 4.00833 120.504 20.5337 95.3931C37.0523 70.2926 65.1586 39.4428 108.329 1.63012L107.67 0.877876C64.4688 38.7176 36.2875 69.6357 19.6983 94.8434C3.11583 120.041 -1.93219 139.607 1.2823 154.708C4.50203 169.832 15.9748 180.322 32.0484 187.441C48.1194 194.559 68.865 198.345 90.8011 200.033L90.8779 199.036Z"
                  fill="#CC5500"
                />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="font-montserrat mb-5 text-2xl font-bold text-black/70">
              Lizare
            </h2>

            <div className="flex flex-col items-start gap-6 overflow-hidden rounded-xl md:flex-row">
              <div className="border-burntOrange shadow-burntOrange order-2 w-full rounded-[18px] border-[3px] shadow-xl md:w-1/2 lg:w-[600px]">
                <Image
                  src="/lizare-image.png"
                  alt="Derma factory"
                  width={600}
                  height={500}
                  quality={100}
                  priority
                  className="h-auto w-full rounded-[15px] object-cover"
                />
              </div>
              <div className="order-1 flex w-full flex-col md:w-1/2">
                <p className="font-montserrat mb-6 text-base leading-relaxed font-medium text-pretty text-black/70 md:text-xl lg:max-w-xl">
                  Luxury meets nature in Lizara&apos;s carefully crafted
                  skincare. Infused with premium botanical extracts, this brand
                  offers a balance of traditional herbal wisdom and modern
                  skincare science to nourish and rejuvenate your skin.
                </p>
                <div className="mt-auto">
                  <Link href="/shop">
                    <Button className="font-montserrat rounded-full bg-[#2d1801] px-8 py-2 font-medium tracking-wide text-white hover:bg-[#472b07]">
                      SHOP NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="source" className="container mx-auto mt-22 lg:px-[119px]">
        <Image
          src="/sunflower-lg.png"
          alt="sunflower"
          width={100}
          height={100}
          className="lg:ml-[20%]"
        />
        <h2 className="font-playfair mt-10 text-4xl md:text-6xl text-[#2D1801]">
          How <br className="hidden md:block" /> we Source
        </h2>
        <div className="mt-10">
          <Image
            src="/appointment.png"
            alt="our brands"
            width={1200}
            height={100}
            quality={100}
            priority
            className="w-full rounded-xl object-cover"
          />
          <div className="font-montserrat mt-10">
            <span className="text-lg font-bold text-black/70">
              The HOK Sourcing Process:
            </span>
            <ul className="list-none md:text-lg leading-10 font-medium text-black/70 space-y-3">
              <li>
                Authentic Korean Skincare, Straight from Seoul to Nigeria
              </li>
              <li className="mt-3">
                No fakes. No shortcuts. Just 100% authentic,
                dermatologist-backed skincare.
              </li>
              <li className="mt-3">
                At Home of Korean Beauty (HOK), we know how frustrating it is to
                waste money on fake or ineffective skincare. That&apos;s why we
                go the extra mile—sourcing directly from trusted Korean brands
                and manufacturers to bring you the real deal.
              </li>
            </ul>

            <ul className="mt-12 list-none md:text-lg leading-10 font-medium text-black/70 space-y-3">
              <li>
                Our Sourcing Process: From Korea to Your Glow
              </li>
              <li>
                Here&apos;s how we ensure every product on our website is
                authentic, fresh, and works for Nigerian skin.
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-xl bg-white p-6 lg:p-16">
            <div className="flex size-[60px] items-center justify-center rounded-full bg-[#2D1801]">
              <span className="font-montserrat text-xl font-bold text-white">
                1
              </span>
            </div>
            <p className="font-montserrat mt-8 text-lg leading-11 font-medium text-balance lg:text-2xl text-[#2D1801]">
              Direct Partnerships with Korean Brands & Certified Distributors We
              don&apos;t buy from third-party resellers or unknown suppliers.
              Instead, we work directly with top K-beauty brands and authorized
              distributors to ensure:Original formulations (No watered-down or
              fake versions)Fresh stock (Straight from the latest production
              batches)Fair pricing (No unnecessary markups or middlemen) Video
              Idea: Behind the scenes of our visits to Korean factories &
              supplier meetings. Show us personally testing products and
              speaking with brand representatives.
            </p>
          </div>

          <div className="mt-8 items-center justify-between gap-10 lg:flex">
            <div className="border-[#73512C] h-[505px] max-w-2xl rounded-xl border-2 bg-[#F5F5DC] px-[30px] py-5">
              <div className="bg-[#73512C] flex size-[60px] items-center justify-center rounded-full">
                <span className="font-montserrat text-xl font-bold text-white">
                  2
                </span>
              </div>
              <p className="font-montserrat text-lg leading-10 font-medium text-black/70 lg:text-2xl">
                2️. Verified Authenticity & Quality Control Every product that
                lands in our store goes through strict verification checks,
                including:

                <ul className="list-inside mt-2">
                  <li>
                    – Batch & serial number tracking to confirm authenticity
                  </li>
                  <li>
                    – Ingredient list verification (so you get the original formula)
                  </li>
                  <li>
                    – Freshness checks (we don&apos;t sell expired or near-expiry
                    products)
                  </li>
                </ul>
              </p>
            </div>
            <div className="border-[#73512C] bg-[#73512C] h-[505px] rounded-xl border-2 px-[30px] py-5">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#F5F5DC]">
                <span className="font-montserrat text-[#73512C] text-xl font-bold">
                  3
                </span>
              </div>
              <p className="font-montserrat mt-5 text-2xl leading-10 font-medium text-cream">
                Ethical & Safe Sourcing We believe in skin health, not skin
                bleaching. That&apos;s why we only stock brands that are:
                <ul className="list-inside mt-2">
                  <li>
                    – Cruelty-free & dermatologist-approved
                  </li>
                  <li>
                    – Free from harmful chemicals or bleaching agents
                  </li>
                  <li>
                    – Committed to sustainability & fair trade
                  </li>
                </ul>
              </p>
            </div>

            <div className="xl:col-span-10 w-full rounded-xl bg-white p-8 lg:max-w-4xl lg:p-16">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#2D1801]">
                <span className="font-montserrat text-xl font-bold text-white">
                  4
                </span>
              </div>
              <p className="font-montserrat mt-8 md:text-lg leading-8 md:leading-11 font-medium text-balance lg:text-2xl">
                <strong>Fast, Secure Shipping from Korea to Nigeria</strong>
                <br />Once products are
                approved, we handle all the logistics ourselves to
                guarantee:
                <ul className="list-inside mt-2">
                  <li>
                    – Proper storage conditions (No heat damage or contamination)
                  </li>
                  <li>
                    – Quick customs clearance & shipping
                  </li>
                  <li>
                    – Nationwide delivery—Lagos, Abuja, Port Harcourt & beyond!
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="font-montserrat mt-16">
            <span className="text-lg font-bold text-black/70">
              Why Trust HOK?
            </span>
            <ul className="list-none my-4 space-y-3 md:text-lg leading-8 md:leading-10 font-medium text-black/70">
              <li>
                No more guesswork – We&apos;ve done the research, testing, and
                sourcing for you
              </li>
              <li>
                No more fake skincare – Every product is original, safe, and
                dermatologist-backed.
              </li>
              <li>
                No more unnecessary shipping costs – Get K-beauty at fair
                prices, delivered locally.
              </li>
            </ul>

            <ul className="lg:mt-12 list-none">
              <li className="mt-3 lg:text-lg leading-8 md:leading-10 font-medium text-black/70">
                At HOK, we don&apos;t just sell skincare, we bring you the real
                deal. Your glow starts with trust.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-32">
        <Newsletter />
      </section>
    </main>
  );
};

export default About;
