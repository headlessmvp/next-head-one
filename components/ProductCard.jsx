import React from 'react'


// Commerce Layer
import {
    PricesContainer,
    Price,
    AddToCartButton,
    AvailabilityContainer, AvailabilityTemplate
} from "@commercelayer/react-components"

// Next
import Link from 'next/link'

export const ProductCard = ({ imageSrc, imageAlt, name, color, price, product, reference }) => {

    return (
        <div>
            <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="relative mt-4">
                    <Link href={`product/${reference}`} className="text-sm cursor-pointer hover:text-indigo-700 font-medium text-gray-900">
                        {name}
                    </Link>
                    <p className="mt-1 text-sm text-gray-500">
                        {color}
                    </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />

                    <PricesContainer>
                        <Price skuCode={reference} className="relative text-lg font-semibold text-white" compareClassName="line-through text-sm md:text-xs ml-2 mb-1"
                        />
                    </PricesContainer>
                </div>
            </div>
            <AvailabilityContainer>
                <AvailabilityTemplate />
            </AvailabilityContainer>

            <div className="mt-6">
                <AddToCartButton
                    label={"Add to bag"}
                    skuCode={reference}
                    className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200 cursor-pointer"
                />

            </div>
        </div>)
}
