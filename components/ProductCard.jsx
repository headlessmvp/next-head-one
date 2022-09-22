import React from 'react'

// Next
import Link from 'next/link'

export const ProductCard = ({ imageSrc, imageAlt, name, price, reference }) => (
    <div className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Link href={`product/${reference}`}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full cursor-pointer w-full object-cover object-center group-hover:opacity-75"
                /></Link>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
    </div>
)
