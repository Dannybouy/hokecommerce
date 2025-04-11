import { Button } from "@/components/ui/button";
import React from "react";

const Newsletter = () => {
  return (
    <section className="my-44">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="font-valky mb-5 text-5xl font-light tracking-wide text-black/70 md:text-6xl">
          Subscribe To Our Newsletter
        </h2>

        {/* Subheading */}
        <p className="font-inter mb-8 font-normal text-black/70 lg:text-xl">
          Get the latest updates on new products and upcoming sales
        </p>

        {/* Form */}
        <div className="mx-auto max-w-4xl">
          <form className="relative flex">
            <input
              type="email"
              placeholder="Email address"
              className="border-burntOrange focus:ring-burntOrange font-montserrat w-full rounded-full border bg-white px-4 py-3 pr-36 focus:ring-1 focus:outline-none"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-burntOrange font-roboto absolute top-1/2 right-1 -translate-y-1/2 rounded-full px-6 py-2 text-sm font-normal tracking-wider text-white uppercase hover:bg-orange-600"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
