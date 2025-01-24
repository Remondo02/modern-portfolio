import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from '../studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: 'f3coktq6',
  dataset: import.meta.env.MODE === 'production' ? 'production' : 'development',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
