// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ponytail: placeholder domain — one line to change when a real one is attached.
export default defineConfig({
  site: 'https://jeff-liknes.vercel.app',
  integrations: [sitemap()],
});
