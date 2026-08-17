import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://your-project.pages.dev', // Replace with your Cloudflare Pages URL
  integrations: [mdx(), sitemap(), tailwind()]
});