export async function search(options = {}) {
  const params = { ...options }

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join(`&`)

  if (options?.nextCursor) {
    params.next_cursor = options.next_cursor
    delete params.nextCursor
  }

  // Get Cloudinary Data
  let results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_SECRET_KEY
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json())

  return results
}

export async function getFolders(options = {}) {
  // Get Cloudinary Data
  let results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/folders`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_SECRET_KEY
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json())

  return results
}

export function mapImageResources(resources) {
  return resources.map((resource) => {
    const { width, height, asset_id, public_id, secure_url } = resource

    return { id: asset_id, title: public_id, image: secure_url, width, height }
  })
}
