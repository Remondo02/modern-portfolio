import { sanityClient } from 'sanity:client'
import {
  q,
  makeSafeQueryRunner,
  type TypeFromSelection,
  type Selection,
  sanityImage,
} from 'groqd'

export const commonProjectSelection = {
  slug: ['slug.current', q.string()],
  mainImage: sanityImage('mainImage', { withCrop: true }).nullable(),
  title: q.string(),
  skills: q('skills').filter().deref().grab({ title: q.string() }),
  createdAt: ['createdAt', q.string()],
} satisfies Selection

export const pageProjectSelection = {
  excerpt: q.string(),
} satisfies Selection

export const singleProjectSelection = {
  body: q('body')
    .filter()
    .select({
      '_type == "block"': ['{...}', q.contentBlock()],
      '_type == "figure"': {
        _type: q.literal('figure'),
        asset: q('asset').grabOne('_ref', q.string()),
      },
      default: {
        _key: q.string(),
        _type: ['"unsupported"', q.literal('unsupported')],
        unsupportedType: ['_type', q.string()],
      },
    }),
} satisfies Selection

export const projectPageSelection = {
  ...commonProjectSelection,
  ...pageProjectSelection,
}

export const projectSingleSelection = {
  ...commonProjectSelection,
  ...singleProjectSelection,
}

export type PageProjectsProps = TypeFromSelection<typeof projectPageSelection>

export type SingleProjectsProps = TypeFromSelection<
  typeof projectSingleSelection
>

export const runQuery = makeSafeQueryRunner(
  (query, params: Record<string, unknown> = {}) =>
    sanityClient.fetch(query, params),
)
