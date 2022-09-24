import React, { useState, useEffect } from 'react'

// Next
import { useRouter } from 'next/router'
import Image from 'next/image'

// Utils
import { cloudinaryUrl, urlBlurred } from '../utils/index'
import { search, mapImageResources, getFolders } from "../lib/cloudinary"


export const ProductCard = ({ imageSrc, imageAlt, name, price, reference }) => {
    let [images, setImages] = useState()

    const router = useRouter()


    useEffect(() => {
        ; (async function run() {
            const results = await fetch("/api/search", {
                method: "POST",
                body: JSON.stringify({
                    expression: `${process.env.NEXT_PUBLIC_CLOUDINARY_ASSETS_TAG} AND context.reference:${reference}`,
                    with_field: "context",
                    max_results: 4,
                }),
            }).then((resp) => resp.json())
            let { resources } = results
            const imgs = mapImageResources(resources)
            setImages(imgs)

        })()
    }, [])

    return (
        <div onClick={() => { router.push(`product/${reference}`) }} className="group cursor-pointer">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                {images && (<Image
                    src={cloudinaryUrl(images[0].title)}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    layout='fill'
                    unoptimized={true}

                />)}
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
        </div>
    )
}


export async function getServerSideProps() {
    const query = `*[_type == "head"]{
      id,
      name,
      url,
      'categories': categories[]->{
        name,
        label,
        slug,
        description,
      'subCategories': subCategories[]->{
        name,
        label,
        slug,
        description,
        'products': products[]->{
          name,
          description,
          caption,
          price,
          currency,
          reference,
          'images': images[]->{
            name,
            description,
            'url': images.asset->url
        }
      }}
    }
  }`

    // Get Sanity Data
    const heads = await client.fetch(query)

    let filtered = {}

    if (heads.length > 0) {
        filtered = heads.filter(
            (head) => head.id === process.env.NEXT_PUBLIC_HEAD_ID
        )
    }

    // Cloudinary Data
    const results = await search({
        expression: `glasses AND context.reference:GLASSES01`,
        with_field: "context",
        max_results: 4,
    })

    const { resources } = results
    const images = mapImageResources(resources)

    return {
        props: {
            data: filtered[0],
            images,
        },
    }
}
