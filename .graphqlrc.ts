import { ApiType, shopifyApiProject } from "@shopify/api-codegen-preset";
import { LATEST_API_VERSION } from "@shopify/shopify-api";
import fs from "fs";
import type { IGraphQLConfig } from "graphql-config";

function getConfig() {
  const config: IGraphQLConfig = {
    projects: {
      // Generate types for your app
      default: shopifyApiProject({
        apiType: ApiType.Storefront,
        apiVersion: LATEST_API_VERSION,
        documents: [
          "./src/graphql/queries/**/*.graphql",
          "./src/graphql/mutations/**/*.graphql",
        ],
        outputDir: "./src/types",
      }),
    },
  };

  // Enables autocompletion for your Shopify Functions
  let extensions: string[] = [];
  try {
    extensions = fs.readdirSync("./extensions");
  } catch {
    // ignore if no extensions
  }

  for (const entry of extensions) {
    const extensionPath = `./extensions/${entry}`;
    const schema = `${extensionPath}/schema.graphql`;
    if (!fs.existsSync(schema)) {
      continue;
    }
    config.projects[entry] = {
      schema,
      documents: [`${extensionPath}/**/*.graphql`],
    };
  }

  return config;
}

const config = getConfig();

export default config;
