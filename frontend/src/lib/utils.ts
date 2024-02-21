import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
// import { type Props } from '@/pages/project/[slug].astro'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function metaDescriptionSlice(text: any) {
  return text
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')
    .slice(0, 157)
    .concat('...')
}
