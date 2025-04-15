import FaqAccordion from "@/components/ui/faqAccordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Newsletter from "@/components/ui/landingPage/Newsletter";
import { Textarea } from "@/components/ui/textarea";
import { Asterisk } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="px-6 lg:px-0">
      <div className="container mx-auto mt-22">
        <h2 className="font-playfair text-center text-6xl">Contact</h2>
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mt-6"
        >
          <path
            d="M29.5897 1.8311C29.906 0.299297 32.094 0.299296 32.4103 1.8311L36.9688 23.9121C37.085 24.475 37.525 24.915 38.0879 25.0312L60.1689 29.5897C61.7007 29.906 61.7007 32.094 60.1689 32.4103L38.0879 36.9688C37.525 37.085 37.085 37.525 36.9688 38.0879L32.4103 60.1689C32.094 61.7007 29.906 61.7007 29.5897 60.1689L25.0312 38.0879C24.915 37.525 24.475 37.085 23.9121 36.9688L1.8311 32.4103C0.299297 32.094 0.299296 29.906 1.8311 29.5897L23.9121 25.0312C24.475 24.915 24.915 24.475 25.0312 23.9121L29.5897 1.8311Z"
            fill="#CC5500"
          />
        </svg>
      </div>

      <section className="mt-14 w-full">
        <Image
          src="/contact-bg.png"
          alt="contact map image"
          width={1000}
          height={500}
          className="w-full object-cover"
        />
      </section>

      <section className="relative container mx-auto mt-36 lg:px-[119px]">
        <h2 className="font-playfair text-6xl">Have a question or comment?</h2>
        <p className="font-montserrat mt-2 text-lg">
          Use the form below to send us a message or contact us by mail
        </p>

        <form action="" className="font-montserrat mt-8 space-y-5">
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="">First name</label>
              <Input
                type="text"
                placeholder="John"
                className="border-stone-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Last name</label>
              <Input
                type="text"
                placeholder="Doe"
                className="border-stone-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="flex">
                Email Address <Asterisk className="size-4 text-[#FB0D0D]" />
              </label>
              <Input
                type="email"
                placeholder="0909999999"
                className="border-stone-400"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="flex">
              Comment <Asterisk className="size-4 text-[#FB0D0D]" />
            </label>
            <Textarea
              placeholder="What is your request"
              className="h-40 border-stone-400"
              required
            />
          </div>

          <Button>Submit</Button>
        </form>
      </section>

      <section className="font-montserrat container mx-auto mt-36 space-y-10 lg:px-[119px]">
        <h3 className="text-4xl font-medium text-black">Get in Touch!</h3>
        <div className="grid grid-cols-1 gap-3 text-black/70 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-y-4">
            <span className="text-lg font-medium">Call: +234 9164036455</span>
            <span className="text-lg font-medium">
              Mail: homeofkoreanbeautyng@gmail.com
            </span>
          </div>
          <div>
            <p className="text-lg">
              Address: A 035, Cross River Plaza, Balogun Tradefair, Lagos State, Nigeria.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-[119px]">
        <div className="col-span-1">
          <h2 className="font-valky text-[82px] text-[#201E1C]">FAQ</h2>
          <span className="font-inter text-lg text-black/70">
            We’ve got answers!
          </span>
        </div>
        <div className="col-span-2">
          <FaqAccordion />
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Contact;
