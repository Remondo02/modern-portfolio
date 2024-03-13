import { q, type TypeFromSelection, type Selection } from 'groqd'
import { bodySelection } from './commonSelection'

export const experienceSelection = {
  body: bodySelection,
  position: q.string(),
  company: q.string(),
  startDate: ['startDate', q.string()],
  endDate: ['endDate', q.string().nullable()],
  endDateOrActive: q.boolean(),
} satisfies Selection

export type Experiences = TypeFromSelection<typeof experienceSelection>
