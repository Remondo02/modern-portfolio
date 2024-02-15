import { sanityClient } from 'sanity:client'
import {
  q,
  makeSafeQueryRunner,
  type TypeFromSelection,
  type Selection,
  InferType,
  sanityImage,
  nullToUndefined,
} from 'groqd'

export const projectQuery = q('*')
  .filter("_type == 'project' && defined(slug)")
  .order('createdAt desc')
  .grab({
    slug: ['slug.current', q.string()],
    mainImage: sanityImage('mainImage', { withCrop: true }).nullable(),
    title: q.string(),
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
    skills: q('skills').filter().deref().grab({ title: q.string() }),
    publishedAt: ['_createdAt', q.string()],
    excerpt: q.string().nullable(),
  })

export const runQuery = makeSafeQueryRunner(
  (query, params: Record<string, unknown> = {}) =>
    sanityClient.fetch(query, params),
)
