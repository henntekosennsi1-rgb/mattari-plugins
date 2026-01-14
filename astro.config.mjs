import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/mattari-plugins',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
