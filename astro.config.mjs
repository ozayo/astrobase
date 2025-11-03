import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwind()],
    css: {
      devSourcemap: true,
    },
    build: {
      cssMinify: 'esbuild',
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress unused import warnings from Astro internals
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT' && warning.ids?.some(id => id.includes('astro/dist/assets/utils/remotePattern'))) {
            return;
          }
          warn(warning);
        },
      },
    },
  },
});
