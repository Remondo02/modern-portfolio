import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { HOMEPAGE_URL } from './config'

// https://astro.build/config
export default defineConfig({
  site: HOMEPAGE_URL,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
