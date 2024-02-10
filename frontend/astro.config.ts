// import { sanityIntegration } from '@sanity/astro'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { HOMEPAGE_URL } from './config'

// import sanity from '@sanity/astro'

// https://astro.build/config
export default defineConfig({
  site: HOMEPAGE_URL,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    // sanityIntegration({
    //   projectId: '<YOUR-PROJECT-ID>',
    //   dataset: '<YOUR-DATASET-NAME>',
    //   // Set useCdn to false if you're building statically.
    //   useCdn: false,
    // }),
  ],
})
