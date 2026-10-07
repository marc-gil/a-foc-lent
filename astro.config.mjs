// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://marc-gil.github.io',
  base: '/a-foc-lent',
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Courier Prime",
      cssVariable: "--font-courier-prime",
      fallbacks: ['Courier New', 'Liberation Mono', 'monospace'],
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
    },
    {
      provider: fontProviders.local(),
      name: "Big Shoulders Display",
      cssVariable: "--font-big-shoulders-display",
      fallbacks: ["Arial Narrow", "Impact", "sans-serif"],
      options: {
        variants: [{
          src: ['./src/assets/fonts/Big Shoulders Display/BigShoulders-VariableFont_opsz,wght.ttf'],
          weight: "100 900",
          style: 'normal',
        }]
      }
    }
  ]
});
