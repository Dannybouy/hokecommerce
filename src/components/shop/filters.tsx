"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  brands,
  categories,
  collections,
  productTypes,
  skinConcerns,
} from "@/lib/filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Sliders } from "lucide-react";

export default function Filters() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //console.log(name, value);
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Desktop Filters */}
      <div className="hidden max-w-lg md:block">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">Filters</h3>
        </div>

        <Accordion type="single" className="w-full space-y-4">
          {/* Price Range */}
          <AccordionItem value="price">
            <AccordionTrigger className="mb-2 border border-gray-300">
              Price Range
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-2 flex items-center gap-6">
                <input
                  type="text"
                  name="minPrice"
                  placeholder="min price"
                  className="mt-3 w-44 rounded-2xl bg-white px-4 py-3 text-xs ring-1 ring-gray-400"
                  onChange={handleFilterChange}
                />
                <input
                  type="text"
                  name="maxPrice"
                  placeholder="max price"
                  className="mt-3 w-44 rounded-2xl bg-white px-4 py-3 text-xs ring-1 ring-gray-400"
                  onChange={handleFilterChange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Collections */}
          <AccordionItem value="collections">
            <AccordionTrigger className="mb-2 border border-gray-300">
              Collections
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 ml-4 flex flex-wrap items-center gap-4">
                {collections.map((collection) => (
                  <div
                    key={collection.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      name="collections"
                      value={collection.id}
                      id={`collection-${collection.id}`}
                      onChange={handleFilterChange}
                      className="accent-burntOrange h-4 w-4 bg-white"
                    />
                    <label
                      htmlFor={`collection-${collection.id}`}
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {collection.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Brands */}
          <AccordionItem value="vendors">
            <AccordionTrigger className="mb-2 border border-gray-300">
              Brands
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 ml-4 flex items-center gap-4">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="vendors"
                      value={brand.id}
                      id={`brand-${brand.id}`}
                      onChange={handleFilterChange}
                      className="accent-burntOrange h-4 w-4 bg-white"
                    />
                    <label
                      htmlFor={`brand-${brand.id}`}
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Product Types */}
          <AccordionItem value="productTypes">
            <AccordionTrigger className="mb-2 border border-gray-300">
              Product Types
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 ml-4 flex flex-wrap items-center gap-4">
                {productTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <input
                      id={`productType-${type.id}`}
                      onChange={handleFilterChange}
                      type="checkbox"
                      name="productType"
                      value={type.id}
                      className="accent-burntOrange h-4 w-4 bg-white"
                    />
                    <label
                      htmlFor={`productType-${type.id}`}
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Tags  */}
          <AccordionItem value="tags">
            <AccordionTrigger className="mb-2 border border-gray-300">
              Tags
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 ml-4 flex flex-wrap items-center gap-4">
                {skinConcerns.map((concern) => (
                  <div key={concern.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="tags"
                      value={concern.id}
                      id={`concern-${concern.id}`}
                      onChange={handleFilterChange}
                      className="accent-burntOrange h-4 w-4 bg-white"
                    />
                    <label
                      htmlFor={`concern-${concern.id}`}
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {concern.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Categories */}
          <AccordionItem value="categories">
            <AccordionTrigger className="mb-2 border border-gray-300">
              Categories
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 ml-4 flex flex-wrap items-center gap-4">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      id={`category-${category.id}`}
                      onChange={handleFilterChange}
                      type="checkbox"
                      name="category"
                      value={category.id}
                      className="accent-burntOrange h-4 w-4 bg-white"
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <Button
            variant="outline"
            size="lg"
            className="mt-4 bg-black/80 text-white"
          >
            Apply Filter
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-gold text-burntOrange mt-4 ml-4"
          >
            Clear Filter
          </Button>
        </Accordion>
      </div>

      {/* Mobile Filter Trigger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <Sliders className="h-5 w-5" />
              <span>Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Refine your product search here
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
