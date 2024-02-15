import { sanityClient } from 'sanity:client'
import {
  q,
  makeSafeQueryRunner,
  type TypeFromSelection,
  type Selection,
  sanityImage,
} from 'groqd'

export const commentProjectSelection = {
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

const MergedProjectPageProps = {
  ...commentProjectSelection,
  ...pageProjectSelection,
}

const MergedProjectSingleProps = {
  ...commentProjectSelection,
  ...singleProjectSelection,
}

export type PageProjectsProps = TypeFromSelection<typeof MergedProjectPageProps>

export type SingleProjectsProps = TypeFromSelection<
  typeof MergedProjectSingleProps
>

export const runQuery = makeSafeQueryRunner(
  (query, params: Record<string, unknown> = {}) =>
    sanityClient.fetch(query, params),
)
