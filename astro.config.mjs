// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      include: ['d3'], // Incluye d3 para que sea reconocido como dependencia en Vite
    },
  },
});