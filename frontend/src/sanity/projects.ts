import { q, type TypeFromSelection, type Selection, sanityImage } from 'groqd'
import { bodySelection } from './commonSelection'

const altText = {
  altText: q.string().nullable(),
} satisfies Selection

export const commonProjectSelection = {
  slug: ['slug.current', q.string()],
  mainImage: sanityImage('mainImage', {
    withCrop: true,
    additionalFields: altText,
  }).nullable(),
  title: q.string(),
  skills: q('skills').filter().deref().grab({ title: q.string() }),
  createdAt: ['createdAt', q.string()],
} satisfies Selection

export const pageProjectSelection = {
  ...commonProjectSelection,
  excerpt: q.string(),
} satisfies Selection

export const singleProjectSelection = {
  ...commonProjectSelection,
  body: bodySelection,
  projectLink: q.string().url().nullable(),
  repositoryLink: q.string().url().nullable(),
  projectImages: sanityImage('projectImages', {
    isList: true,
    withCrop: true,
    additionalFields: altText,
  }).nullable(),
} satisfies Selection

export type PageProject = TypeFromSelection<typeof pageProjectSelection>

export type SingleProject = TypeFromSelection<typeof singleProjectSelection>
