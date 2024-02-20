// /my-blog/frontend/src/sanity/urlForImage.js

import { sanityClient } from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>
type ImageSource = Parameters<ImageUrlBuilder['image']>[0]

export const urlForImage = (source: ImageSource) =>
  imageUrlBuilder(sanityClient).image(source)
