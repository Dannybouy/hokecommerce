"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/store/useCartStore";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Menu, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NavLinks = [
  {
    title: "ABOUT US",
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
    ],
  },
  {
    title: "SHOP",
    href: "/shop",
  },
  {
    title: "BRANDS",
    href: "/brands",
    submenu: [
      {
        title: "Cosrx",
        href: "/shop?vendors=cosrx",
      },
      {
        title: "Derma Factory",
        href: "/shop?vendors=derma-factory",
      },
      {
        title: "Lizara",
        href: "/shop?vendors=lizara",
      },
      {
        title: "12 Grabs",
        href: "/shop?vendors=12-grabs",
      },
      {
        title: "Anua",
        href: "/shop?vendors=anua",
      },
    ],
  },

  {
    title: "HOK PRO",
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
  {
    title: "SKIN ALGORITHM",
    href: "/skin-algorithm",
  },
  {
    title: "CONTACT US",
    href: "/contact",
  },
  {
    title: "WHOLESALE",
    href: "/wholesale",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // For hydration safety
  const [mounted, setMounted] = useState(false);
  const { totalItems } = useCartStore();
  const totalItemsCount = totalItems();

  // Create refs for popover buttons
  const brandsButtonRef = useRef<HTMLButtonElement>(null);
  const proButtonRef = useRef<HTMLButtonElement>(null);

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
    <header className="relative flex w-full flex-col bg-[#73512C] px-4 py-3 lg:h-[100px] lg:gap-4 lg:bg-[#FAF2E7] lg:px-0">
      <section className="flex w-full items-center justify-between">
        {/* Hamburger menu */}
        <div className="z-10">
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="size-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] border-r-2 border-[#73512C] pl-5 sm:w-[400px]"
              >
                <nav className="mt-10 flex flex-col gap-2">
                  {NavLinks.map((link) => (
                    <div
                      key={link.title}
                      className="border-b border-gray-100 py-3"
                    >
                      <Link
                        href={link.href}
                        className="font-montserrat text-lg font-medium text-[#2D1801] transition-colors hover:text-gray-600"
                        onClick={() => setOpen(false)}
                      >
                        {link.title}
                      </Link>
                      {link.submenu && (
                        <div className="font-montserrat mt-3 ml-4 flex flex-col gap-3">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="text-sm text-[#73512C] transition-colors hover:text-black"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        {/* Logo */}
        <div>
          {/* Mobile logo */}
          <Image
            src="/hok-logo-white.svg"
            alt="HOK Logo Mobile"
            width={60}
            height={60}
            className="block md:hidden"
          />
          {/* Desktop logo */}
          <Image
            src="/new-hok-logo.svg"
            alt="HOK Logo Desktop"
            width={60}
            height={60}
            className="hidden md:block"
          />
        </div>
        {/* Cart icon */}
        <div className="relative z-10 lg:mr-10">
          <Link href="/cart">
            <button
              type="button"
              className="text-white hover:bg-transparent lg:text-black"
            >
              {mounted && totalItemsCount > 0 && (
                <span className="bg-burntOrange font-montserrat absolute left-4 flex h-4 w-4 items-center justify-center rounded-full text-xs font-semibold text-white">
                  {totalItemsCount}
                </span>
              )}
              <ShoppingCart className="size-6" />
              <span className="sr-only">Cart</span>
            </button>
          </Link>
        </div>
      </section>
      <nav className="font-montserrat hidden border-b-2 border-[#2c2c2c] pb-3 lg:block">
        {/* Desktop navigation */}
        <div className="mx-auto hidden max-w-screen-2xl justify-center lg:flex">
          <div className="flex items-center justify-center gap-16">
            {NavLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.title}>
                    <Popover className="relative">
                      <PopoverButton
                        ref={
                          link.title === "BRANDS"
                            ? brandsButtonRef
                            : proButtonRef
                        }
                        className="flex cursor-pointer items-center gap-1 font-medium uppercase focus:outline-none"
                      >
                        {link.title}
                        <Plus className="h-3 w-3" />
                      </PopoverButton>
                      <PopoverPanel className="absolute z-10 mt-1 w-52 rounded border border-gray-200 bg-white shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-top-2">
                        <div className="flex flex-col gap-1 px-4 py-2">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              className="rounded py-1 text-sm text-black/80 transition-colors hover:text-black"
                              href={subItem.href}
                              onClick={() =>
                                handlePopoverLinkClick(
                                  link.title === "BRANDS"
                                    ? brandsButtonRef
                                    : proButtonRef,
                                )
                              }
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </PopoverPanel>
                    </Popover>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-sm font-medium text-black uppercase hover:text-gray-600"
                  >
                    {link.title}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
