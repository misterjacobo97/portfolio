import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://misterjacobo97.github.io",
  base: "portfolio",
  integrations: [tailwind(), solidJs()],
});

