// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aluaro.com.uy',
  // Sitio estático de varias páginas, sin base path (dominio propio).
  build: {
    format: 'directory',
  },
});
