"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Heart, Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { products } from "@/lib/products"
import { cn } from "@/lib/utils"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string

  const [product, setProduct] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedImage, setSelectedImage] = useState(0)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])

  // Animation states
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find((p) => p.id === productId)

    if (foundProduct) {
      setProduct(foundProduct)
      setSelectedColor(foundProduct.colors[0])

      // Get related products (same category)
      const related = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)
      setRelatedProducts(related)
    } else {
      // Product not found, redirect to shop
      router.push("/shop")
    }

    setIsLoading(false)
  }, [productId, router])

  const handleAddToBag = () => {
    // Add to cart functionality
    console.log("Added to bag:", product.name, "Color:", selectedColor)

    // Show animation
    const button = document.getElementById("add-to-bag-button")
    if (button) {
      button.classList.add("animate-success")
      setTimeout(() => {
        button.classList.remove("animate-success")
      }, 1000)
    }
  }

  const handleNextImage = () => {
    setImageLoaded(false)
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const handlePrevImage = () => {
    setImageLoaded(false)
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 aspect-square rounded-md"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/2 mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <p className="mb-6">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Button asChild>
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="hover:bg-transparent hover:text-blue-600 p-0">
          <Link href="/shop" className="flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to shop
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative bg-gray-100 rounded-md overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                fill
                className={cn(
                  "object-cover transition-opacity duration-500",
                  imageLoaded ? "opacity-100" : "opacity-0",
                )}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              )}
            </div>

            {product.images?.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {product.images?.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  className={cn(
                    "relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200",
                    selectedImage === index ? "border-blue-600" : "border-transparent hover:border-gray-300",
                  )}
                  onClick={() => {
                    setImageLoaded(false)
                    setSelectedImage(index)
                  }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="animate-fadeIn">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-medium mb-4">${product.price}</p>

          {/* Ratings */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn("h-5 w-5", i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">(24 reviews)</span>
          </div>

          <div className="mb-8">
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="font-medium mb-3">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color: string) => {
                const colorClass =
                  color.toLowerCase() === "black"
                    ? "bg-black"
                    : color.toLowerCase() === "white"
                      ? "bg-white"
                      : color.toLowerCase() === "blue"
                        ? "bg-blue-600"
                        : color.toLowerCase() === "gray"
                          ? "bg-gray-500"
                          : color.toLowerCase() === "orange"
                            ? "bg-orange-500"
                            : "bg-gray-300"

                return (
                  <button
                    key={color}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all duration-200",
                      colorClass,
                      selectedColor === color ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-200",
                    )}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color.toLowerCase() === "white" && <span className="sr-only">White</span>}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Add to Bag Button */}
          <div className="flex gap-4 mb-8">
            <Button id="add-to-bag-button" className="flex-1 py-6 relative overflow-hidden" onClick={handleAddToBag}>
              <span className="flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to bag
              </span>
              <span className="absolute inset-0 flex items-center justify-center bg-green-600 text-white transform translate-y-full success-message">
                Added to bag!
              </span>
            </Button>

            <Button variant="outline" size="icon" className="h-auto aspect-square">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>

          {/* Accordion Details */}
          <div className="border-t pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="features">
                <AccordionTrigger>Features</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Premium materials</li>
                    <li>Durable construction</li>
                    <li>Water-resistant finish</li>
                    <li>Multiple compartments</li>
                    <li>Adjustable straps</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="care">
                <AccordionTrigger>Care</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Spot clean with a damp cloth. Do not machine wash. Air dry only. Do not use bleach or harsh
                    chemicals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Free standard shipping on all orders over $100. Expedited and international shipping options
                    available at checkout.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns">
                <AccordionTrigger>Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    We accept returns within 30 days of delivery. Items must be unused and in original packaging. Return
                    shipping is free for US customers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t pt-12">
        <h2 className="text-2xl font-bold mb-8">Customers also bought</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <div key={related.id} className="group animate-fadeIn">
              <Link href={`/shop/product/${related.id}`} className="block">
                <div className="relative overflow-hidden bg-gray-100 rounded-md">
                  <Image
                    src={related.image || "/placeholder.svg"}
                    alt={related.name}
                    width={300}
                    height={300}
                    className="object-cover w-full aspect-square transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="font-medium">{related.name}</h3>
                  <p className="text-gray-500 text-sm">{related.colorDescription}</p>
                  <p className="font-medium mt-1">${related.price}</p>
                </div>
              </Link>

              <div className="mt-2">
                <Button
                  variant="outline"
                  className="w-full text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    // Add to cart functionality
                  }}
                >
                  Add to bag
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
