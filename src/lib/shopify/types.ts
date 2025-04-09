// Shopify API response types
export type ShopifyRequestOptions = {
  query: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables?: any;
};

export type ShopifyProductsResponse = {
  data: {
    products: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          handle: string;
          description: string;
          priceRange: {
            minVariantPrice: {
              amount: string;
              currencyCode: string;
            };
          };
          images: {
            edges: Array<{
              node: {
                url: string;
                altText: string | null;
                width?: number;
                height?: number;
              };
            }>;
          };
        };
      }>;
    };
  };
};

export type ShopifyProductResponse = {
  data: {
    product: {
      id: string;
      title: string;
      handle: string;
      description: string;
      descriptionHtml: string;
      priceRange: {
        minVariantPrice: {
          amount: string;
          currencyCode: string;
        };
      };
      images: {
        edges: Array<{
          node: {
            url: string;
            altText: string | null;
            width: number;
            height: number;
          };
        }>;
      };
      variants: {
        edges: Array<{
          node: {
            id: string;
            title: string;
            availableForSale: boolean;
            price: {
              amount: string;
              currencyCode: string;
            };
          };
        }>;
      };
    };
  };
};

export type ShopifyCollectionsResponse = {
  data: {
    collections: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          handle: string;
          description: string;
          image: {
            url: string;
            altText: string | null;
          } | null;
        };
      }>;
    };
  };
};

// Simplified types for use in components
export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: string;
  currencyCode: string;
  image?: {
    url: string;
    altText: string | null;
    width?: number;
    height?: number;
  };
};

export type ProductDetails = Product & {
  descriptionHtml: string;
  images: Array<{
    url: string;
    altText: string | null;
    width: number;
    height: number;
  }>;
  variants: Array<{
    id: string;
    title: string;
    availableForSale: boolean;
    price: {
      amount: string;
      currencyCode: string;
    };
  }>;
};

export type Collection = {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: {
    url: string;
    altText: string | null;
  } | null;
};
