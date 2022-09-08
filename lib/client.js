import sanityClient from "@sanity/client"

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-09-08",
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  useCdn: true,
})
