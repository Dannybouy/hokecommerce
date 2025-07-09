import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-0 text-white lg:mx-12">
      <div className="container mx-auto rounded-xl bg-[#2D1801] p-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Mailing List */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <Image
                src="/hok-logo-white.svg"
                alt="HOKBeauty footer logo"
                width={100}
                height={100}
                className="size-full"
              />
            </Link>
            <p className="font-playfair text-lg text-white">
              Subscribe to our mailing list to get the new updates!
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://www.facebook.com/share/1EK81bfAFp/"
                className="flex size-7 items-center justify-center rounded-full bg-white"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="size-3.5"
                />
              </Link>

              <Link
                href="https://www.instagram.com/thehomeofkoreanproducts/"
                className="flex size-7 items-center justify-center rounded-full bg-white"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="size-3.5"
                />
              </Link>

              <Link
                href="https://whatsapp.com/channel/0029VbAMxdn9hXF5cKnHxz12"
                className="flex size-7 items-center justify-center rounded-full bg-white"
                aria-label="WhatsApp"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="size-3.5"
                />
              </Link>

              <Link
                href="https://www.tiktok.com/@thehomeofkoreanproducts"
                className="flex size-7 items-center justify-center rounded-full bg-white"
                aria-label="TikTok"
              >
                <Image
                  src="/tiktok.svg"
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="size-3.5"
                />
              </Link>

              <Link
                href="https://t.me/HOKBeauty"
                className="flex size-7 items-center justify-center rounded-full bg-white"
                aria-label="Telegram"
              >
                <Image
                  src="/telegram.svg"
                  alt="Telegram"
                  width={20}
                  height={20}
                  className="size-3.5 text-white"
                />
              </Link>
            </div>
          </div>

          {/* Information Column */}
          <div className="font-playfair space-y-6 md:mx-auto md:pl-10 lg:pl-20">
            <h2 className="text-2xl font-medium">INFORMATION</h2>
            <ul className="space-y-4">
              <li className="text-lg font-medium">
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/brands" className="hover:underline">
                  Brands
                </Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/skin-algorithm" className="hover:underline">
                  Skin Algorithm
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="font-playfair space-y-6 md:mx-auto">
            <h2 className="text-2xl font-medium">WHOLESALE</h2>
            <ul className="space-y-4">
              <li className="text-lg font-medium">
                <Link href="/wholesale" className="hover:underline">
                  Shop Wholesale
                </Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/wholesale" className="hover:underline">
                  Wholesaler Terms
                </Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/wholesale" className="hover:underline">
                  Join The HOK Tribe
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="font-playfair space-y-6 md:mx-auto">
            <h2 className="text-2xl font-medium">CONTACT</h2>
            <ul className="space-y-4">
              <li className="text-lg font-medium">
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
      <div className="mt-6 flex flex-col items-center justify-between py-6 text-black md:flex-row">
        <p className="font-playfair mb-4 text-base md:mb-0">
          © HOKBeauty 2025
        </p>
        <div className="flex gap-8">
          <Link
            href="/privacy"
            className="font-playfair text-sm hover:underline"
          >
            Privacy
          </Link>
          <Link href="/terms" className="font-playfair text-sm hover:underline">
            Terms
          </Link>
          <Link
            href="/sitemap"
            className="font-playfair text-sm hover:underline"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
