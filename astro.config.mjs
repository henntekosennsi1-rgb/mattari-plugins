import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://henntekosennsi1-rgb.github.io',
  base: '/mattari-plugins',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
