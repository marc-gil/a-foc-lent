// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://marc-gil.github.io',
  base: '/a-foc-lent',
  fonts: [{
    provider: fontProviders.local(),
    name: "Courier Prime",
    cssVariable: "--font-courier-prime",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Courier Prime/CourierPrime-Regular.ttf'],
        weight: 'normal',
        style: 'normal'
      },
      {
        src: ['./src/assets/fonts/Courier Prime/CourierPrime-Bold.ttf'],
        weight: 'bold',
        style: 'normal'
      }],
    }
  }]
});
