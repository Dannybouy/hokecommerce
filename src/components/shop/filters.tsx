"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent, 
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { brands, collections, skinConcerns, skinTypes } from "@/lib/filters";
import { Sliders } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface FiltersProps {
  onFilterChange: (filters: {
    colors: string[];
    sizes: string[];
    collections: string[];
    brands: string[];
    skinTypes: string[];
    skinConcerns: string[];
    priceRange: [number, number];
    sortOption: string;
    viewMode: "grid" | "list";
  }) => void;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter states
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState<string[]>(
    [],
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([3200, 51000]);
  const [sortOption, setSortOption] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Handle URL params for filters and pagination
  useEffect(() => {
    const color = searchParams.get("color");
    const size = searchParams.get("size");
    const collection = searchParams.get("collection");
    const brand = searchParams.get("brand");
    const skinType = searchParams.get("skinType");
    const skinConcern = searchParams.get("skinConcern");
    const price = searchParams.get("price");
    const sort = searchParams.get("sort");

    if (color) setSelectedColors(color.split(","));
    if (size) setSelectedSizes(size.split(","));
    if (collection) setSelectedCollections(collection.split(","));
    if (brand) setSelectedBrands(brand.split(","));
    if (skinType) setSelectedSkinTypes(skinType.split(","));
    if (skinConcern) setSelectedSkinConcerns(skinConcern.split(","));
    if (price) {
      const [min, max] = price.split("-").map(Number);
      setPriceRange([min, max]);
    }
    if (sort) setSortOption(sort);
  }, [searchParams]);

  // Update URL with filters
  const updateFilters = useCallback(() => {
    const params = new URLSearchParams();

    if (selectedColors.length > 0)
      params.set("color", selectedColors.join(","));
    if (selectedSizes.length > 0) params.set("size", selectedSizes.join(","));
    if (selectedCollections.length > 0)
      params.set("collection", selectedCollections.join(","));
    if (selectedBrands.length > 0)
      params.set("brand", selectedBrands.join(","));
    if (selectedSkinTypes.length > 0)
      params.set("skinType", selectedSkinTypes.join(","));
    if (selectedSkinConcerns.length > 0)
      params.set("skinConcern", selectedSkinConcerns.join(","));
    if (priceRange[0] !== 3200 || priceRange[1] !== 51000) {
      params.set("price", `${priceRange[0]}-${priceRange[1]}`);
    }
    if (sortOption !== "featured") params.set("sort", sortOption);

    router.push(`/shop?${params.toString()}`, { scroll: false });

    // Notify parent of filter changes
    onFilterChange({
      colors: selectedColors,
      sizes: selectedSizes,
      collections: selectedCollections,
      brands: selectedBrands,
      skinTypes: selectedSkinTypes,
      skinConcerns: selectedSkinConcerns,
      priceRange,
      sortOption,
      viewMode,
    });
  }, [
    router,
    selectedColors,
    selectedSizes,
    selectedCollections,
    selectedBrands,
    selectedSkinTypes,
    selectedSkinConcerns,
    priceRange,
    sortOption,
    viewMode,
    onFilterChange,
  ]);

  // Toggle collection selection
  const toggleCollection = (collectionId: string) => {
    setSelectedCollections((prev) =>
      prev.includes(collectionId)
        ? prev.filter((c) => c !== collectionId)
        : [...prev, collectionId],
    );
  };

  // Toggle brand selection
  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((b) => b !== brandId)
        : [...prev, brandId],
    );
  };

  // Toggle skin type selection
  const toggleSkinType = (typeId: string) => {
    setSelectedSkinTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((t) => t !== typeId)
        : [...prev, typeId],
    );
  };

  // Toggle skin concern selection
  const toggleSkinConcern = (concernId: string) => {
    setSelectedSkinConcerns((prev) =>
      prev.includes(concernId)
        ? prev.filter((c) => c !== concernId)
        : [...prev, concernId],
    );
  };

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const clearFilters = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCollections([]);
    setSelectedBrands([]);
    setSelectedSkinTypes([]);
    setSelectedSkinConcerns([]);
    setPriceRange([3200, 51000]);
    setSortOption("featured");
    router.push("/shop");
  };

  return (
    <div className="space-y-10">

      {/* Desktop Filters */}
      <div className="hidden md:block">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">Filters</h3>
        </div>

        <Accordion type="multiple" className="w-full">
          {/* Price Range */}
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="px-2 pt-2 pb-6">
                <Slider
                  defaultValue={[3200, 51000]}
                  min={3200}
                  max={51000}
                  step={100}
                  value={priceRange}
                  onValueChange={handlePriceChange}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Collections */}
          <AccordionItem value="collections">
            <AccordionTrigger>Collections</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {collections.map((collection) => (
                  <div
                    key={collection.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`collection-${collection.id}`}
                      checked={selectedCollections.includes(collection.id)}
                      onCheckedChange={() => {
                        toggleCollection(collection.id);
                        updateFilters();
                      }}
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
          <AccordionItem value="brands">
            <AccordionTrigger>Brands</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand.id}`}
                      checked={selectedBrands.includes(brand.id)}
                      onCheckedChange={() => {
                        toggleBrand(brand.id);
                        updateFilters();
                      }}
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

          {/* Skin Types */}
          <AccordionItem value="skin-types">
            <AccordionTrigger>Skin Types</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {skinTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skin-type-${type.id}`}
                      checked={selectedSkinTypes.includes(type.id)}
                      onCheckedChange={() => {
                        toggleSkinType(type.id);
                        updateFilters();
                      }}
                    />
                    <label
                      htmlFor={`skin-type-${type.id}`}
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Skin Concerns */}
          <AccordionItem value="skin-concerns">
            <AccordionTrigger>Skin Concerns</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {skinConcerns.map((concern) => (
                  <div key={concern.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skin-concern-${concern.id}`}
                      checked={selectedSkinConcerns.includes(concern.id)}
                      onCheckedChange={() => {
                        toggleSkinConcern(concern.id);
                        updateFilters();
                      }}
                    />
                    <label
                      htmlFor={`skin-concern-${concern.id}`}
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {concern.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button variant="outline" size="lg" onClick={clearFilters} className="w-full mt-5">
          Clear all
        </Button>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Sliders className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Narrow down your product search
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <Accordion type="multiple" className="w-full">
                {/* Price Range */}
                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="px-2 pt-2 pb-6">
                      <Slider
                        defaultValue={[3200, 51000]}
                        min={3200}
                        max={51000}
                        step={100}
                        value={priceRange}
                        onValueChange={handlePriceChange}
                        className="my-6"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Collections */}
                <AccordionItem value="collections">
                  <AccordionTrigger>Collections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {collections.map((collection) => (
                        <div
                          key={collection.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`collection-${collection.id}-mobile`}
                            checked={selectedCollections.includes(
                              collection.id,
                            )}
                            onCheckedChange={() => {
                              toggleCollection(collection.id);
                              updateFilters();
                            }}
                          />
                          <label
                            htmlFor={`collection-${collection.id}-mobile`}
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
                <AccordionItem value="brands">
                  <AccordionTrigger>Brands</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div
                          key={brand.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`brand-${brand.id}-mobile`}
                            checked={selectedBrands.includes(brand.id)}
                            onCheckedChange={() => {
                              toggleBrand(brand.id);
                              updateFilters();
                            }}
                          />
                          <label
                            htmlFor={`brand-${brand.id}-mobile`}
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {brand.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Skin Types */}
                <AccordionItem value="skin-types">
                  <AccordionTrigger>Skin Types</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {skinTypes.map((type) => (
                        <div
                          key={type.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`skin-type-${type.id}-mobile`}
                            checked={selectedSkinTypes.includes(type.id)}
                            onCheckedChange={() => {
                              toggleSkinType(type.id);
                              updateFilters();
                            }}
                          />
                          <label
                            htmlFor={`skin-type-${type.id}-mobile`}
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Skin Concerns */}
                <AccordionItem value="skin-concerns">
                  <AccordionTrigger>Skin Concerns</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {skinConcerns.map((concern) => (
                        <div
                          key={concern.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`skin-concern-${concern.id}-mobile`}
                            checked={selectedSkinConcerns.includes(concern.id)}
                            onCheckedChange={() => {
                              toggleSkinConcern(concern.id);
                              updateFilters();
                            }}
                          />
                          <label
                            htmlFor={`skin-concern-${concern.id}-mobile`}
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {concern.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
