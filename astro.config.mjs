import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Add Vite alias config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@components': '/src/components',
        // Add other aliases as needed
      },
    },
  },
});
