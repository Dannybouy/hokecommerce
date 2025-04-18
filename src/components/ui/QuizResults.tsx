"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  skinType: string[];
}

/* 
SHOPIFY INTEGRATION NOTES:
To integrate with Shopify, we'll need to:
1. Create product metafields in Shopify for 'skinType' (multiple selection metafield)
2. Use the Shopify Storefront API to fetch products filtered by the skinType metafield
3. Example GraphQL query would look like:

query ProductsBySkinType($skinType: String!) {
  products(first: 10, query: "metafield.skinType:$skinType") {
    edges {
      node {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
        metafields(first: 5) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }
  }
}

4. Replace the mockProducts below with actual API fetching from Shopify
*/

// Mock products - in a real implementation, these would come from Shopify API
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Salicylic Acid Daily Gentle Cleanser",
    price: "₦9500.00",
    image: "/corsx-image.png",
    skinType: ["oily", "combination"],
  },
  {
    id: "2",
    title: "Derma Factory Retina Cica Ampoule 30ml",
    price: "₦8,800.00",
    image: "/derma-factory.jpg",
    skinType: ["dry", "sensitive", "normal"],
  },
  {
    id: "3",
    title: "Cosrx Low pH Gentle Morning Cleanser",
    price: "₦7,500.00",
    image: "/corsx-image.png",
    skinType: ["dry", "sensitive"],
  },
  {
    id: "4",
    title: "Hyaluronic Acid Intensive Serum",
    price: "₦12,000.00",
    image: "/derma-factory.jpg",
    skinType: ["dry", "normal", "sensitive"],
  },
];

interface QuizResultsProps {
  skinType: string;
  resetQuiz: () => void;
}

const skinTypeDescriptions = {
  dry: "You have a dry skin; needs deep hydration and gentle care.",
  normal: "You have normal skin; maintain balance with gentle products.",
  oily: "You have oily skin; needs oil control and gentle exfoliation.",
};

const QuizResults: React.FC<QuizResultsProps> = ({ skinType, resetQuiz }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const productsPerPage = 2;

  useEffect(() => {
    // Filter products based on skin type
    const filtered = mockProducts.filter((product) =>
      product.skinType.includes(skinType),
    );
    setRecommendedProducts(filtered);
  }, [skinType]);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = recommendedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(recommendedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-8">
      <h3 className="font-playfair mb-6 text-3xl">Results</h3>

      <div className="border-gold mb-8 rounded-lg border bg-white p-4">
        <p className="font-montserrat text-lg">
          1.{" "}
          {skinTypeDescriptions[skinType as keyof typeof skinTypeDescriptions]}
        </p>
      </div>

      <h3 className="font-montserrat mb-6 w-fit max-w-fit rounded bg-white px-5 py-[10px] text-lg font-semibold">
        Product Recommendations
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="rounded-lg">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="rounded-xl"
              />
            </div>
            <div className="mt-8 flex items-start justify-between">
              <div className="max-w-[60%]">
                <h4 className="font-montserrat mb-1 font-medium">
                  {product.title}
                </h4>
                <div className="mt-1 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="font-montserrat text-base font-semibold">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex space-x-2">
          {[...Array(totalPages + 1)].map(
            (_, idx) =>
              idx > 0 && (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx)}
                  className={`flex h-8 w-8 items-center justify-center border ${currentPage === idx ? "bg-burntOrange text-white" : "border-gray-300"}`}
                >
                  {idx}
                </button>
              ),
          )}
        </div>
      </div>

      <div className="mt-8">
        <Button
          variant="ghost"
          onClick={resetQuiz}
          className="text-burntOrange flex items-center font-medium"
        >
          <ArrowLeft />
          BACK TO QUIZ
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
