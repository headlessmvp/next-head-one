/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react"
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Tab,
  Transition,
} from "@headlessui/react"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid"
import Link from "next/link"

// Components
import { Layout } from "../components/Layout"

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
]
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
]
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
]
const products = [
  {
    id: 1,
    name: "Nomad Pouch",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
  },
  {
    id: 2,
    name: "Zip Tote Basket",
    href: "#",
    price: "$140",
    availability: "Washed Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg",
    imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <Layout>
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All Categories
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Product grid */}
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
                {products.map((product) => (
                  <Link key={product.id} href="/product/PURSE01">
                    <div className="group text-sm cursor-pointer">
                      {" "}
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-4 font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="italic text-gray-500">
                        {product.availability}
                      </p>
                      <p className="mt-2 font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}
