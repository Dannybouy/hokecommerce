"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SignUpPopover from "@/components/ui/SignUpPopover";
import { useCartStore } from "@/store/useCartStore";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NavLinks = [
  {
    title: "ABOUT",
    href: "/about",
    submenu: [
      {
        title: "Brand Story",
        href: "/about#story",
      },
      {
        title: "Our Brands",
        href: "/about#brand",
      },
      {
        title: "How We Source",
        href: "/about#source",
      },
      {
        title: "The HOK Trybe",
        href: "/about#trybe",
      },
    ],
  },
  {
    title: "BRANDS",
    href: "/brands",
    submenu: [
      {
        title: "Cosrx",
        href: "/brands/cosrx",
      },
      {
        title: "Derma Factory",
        href: "/brands/derma-factory",
      },
      {
        title: "Lizara",
        href: "/brands/lizara",
      },
      {
        title: "The Body Shop",
        href: "/brands/the-body-shop",
      },
    ],
  },
  {
    title: "SHOP",
    href: "/shop",
  },
  {
    title: "SKIN ALGORITHM",
    href: "/skin-algorithm",
    submenu: [
      {
        title: "Skin Quiz",
        href: "/skin-algorithm",
      },
      {
        title: "Personalized Recommendations",
        href: "/skin-algorithm/recommendations",
      },
    ],
  },
  {
    title: "WHOLESALE",
    href: "/wholesale",
    submenu: [
      {
        title: "Shop Wholesale",
        href: "/wholesale-shop",
      },
      {
        title: "Wholesaler Terms",
        href: "/wholesale",
      },
      {
        title: "Join The HOK Tribe",
        href: "https://linktr.ee/hokbeauty",
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // For hydration safety
  const [mounted, setMounted] = useState(false);
  const { totalItems } = useCartStore();
  const totalItemsCount = totalItems();

  // Create refs for popover buttons
  const aboutButtonRef = useRef<HTMLButtonElement>(null);
  const brandsButtonRef = useRef<HTMLButtonElement>(null);
  const skinButtonRef = useRef<HTMLButtonElement>(null);
  const wholesaleButtonRef = useRef<HTMLButtonElement>(null);

  // Function to handle link click inside popover
  const handlePopoverLinkClick = (
    buttonRef: React.RefObject<HTMLButtonElement>,
  ) => {
    // Programmatically click the button to close the popover
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    setMounted(true);
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="
        font-montserrat bg-hokBlack mx-3 mt-3 md:mx-8 md:mt-8
        flex h-20 items-center justify-between rounded-xl
        px-4 md:px-8 text-white
      ">
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="text-white">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="mt-8 ml-5 flex flex-col gap-4">
                {NavLinks.map((link) => (
                  <div key={link.title} className="py-2">
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      {link.title}
                    </Link>
                    {link.submenu && (
                      <div className="mt-2 ml-4 flex flex-col gap-2">
                        {link.submenu.map((subItem) => {
                          // Special handling for brand links to include vendor filtering
                          let href = subItem.href;
                          if (link.title === "BRANDS") {
                            // Extract the brand slug from the URL
                            const brandName = subItem.href.split("/").pop();
                            href = `/shop?vendors=${brandName}`;
                          }

                          return (
                            <Link
                              key={subItem.title}
                              href={href}
                              className="text-sm text-gray-400 transition-colors hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/">
            <figure className="relative w-16 h-16 md:w-20 md:h-20">
              <Image src="/logo.png" alt="HOK Logo" style={{ objectFit: 'contain' }} fill />
            </figure>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <div>
            <Popover className="relative">
              <PopoverButton
                ref={aboutButtonRef}
                className="data-[active]:border-burntOrange data-[focus]:outline-burntOrange block cursor-pointer font-medium text-white uppercase focus:outline-none data-[active]:border-b-2 data-[active]:text-white data-[focus]:outline-2 data-[hover]:text-white"
              >
                about
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="border-burntOrange rounded-br-xl rounded-bl-xl border bg-white transition duration-200 ease-in-out data-[closed]:opacity-0 data-[open]:translate-y-6"
              >
                <div className="font-playfair flex w-[274px] flex-col gap-2 py-4 pl-8">
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/about#story"
                    onClick={() => handlePopoverLinkClick(aboutButtonRef)}
                  >
                    Brand Story
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/about#brand"
                    onClick={() => handlePopoverLinkClick(aboutButtonRef)}
                  >
                    Our Brands
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/about#source"
                    onClick={() => handlePopoverLinkClick(aboutButtonRef)}
                  >
                    How We Source
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/about#trybe"
                    onClick={() => handlePopoverLinkClick(aboutButtonRef)}
                  >
                    The HOK Trybe
                  </Link>
                </div>
              </PopoverPanel>
            </Popover>
          </div>

          <div>
            <Popover className="relative">
              <PopoverButton
                ref={brandsButtonRef}
                className="data-[active]:border-burntOrange data-[focus]:outline-burntOrange block cursor-pointer font-medium text-white uppercase focus:outline-none data-[active]:border-b-2 data-[active]:text-white data-[focus]:outline-2 data-[hover]:text-white"
              >
                brands
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="border-burntOrange rounded-br-xl rounded-bl-xl border bg-white transition duration-200 ease-in-out data-[closed]:opacity-0 data-[open]:translate-y-6"
              >
                <div className="font-playfair flex w-[274px] flex-col gap-2 py-4 pl-8">
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/shop?vendors=cosrx"
                    onClick={() => handlePopoverLinkClick(brandsButtonRef)}
                  >
                    Cosrx
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/shop?vendors=derma-factory"
                    onClick={() => handlePopoverLinkClick(brandsButtonRef)}
                  >
                    Derma Factory
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/shop?vendors=lizara"
                    onClick={() => handlePopoverLinkClick(brandsButtonRef)}
                  >
                    Lizara
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/shop?vendors=12-grabs"
                    onClick={() => handlePopoverLinkClick(brandsButtonRef)}
                  >
                    12 Grabs
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/shop?vendors=anua"
                    onClick={() => handlePopoverLinkClick(brandsButtonRef)}
                  >
                    Anua
                  </Link>
                </div>
              </PopoverPanel>
            </Popover>
          </div>

          <Link
            href="/shop"
            className="hover:text-hok-yellow font-medium text-white uppercase"
          >
            shop
          </Link>

          <div>
            <Popover className="relative">
              <PopoverButton
                ref={skinButtonRef}
                className="data-[active]:border-burntOrange data-[focus]:outline-burntOrange block cursor-pointer font-medium text-white uppercase focus:outline-none data-[active]:border-b-2 data-[active]:text-white data-[focus]:outline-2 data-[hover]:text-white"
              >
                SKIN ALGORITHM
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="border-burntOrange rounded-br-xl rounded-bl-xl border bg-white transition duration-200 ease-in-out data-[closed]:opacity-0 data-[open]:translate-y-6"
              >
                <div className="font-playfair flex w-[312px] flex-col gap-2 px-8 py-4">
                  <p className="text-lg font-semibold text-black">
                    Get personalized products recommendations for you now!
                  </p>
                  <p className="text-lg text-black/70">
                    Take quiz to assess skin type and concerns
                  </p>
                  <Link
                    href="/skin-algorithm"
                    className="bg-burntOrange font-montserrat mt-3 rounded px-6 py-2 text-center text-lg text-white uppercase"
                    onClick={() => handlePopoverLinkClick(skinButtonRef)}
                  >
                    start
                  </Link>
                </div>
              </PopoverPanel>
            </Popover>
          </div>

          <div>
            <Popover className="relative">
              <PopoverButton
                ref={wholesaleButtonRef}
                className="data-[active]:border-burntOrange data-[focus]:outline-burntOrange block cursor-pointer font-medium text-white uppercase focus:outline-none data-[active]:border-b-2 data-[active]:text-white data-[focus]:outline-2 data-[hover]:text-white"
              >
                wholesale
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="border-burntOrange rounded-br-xl rounded-bl-xl border bg-white transition duration-200 ease-in-out data-[closed]:opacity-0 data-[open]:translate-y-6"
              >
                <div className="font-playfair flex w-[274px] flex-col gap-2 py-4 pl-8">
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/wholesale-shop"
                    onClick={() => handlePopoverLinkClick(wholesaleButtonRef)}
                  >
                    Shop Wholesale
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="/wholesale"
                    onClick={() => handlePopoverLinkClick(wholesaleButtonRef)}
                  >
                    Wholesaler Terms
                  </Link>
                  <Link
                    className="hover:text-burntOrange rounded-lg text-lg font-semibold text-black/70 transition-colors delay-75 ease-in-out"
                    href="https://linktr.ee/hokbeauty"
                    onClick={() => handlePopoverLinkClick(wholesaleButtonRef)}
                  >
                    Join The HOK Tribe
                  </Link>
                </div>
              </PopoverPanel>
            </Popover>
          </div>

          <Link
            href="/contact"
            className="hover:text-hok-yellow font-medium text-white uppercase"
          >
            contact
          </Link>
        </div>

        {/* Right side icons */}
        <div className="flex items-center md:gap-4">
          <SignUpPopover />

          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gold relative text-white transition-colors duration-200 ease-in-out"
            >
              {mounted && totalItemsCount > 0 && (
                <span className="bg-gold absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full text-xs text-black">
                  {totalItemsCount}
                </span>
              )}
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <Link href="/shop" className="ml-2 md:ml-0">
            <Button
              variant="default"
              size="lg"
              className="bg-gold hover:bg-gold/80 font-roboto px-4 md:px-7 text-sm sm:text-base font-medium text-black"
            >
              SHOP
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
