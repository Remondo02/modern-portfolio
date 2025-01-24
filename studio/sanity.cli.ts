import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'f3coktq6',
    dataset: process.env.SANITY_STUDIO_DATASET!,
  }
})
