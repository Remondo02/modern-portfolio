import { q, type Selection, sanityImage } from 'groqd'

export const skillSelection = {
  title: q.string(),
  featuredSkill: q.boolean(),
  logo: sanityImage('logo').nullable(),
} satisfies Selection
