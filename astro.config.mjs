import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), tailwind(), keystatic()],
  output: "hybrid",
  adapter: vercel()
});