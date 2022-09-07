import React, { Fragment, useContext } from 'react'

// Headless UI
import { Popover, Transition } from '@headlessui/react'

// Heroicons
import {
    Bars3Icon,
    XMarkIcon, ShoppingCartIcon, ShoppingBagIcon
} from '@heroicons/react/24/outline'

// Context
import { ProductContext } from '../context/ProductContext'


export const Navbar = () => {
    const { cart, removeFromCart } = useContext(ProductContext)

    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className='md:hidden'>
                        <h2 className='text-xl'>Head 01</h2>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className='hidden md:block'>
                        <h2 className='text-2xl'>Head 01</h2>
                    </div>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        {/* <a
                            href="#"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Sign up
                        </a> */}
                        {/* <a href="#" className="whitespace-nowrap ml-6 text-base font-medium text-gray-500 hover:text-gray-900 relative">
                            <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                            <div className='bg-indigo-600 w-4 h-4 rounded-full text-xs items-center justify-center absolute -top-2 -right-3 flex text-white'>2</div>
                        </a> */}
                        {/* Shopping Cart */}
                        <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8 z-50">
                            <Popover.Button className="group -m-2 flex items-center p-2">
                                <ShoppingBagIcon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.length}</span>
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
                                            {cart.map((product) => (
                                                <li key={product.id} className="flex items-center py-6">
                                                    <img
                                                        src={product.images[0].url}
                                                        alt={product.images[0].name}
                                                        className="h-16 w-16 flex-none rounded-md border border-gray-200"
                                                    />
                                                    <div className="ml-4 flex-auto">
                                                        <h3 className="font-medium text-gray-900">
                                                            <a href={product.href}>{product.name}</a>
                                                        </h3>
                                                        <p className="text-gray-500">{product.color}</p>
                                                        <p className="text-gray-800">${product.price}</p>

                                                        <p onClick={() => removeFromCart(product.id)} className='text-red-400 cursor-pointer text-xs'>Remove</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            type="submit"
                                            className="w-full rounded-md border border-transparent bg-indigo-600 mt-6 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                        >
                                            Checkout
                                        </button>


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
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
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
                                <div className='md:hidden'>
                                    <h2 className='text-xl'>Head 01</h2>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">

                            </div>
                        </div>

                        <div className="space-y-6 py-6 px-5">
                            <div>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>

    )
}
