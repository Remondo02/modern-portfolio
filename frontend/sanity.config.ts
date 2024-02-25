import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from '../studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: 'f3coktq6',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
