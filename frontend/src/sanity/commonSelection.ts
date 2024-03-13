import { q, type InferType } from 'groqd'

export const bodySelection = q('body')
  .filter()
  .select({
    '_type == "block"': ['{...}', q.contentBlock()],
  })

export type Body = InferType<typeof bodySelection>
