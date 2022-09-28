import React, { useContext } from 'react'

// Next
import Link from 'next/link'

// Context
import { ProductContext } from '../../context/ProductContext'

export const Hero = () => {

    const { allData } = useContext(ProductContext)

    return (
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                    {allData && allData?.headline && <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        {allData?.headline}
                    </h1>}
                    {allData && allData?.subHeading && <p className="mt-4 text-xl text-gray-500">
                        {allData?.subHeading}
                    </p>}

                </div>
                <div>
                    <div className="mt-10">
                        {/* Decorative image grid */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div className="flex items-center space-x-6 lg:space-x-8">
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        {allData?.images && allData?.images[0] && <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                            <img
                                                src={allData?.images[0]?.url}
                                                alt={allData?.images[0]?.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>}
                                        {allData?.images && allData?.images[1] && <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src={allData?.images[1]?.url}
                                                alt={allData?.images[1]?.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>}
                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">

                                        {allData?.images && allData?.images[2] && <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src={allData?.images[2]?.url}
                                                alt={allData?.images[2]?.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>}




                                        {allData?.images && allData?.images[3] && <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src={allData?.images[3]?.url}
                                                alt={allData?.images[3]?.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>}



                                        {allData?.images && allData?.images[4] && <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src={allData?.images[4]?.url}
                                                alt={allData?.images[4]?.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>}




                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">

                                        {allData?.images && allData?.images[5] && <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src={allData?.images[5]?.url}
                                                alt={allData?.images[5]?.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>}


                                        {allData?.images && allData?.images[6] && <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src={allData?.images[6]?.url}
                                                alt={allData?.images[6]?.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/collection"

                        >
                            <span className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 cursor-pointer">                                    Shop Collection
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>)
}
