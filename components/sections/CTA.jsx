import Link from 'next/link'
import React from 'react'

// Context
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'


export const CTA = () => {
    const { allData } = useContext(ProductContext)


    return (
        <section aria-labelledby="sale-heading">
            <div className="overflow-hidden pt-32 sm:pt-14">
                <div className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                    {allData?.saleText}
                                </h2>
                                <div className="mt-6 text-base">
                                    <Link href="/sale" >
                                        <span className="font-semibold text-white cursor-pointer">Shop the sale
                                            <span aria-hidden="true"> &rarr;</span></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            {allData?.images && allData?.images[0] && <img
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src={allData?.images[0]?.url}
                                                alt="product"
                                            />}

                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            {allData?.images && allData?.images[1] && <img
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src={allData?.images[1]?.url}
                                                alt="product"
                                            />}

                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            {allData?.images && allData?.images[2] && <img
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src={allData?.images[2]?.url}
                                                alt="product"
                                            />}

                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            {allData?.images && allData?.images[3] && <img
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src={allData?.images[3]?.url}
                                                alt="product"
                                            />}

                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            {allData?.images && allData?.images[4] && <img
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src={allData?.images[4]?.url}
                                                alt="product"
                                            />}

                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            {allData?.images && allData?.images[5] && <img
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src={allData?.images[5]?.url}
                                                alt="product"
                                            />}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
