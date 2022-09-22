import React, { Fragment } from "react"

// Headless UI
import { Popover, Transition } from "@headlessui/react"

// Heroicons
import {
    XMarkIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline"

// Commerce Layer
import {
    TotalAmount,
    CheckoutLink,
    LineItemsCount,
    LineItem,
    LineItemAmount,
    LineItemsContainer,
    LineItemImage,
    LineItemQuantity,
    LineItemName,
    LineItemRemoveLink,
} from "@commercelayer/react-components"
import Link from "next/link"

export const Navbar = () => {

    return (
        <LineItemsContainer>
            <Popover className="relative bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <span className="sr-only">Your Company</span>
                            <Link href="/">
                                <img
                                    className="h-8 cursor-pointer w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <Link className="text-xl cursor-pointer" href={'/'}>Head 01</Link>
                        </div>
                        <div className="-my-2 flex -mr-2 md:hidden">
                            <ShoppingBagIcon
                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><LineItemsCount /></span>

                        </div>

                        <div className="hidden md:block">
                            <Link className="text-2xl cursor-pointer" href={'/'}>Head 01</Link>
                        </div>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

                            {/* Shopping Cart */}
                            <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8 z-50">
                                <Popover.Button className="group -m-2 flex items-center p-2">
                                    <ShoppingBagIcon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"><LineItemsCount /></span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                                        <h2 className="sr-only">Shopping Cart</h2>

                                        <form className="mx-auto max-w-2xl px-4">

                                            <ul role="list" className="divide-y divide-gray-200">
                                                <LineItem>
                                                    <div className="flex items-center py-6">

                                                        <LineItemImage className="h-16 w-16 flex-none rounded-md border border-gray-200"
                                                            width={50} />
                                                        <div className="ml-4 flex-auto">
                                                            <h3 className="font-medium text-gray-900">
                                                                <LineItemName />
                                                            </h3>
                                                            <LineItemQuantity max={10} className="block mt-1 text-xs py-1" />
                                                            {/* <Errors resource="lineItem" field="quantity" /> */}
                                                            <LineItemAmount />
                                                            <LineItemRemoveLink className='text-red-400 cursor-pointer text-xs block' />
                                                        </div>
                                                    </div>
                                                </LineItem>


                                            </ul>


                                            <p className="text-base">Total: <TotalAmount className="text-base" /></p>
                                            <CheckoutLink
                                                type="submit"
                                                className="w-full rounded-md border border-transparent bg-indigo-600 mt-6 py-2 px-4 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                            />

                                        </form>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
                    >
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="md:hidden">
                                        <h2 className="text-xl">Head 01</h2>
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6"></div>
                            </div>

                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </LineItemsContainer>

    )
}
