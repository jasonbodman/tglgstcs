import sanityClient from '@sanity/client'

export default sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'undefined',
	useCdn: process.env.NODE_ENV === 'false',  // `false` if you want to ensure fresh data
	apiVersion: process.env.NEXT_PUBLIC_API_VERSION
})

