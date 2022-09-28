import Link from 'next/link'
import React, { useContext } from 'react'

// Context
import { ProductContext } from '../../context/ProductContext'

const favorites = [
    {
        id: 1,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
        id: 2,
        name: 'Off-White Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
        imageAlt: "Model wearing women's off-white cotton crewneck tee.",
    },
    {
        id: 3,
        name: 'Mountains Artwork Tee',
        price: '$36',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
        imageAlt:
            "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
    },
]

export const Favourites = () => {

    const { allData } = useContext(ProductContext)

    return (
        <section aria-labelledby="favorites-heading">
            <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        Our Favorites
                    </h2>
                    <Link href="/favourites" >
                        <span className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block cursor-pointer"> Browse all favorites
                            <span aria-hidden="true"> &rarr;</span></span>

                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
                    {allData?.favourites?.map((favorite) => (
                        <div key={favorite.id} className="group relative cursor-pointer">
                            <div className="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                                <img
                                    src={favorite?.images[0]?.url}
                                    alt={favorite?.images[0]?.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                <Link href={`product/${favorite?.reference}`}>
                                    <span> <span className="absolute inset-0" />
                                        {favorite.name}</span>
                                </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{favorite?.caption}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:hidden">
                    <Link href="/favourites" >
                        <span className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">Browse all favorites
                            <span aria-hidden="true"> &rarr;</span></span>
                    </Link>
                </div>
            </div>
        </section>)
}
