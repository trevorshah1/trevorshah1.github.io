// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://trevorshah1.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});