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
}

export interface Skill {
  name: string
  title: string
}

// export default defineType({
//   name: 'skill',
//   title: 'Skill',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//   ],
// })
