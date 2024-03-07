import { sanityClient } from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'
import { makeSafeQueryRunner } from 'groqd'

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>
type ImageSource = Parameters<ImageUrlBuilder['image']>[0]

export const runQuery = makeSafeQueryRunner(
  (query, params: Record<string, unknown> = {}) =>
    sanityClient.fetch(query, params),
)

export const urlForImage = (source: ImageSource) =>
  imageUrlBuilder(sanityClient).image(source)
