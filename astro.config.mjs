import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), preact()],
  output: "hybrid",
  adapter: vercel()
});