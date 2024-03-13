import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type Body } from '@/sanity/commonSelection'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(
  date: string,
  monthFormat: 'short' | 'long' = 'long',
  isDay: boolean = true,
) {
  return new Date(date).toLocaleDateString('en-US', {
    month: monthFormat,
    day: isDay ? 'numeric' : undefined,
    year: 'numeric',
  })
}

export function metaDescriptionSlice(body: Body) {
  return body
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child) => child.text).join('')
    })
    .join('\n\n')
    .slice(0, 157)
    .concat('...')
}
