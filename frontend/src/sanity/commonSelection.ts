import { q, type Selection } from 'groqd'

export const bodySelection = {
  body: q('body')
    .filter()
    .select({
      '_type == "block"': ['{...}', q.contentBlock()],
    }),
} satisfies Selection
