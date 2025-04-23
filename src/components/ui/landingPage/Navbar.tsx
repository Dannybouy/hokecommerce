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
    <header className="w-full bg-[#f8f4e8]">
      {/* Top bar with logo and icons */}
      <div className="relative flex items-center justify-between px-4 py-2">
        {/* Mobile menu trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-black">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] pl-5 border-r-2 border-[#73512C]">
            <nav className="mt-10 flex flex-col gap-2">
              {NavLinks.map((link) => (
                <div key={link.title} className="border-b border-gray-100 py-3">
                  <Link
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-gray-600 font-montserrat text-[#2D1801]"
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </Link>
                  {link.submenu && (
                    <div className="mt-3 ml-4 flex flex-col gap-3 font-montserrat">
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

        {/* Logo centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <div className="flex flex-col items-center">
              <Image
                src="/new-hok-logo.svg"
                alt="HOK Logo"
                width={60}
                height={40}
              />
            </div>
          </Link>
        </div>

        {/* Cart icon */}
        <Link href="/cart">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-black hover:bg-transparent"
          >
            {mounted && totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                {totalItemsCount}
              </span>
            )}
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </Link>
      </div>

      {/* Main navigation */}
      <nav className="font-montserrat border-b-2 border-[#2c2c2c] py-3">
        {/* Desktop navigation */}
        <div className="mx-auto hidden max-w-screen-2xl justify-center lg:flex">
          <div className="flex items-center justify-center space-x-6">
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
                      <PopoverPanel className="absolute z-10 mt-1 w-48 rounded border border-gray-200 bg-white shadow-lg">
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
