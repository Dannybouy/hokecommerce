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
import {
  brands,
  categories,
  collections,
  productTypes,
  skinConcerns,
  skinTypes,
} from "@/lib/filters";
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
    productTypes: string[];
    categories: string[];
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
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(
    [],
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
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
    const productType = searchParams.get("productType");
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    const sort = searchParams.get("sort");

    if (color) setSelectedColors(color.split(","));
    if (size) setSelectedSizes(size.split(","));
    if (collection) setSelectedCollections(collection.split(","));
    if (brand) setSelectedBrands(brand.split(","));
    if (skinType) setSelectedSkinTypes(skinType.split(","));
    if (skinConcern) setSelectedSkinConcerns(skinConcern.split(","));
    if (productType) setSelectedProductTypes(productType.split(","));
    if (category) setSelectedCategories(category.split(","));
    if (price) {
      const [min, max] = price.split("-").map(Number);
      setPriceRange([min, max]);
    }
    if (sort) setSortOption(sort);

    // Set view mode if present in URL
    const view = searchParams.get("view") as "grid" | "list" | null;
    if (view && (view === "grid" || view === "list")) {
      setViewMode(view);
    }
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
    if (selectedProductTypes.length > 0)
      params.set("productType", selectedProductTypes.join(","));
    if (selectedCategories.length > 0)
      params.set("category", selectedCategories.join(","));
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
      productTypes: selectedProductTypes,
      categories: selectedCategories,
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
    selectedProductTypes,
    selectedCategories,
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

  // Toggle product type selection
  const toggleProductType = (typeId: string) => {
    setSelectedProductTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((t) => t !== typeId)
        : [...prev, typeId],
    );
  };

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId],
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
    setSelectedProductTypes([]);
    setSelectedCategories([]);
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

        <Accordion type="multiple" className="w-full space-y-4">
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

          {/* Product Types */}
          <AccordionItem value="productTypes">
            <AccordionTrigger>Product Types</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {productTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`productType-${type.id}`}
                      checked={selectedProductTypes.includes(type.id)}
                      onCheckedChange={() => {
                        toggleProductType(type.id);
                        updateFilters();
                      }}
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

          {/* Tags (Skin Concerns) */}
          <AccordionItem value="tags">
            <AccordionTrigger>Tags</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {skinConcerns.map((concern) => (
                  <div key={concern.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`concern-${concern.id}`}
                      checked={selectedSkinConcerns.includes(concern.id)}
                      onCheckedChange={() => {
                        toggleSkinConcern(concern.id);
                        updateFilters();
                      }}
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
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => {
                        toggleCategory(category.id);
                        updateFilters();
                      }}
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
            onClick={() => {
              clearFilters();
              updateFilters();
            }}
            variant="outline"
            size="sm"
            className="mt-4"
          >
            Clear Filters
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

            <Accordion type="multiple" className="mt-4 w-full">
              {/* Price Range Mobile */}
              <AccordionItem value="price-mobile">
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

              {/* Collections Mobile */}
              <AccordionItem value="collections-mobile">
                <AccordionTrigger>Collections</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {collections.map((collection) => (
                      <div
                        key={collection.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`mobile-collection-${collection.id}`}
                          checked={selectedCollections.includes(collection.id)}
                          onCheckedChange={() => {
                            toggleCollection(collection.id);
                          }}
                        />
                        <label
                          htmlFor={`mobile-collection-${collection.id}`}
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {collection.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Brands Mobile */}
              <AccordionItem value="brands-mobile">
                <AccordionTrigger>Brands</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div
                        key={brand.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`mobile-brand-${brand.id}`}
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => {
                            toggleBrand(brand.id);
                          }}
                        />
                        <label
                          htmlFor={`mobile-brand-${brand.id}`}
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Product Types Mobile */}
              <AccordionItem value="productTypes-mobile">
                <AccordionTrigger>Product Types</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {productTypes.map((type) => (
                      <div
                        key={type.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`mobile-productType-${type.id}`}
                          checked={selectedProductTypes.includes(type.id)}
                          onCheckedChange={() => {
                            toggleProductType(type.id);
                          }}
                        />
                        <label
                          htmlFor={`mobile-productType-${type.id}`}
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Tags Mobile */}
              <AccordionItem value="tags-mobile">
                <AccordionTrigger>Tags</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {skinConcerns.map((concern) => (
                      <div
                        key={concern.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`mobile-concern-${concern.id}`}
                          checked={selectedSkinConcerns.includes(concern.id)}
                          onCheckedChange={() => {
                            toggleSkinConcern(concern.id);
                          }}
                        />
                        <label
                          htmlFor={`mobile-concern-${concern.id}`}
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {concern.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Categories Mobile */}
              <AccordionItem value="categories-mobile">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`mobile-category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => {
                            toggleCategory(category.id);
                          }}
                        />
                        <label
                          htmlFor={`mobile-category-${category.id}`}
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-6 flex flex-col gap-2">
              <Button onClick={updateFilters} className="bg-gold mt-2 w-full">
                Apply Filters
              </Button>
              <Button
                onClick={() => {
                  clearFilters();
                  updateFilters();
                }}
                variant="outline"
                className="mt-2 w-full"
              >
                Clear Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
