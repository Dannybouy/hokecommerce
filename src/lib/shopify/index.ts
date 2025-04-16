// This is a server action that fetches data from the Shopify storefront API

import {
  ShopifyCollectionsResponse,
  ShopifyProductResponse,
  ShopifyProductsResponse,
  ShopifyRequestOptions,
} from "./types";

// Define search params interface here to avoid circular dependency
interface ShopPageSearchParams {
  minPrice?: string;
  maxPrice?: string;
  collections?: string | string[]; // Note: Collection filtering by ID/handle via query string is limited
  vendors?: string | string[];
  productType?: string | string[];
  tags?: string | string[];
  category?: string | string[]; // Note: Category often maps to productType or tags
  page?: string;
  // Add other potential search params like sort, query etc.
}

const domain =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ||
  process.env.SHOPIFY_STORE_DOMAIN ||
  "";
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
  process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
  "";

// Checks if Shopify environment variables are configured
const isShopifyConfigured = domain && storefrontAccessToken;

/**
 * Sends a request to the Shopify Storefront API
 */
export async function shopifyFetch<T>({
  query,
  variables,
}: ShopifyRequestOptions): Promise<{ status: number; body: T }> {
  if (!isShopifyConfigured) {
    console.error("Shopify environment variables are not configured");
    throw new Error(
      "Shopify configuration missing. Please set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variables.",
    );
  }

  const endpoint = `https://${domain}/api/2025-04/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error fetching from Shopify:", error);
    throw error;
  }
}

/**
 * Fetches all products from the Shopify storefront API, optionally applying filters.
 */
export async function getProducts({
  searchParams,
}: {
  searchParams?: ShopPageSearchParams;
} = {}) {
  // Provide default empty object
  if (!isShopifyConfigured) {
    console.warn("Shopify not configured. Returning mock data");
    // Apply mock filtering if needed, though likely not necessary for mocks
    return getMockProducts();
  }

  // --- Build Filter Query String ---
  const filterQueries: string[] = [];

  const processMultiParam = (
    param: string | string[] | undefined,
  ): string[] => {
    if (!param) return [];
    return Array.isArray(param) ? param : [param];
  };

  const vendors = processMultiParam(searchParams?.vendors);
  if (vendors.length > 0) {
    filterQueries.push(`(${vendors.map((v) => `vendor:'${v}'`).join(" OR ")})`);
  }

  const productTypes = processMultiParam(searchParams?.productType);
  if (productTypes.length > 0) {
    filterQueries.push(
      `(${productTypes.map((pt) => `product_type:'${pt}'`).join(" OR ")})`,
    );
  }

  // Assuming 'category' maps to product_type for filtering
  const categories = processMultiParam(searchParams?.category);
  if (categories.length > 0) {
    filterQueries.push(
      `(${categories.map((c) => `product_type:'${c}'`).join(" OR ")})`,
    );
  }

  const tags = processMultiParam(searchParams?.tags);
  if (tags.length > 0) {
    filterQueries.push(`(${tags.map((t) => `tag:'${t}'`).join(" OR ")})`);
  }

  const filterString = filterQueries.join(" AND ");
  // ---------------------------------

  // TODO: Implement pagination based on searchParams.page
  const first = 12; // Default number of products per page

  const query = `
    query GetProducts($filterQuery: String) {
      products(first: ${first}, query: $filterQuery) {
        edges {
          node {
            id
            title
            handle
            description
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
                  width  # Added width
                  height # Added height
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await shopifyFetch<ShopifyProductsResponse>({
      query,
      variables: { filterQuery: filterString }, // Pass the filter string
    });

    if (
      !response ||
      response.status !== 200 ||
      !response.body?.data?.products
    ) {
      console.error("Invalid response from Shopify API:", response);
      return getMockProducts(); // Return mock on error
    }

    let products = response.body.data.products.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      handle: node.handle,
      description: node.description,
      price: node.priceRange.minVariantPrice.amount,
      currencyCode: node.priceRange.minVariantPrice.currencyCode,
      featuredImage: node.images.edges[0]?.node
        ? {
            url: node.images.edges[0].node.url,
            altText: node.images.edges[0].node.altText || node.title,
            width: node.images.edges[0].node.width,
            height: node.images.edges[0].node.height,
          }
        : {
            // Provide a default structure if no image exists
            url: "/placeholder.svg", // Or a more appropriate default
            altText: node.title,
            width: 100, // Example default width
            height: 100, // Example default height
          },
    }));

    // --- Post-fetch Price Filtering ---
    const minPrice = searchParams?.minPrice
      ? parseFloat(searchParams.minPrice)
      : undefined;
    const maxPrice = searchParams?.maxPrice
      ? parseFloat(searchParams.maxPrice)
      : undefined;

    if (minPrice !== undefined || maxPrice !== undefined) {
      products = products.filter((product) => {
        const price = parseFloat(product.price);
        const meetsMin = minPrice === undefined || price >= minPrice;
        const meetsMax = maxPrice === undefined || price <= maxPrice;
        return meetsMin && meetsMax;
      });
    }
    // ---------------------------------

    // TODO: Implement collection filtering post-fetch if needed, using product handles/tags/types

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return getMockProducts(); // Return mock on error
  }
}

// Mock data for development without a Shopify connection
function getMockProducts() {
  return [
    {
      id: "mock-product-1",
      title: "Hydrating Serum",
      handle: "hydrating-serum",
      description: "A deeply hydrating facial serum",
      price: "25000",
      currencyCode: "NGN",
      image: {
        url: "/placeholder.svg",
        altText: "Hydrating Serum",
      },
    },
    {
      id: "mock-product-2",
      title: "Facial Cleanser",
      handle: "facial-cleanser",
      description: "Gentle daily cleanser for all skin types",
      price: "12000",
      currencyCode: "NGN",
      image: {
        url: "/placeholder.svg",
        altText: "Facial Cleanser",
      },
    },
    {
      id: "mock-product-3",
      title: "SPF 50 Sunscreen",
      handle: "spf-50-sunscreen",
      description: "Broad spectrum protection with vitamin E",
      price: "15000",
      currencyCode: "NGN",
      image: {
        url: "/placeholder.svg",
        altText: "SPF 50 Sunscreen",
      },
    },
  ];
}

/**
 * Fetches a single product by handle from the Shopify storefront API
 */
export async function getProduct(handle: string) {
  const query = `
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        vendor
        productType
        tags
        availableForSale
        totalInventory
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              quantityAvailable
              price {
                amount
                currencyCode
              }
            }
          }
        }
        collections(first: 5) {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<ShopifyProductResponse>({
    query,
    variables: { handle },
  });

  if (!response.body.data.product) {
    return null;
  }

  const product = response.body.data.product;

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    vendor: product.vendor,
    productType: product.productType,
    tags: product.tags,
    availableForSale: product.availableForSale,
    totalInventory: product.totalInventory,
    collections:
      product.collections?.edges.map(({ node }) => ({
        id: node.id,
        title: node.title,
        handle: node.handle,
      })) || [],
    price: product.priceRange.minVariantPrice.amount,
    currencyCode: product.priceRange.minVariantPrice.currencyCode,
    images: product.images.edges.map(({ node }) => node),
    variants: product.variants.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      availableForSale: node.availableForSale,
      quantityAvailable: node.quantityAvailable,
      price: node.price,
    })),
  };
}

/**
 * Fetches collections from the Shopify storefront API
 */
export async function getCollections() {
  const query = `
    query GetCollections {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<ShopifyCollectionsResponse>({ query });

  const collections = response.body.data.collections.edges.map(({ node }) => {
    return {
      id: node.id,
      title: node.title,
      handle: node.handle,
      description: node.description,
      image: node.image,
    };
  });

  return collections;
}
