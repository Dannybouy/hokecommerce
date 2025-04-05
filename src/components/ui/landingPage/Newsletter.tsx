import { Button } from "@/components/ui/button";
import React from "react";

const Newsletter = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="mb-5 font-valky text-black/70 text-5xl font-light tracking-wide md:text-6xl">
          Subscribe To Our Newsletter
        </h2>

        {/* Subheading */}
        <p className="mb-8 text-black/70 font-inter font-normal lg:text-xl">
          Get the latest updates on new products and upcoming sales
        </p>

        {/* Form */}
        <form className="mx-auto flex items-center max-w-4xl gap-3 sm:flex-row border-2relative">
          <input
            type="email"
            placeholder="Email address"
            className="flex-grow rounded-full border border-burntOrange px-4 py-3 focus:ring-1 focus:ring-burntOrange focus:outline-none bg-white font-montserrat"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="rounded-full bg-burntOrange px-6 py-4 text-sm tracking-wider text-white uppercase hover:bg-orange-600 absolute right-[18%] font-roboto font-normal"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
