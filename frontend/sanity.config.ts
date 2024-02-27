import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from '../studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: 'f3coktq6',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
