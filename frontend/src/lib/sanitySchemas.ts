export interface Project {
  slug: {
    current: string
  }
  createdAt: string
  mainImage: {
    asset: {}
  }
  body: {
    asset?: {
      _ref: string
      _type: string
    }
    markDefs?: [{}] | []
    children?: [{}] | []
    style?: string
    level?: number
    listItem?: string
  }[]
  title: string
  skills: Skill[]
  excerpt: string[]
  projectLink?: string
  repositoryLink: string
}

export interface Skill {
  title: string
}
