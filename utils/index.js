// Cloudinary
import { buildUrl } from "cloudinary-build-url"

// URL Builder
export const cloudinaryUrl = (title) =>
  buildUrl(title, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  })

export const urlBlurred = buildUrl("cld-sample-5", {
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
  transformations: {
    effect: "blur:1000",
    quality: 1,
  },
})
