"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NavLinks = [
  {
    title: "ABOUT",
    href: "/about",
    submenu: [
      {
        title: "Brand Story",
        href: "/about/story",
        
      },
      {
        title: "Our Brand",
        href: "/about/brand",
        
      },
      {
        title: "How We Source",
        href: "/about/source",
       
      },
      {
        title: "The HOK Trybe",
        href: "/about/trybe",
       
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
        href: "/skin-algorithm/quiz",
        
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
        href: "/paper-dolls/blog",
        
      },
      {
        title: "Join The HOK Tribe",
        href: "/paper-dolls/community", 
      },
      {
        title: "Wholesale Sign in",
        href:"#"
      },
      {
        title:"The HOK Trybe",
        href: "#"
      }
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="mx-8 mt-8 flex h-20 items-center justify-between px-8 rounded-xl text-white font-montserrat bg-hokBlack">
        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="mt-8 flex flex-col gap-4">
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
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="text-sm text-gray-400 transition-colors hover:text-white"
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

        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="HOK Logo" width={80} height={80} />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NavLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuTrigger className="bg-transparent text-[#eeeae1] font-medium text-base">
                    {link.title}
                  </NavigationMenuTrigger>
                  {link.submenu && (
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-72 py-5 px-7 gap-5 outline-2 outline-orange-700 rounded-bl-lg rounded-br-lg">
                      {link.submenu?.map((subItem) => (
                        <li key={subItem.title} className="hover:bg-black/10 py-2 px-1 rounded-lg">
                          <NavigationMenuLink asChild>
                            <Link href={subItem.href} className="text-base text-black/70 font-medium leading-none">
                              {subItem.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-hok-yellow text-white"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-hok-yellow text-white"
          >
            <UserRound className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-hok-yellow text-white"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button className="bg-gold hover:bg-gold/60 px-7 font-roboto font-medium text-base text-black rounded-lg">
            SIGN UP
          </Button>
        </div>
      </nav>
    </header>
  );
}
