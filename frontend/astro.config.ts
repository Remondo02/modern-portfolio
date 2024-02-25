import { sanityIntegration } from '@sanity/astro'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { HOMEPAGE_URL } from './config'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: HOMEPAGE_URL,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanityIntegration({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      token: import.meta.env.VITE_SANITY_TOKEN,
      studioBasePath: '/admin',
    }),
  ],
  adapter: netlify(),
})
