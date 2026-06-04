// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Your live URL — used for canonical links and social previews.
  site: 'https://diego-arapovic.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
