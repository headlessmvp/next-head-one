import Link from 'next/link'
import React, { useContext } from 'react'

// Context
import { ProductContext } from '../../context/ProductContext'


export const Featured = () => {

    const { allData } = useContext(ProductContext)

    return (
        <section aria-labelledby="cause-heading">
            <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                <div className="absolute inset-0 overflow-hidden">
                    {allData && allData?.bannerImage && <img
                        src={allData?.bannerImage?.url}
                        alt={allData?.bannerHeading}
                        className="h-full w-full object-cover object-center"
                    />}

                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                    <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {allData?.bannerHeading && allData?.bannerHeading}
                    </h2>
                    <p className="mt-3 text-xl text-white">
                        {allData?.bannerText && allData?.bannerText}

                    </p>
                    <Link
                        href="/story"

                    >
                        <span className="mt-8 block w-full cursor-pointer rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read our story
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
