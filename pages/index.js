import { useContext, useEffect, useState, Fragment } from "react"

// Headless UI
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"

// Heroicons
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

// Next
import Link from "next/link"

// Next
import Head from "next/head"

// Styles
import styles from "../styles/Home.module.css"

// Context
import { ProductContext } from "../context/ProductContext"

// Sanity
import { client } from "../lib/client"

// Commerce Layer
import {
  CommerceLayer,
  ItemContainer,
  OrderContainer,
  OrderStorage,
} from "@commercelayer/react-components"

// Components
import { Hero } from "../components/sections/Hero"
import { Category } from "../components/sections/Category"
import { Featured } from "../components/sections/Featured"
import { Favourites } from "../components/sections/Favourites"
import { CTA } from "../components/sections/CTA"
import { Footer } from "../components/Footer"
import { ProductCard } from "../components/ProductCard"
import { Layout } from "../components/Layout"

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Home({ data }) {
  const {
    products,
    setProducts,
    setAllData,
    token,
    setSubCategories,
    allData,
  } = useContext(ProductContext)
  const [open, setOpen] = useState(false)

  const [origin, setOrigin] = useState("http://localhost:3000")

  useEffect(() => {
    setSubCategories(data.categories[0].subCategories)
    data.categories[0].subCategories.map((subCategory) => {
      if (subCategory.name.search("all") !== -1) {
        setProducts(subCategory.products)
      }
    })

    setAllData(data)
  }, [])

  useEffect(() => {
    setOrigin(location.origin)
  }, [])

  console.log("DATA: ", allData)

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Hero section */}
        <Hero />
      </div>

      {/* Category section */}
      <Category />

      {/* Featured section */}
      <Featured />

      {/* Favorites section */}
      <Favourites />

      {/* CTA section */}
      <CTA />
    </Layout>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "head"]{
    id,
    name,
    country,
    flag{
      'url': asset->url
    },
    headline,
    subHeading,
    'images': images[]->{
      name,
      'url': images.asset->url
    },
    url,
    bannerHeading,
    bannerText,
    bannerImage{
      'url': asset->url
    },
    'categories': categories[]->{
      name,
      label,
      slug,
      description,
    'subCategories': subCategories[]->{
      name,
      label,
      slug,
      description,
      'products': products[]->{
        name,
        description,
        caption,
        reference,
        'images': images[]->{
          name,
          description,
          'url': images.asset->url
      }
    }}},   
    'favourites':favourites[]->{
      name,
        description,
        caption,
        reference,
        'images': images[]->{
          name,
          description,
          'url': images.asset->url
      }
    }
}`

  // Get Sanity Data
  const heads = await client.fetch(query)

  let filtered = {}

  if (heads.length > 0) {
    filtered = heads.filter(
      (head) => head.id === process.env.NEXT_PUBLIC_HEAD_ID
    )
  }

  return {
    props: {
      data: filtered[0],
    },
  }
}
