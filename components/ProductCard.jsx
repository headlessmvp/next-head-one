import React from 'react'

// Router
import { useRouter } from 'next/router'

export const ProductCard = ({ imageSrc, imageAlt, name, price, reference }) => {
    const router = useRouter()
    return (
        <div onClick={() => { router.push(`product/${reference}`) }} className="group cursor-pointer">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
        </div>
    )
}