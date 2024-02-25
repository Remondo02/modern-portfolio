import { SanityImage as SanityImageLib } from 'sanity-image'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = 'production'
const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/`

export const SanityImage = (
  props: Omit<
    React.ComponentProps<typeof SanityImageLib>,
    'baseUrl' | 'dataset' | 'projectId'
  >,
): Props => <SanityImageLib id={props.id} baseUrl={baseUrl} {...props} />
