import { useContext, useEffect } from "react"

// Context
import { ProductContext } from "../context/ProductContext"

// Sanity
import { client } from "../lib/client"

// Components
import { Hero } from "../components/sections/Hero"
import { Category } from "../components/sections/Category"
import { Featured } from "../components/sections/Featured"
import { Favourites } from "../components/sections/Favourites"
import { CTA } from "../components/sections/CTA"
import { Layout } from "../components/Layout"

export default function Home({ data }) {
  const { setAllData, allData, setSubCategories } = useContext(ProductContext)

  useEffect(() => {
    setAllData(data)
  }, [])

  useEffect(() => {
    let subCatTemp = []
    data?.categories?.map((category) => {
      category?.subCategories?.map((sub) => subCatTemp.push(sub))
    })
    setSubCategories(subCatTemp)
  }, [allData])

  console.log("INDEX : ", allData)

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
    saleText,
    bannerImage{
      'url': asset->url
    },
    'categories': categories[]->{
      name,
      label,
      slug,
      description,
      image{
        'url': asset->url
      },
    'subCategories': subCategories[]->{
      name,
      label,
      slug,
      description,
      image{
      'url': asset->url
    },
      'products': products[]->{
        name,
        description,
        caption,
        'colors': colors[]->{
          name,
          code,
        },         
        'sizes': sizes[]->{
          name,
        },
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
        'colors': colors[]->{
          name,
          code,
        },         
        'sizes': sizes[]->{
          name,
        },
        'images': images[]->{
          name,
          description,
          'url': images.asset->url
      }
    },
    'sale':sale[]->{
      name,
        description,
        caption,
        reference,
        'colors': colors[]->{
          name,
          code,
        },         
        'sizes': sizes[]->{
          name,
        },
        'images': images[]->{
          name,
          description,
          'url': images.asset->url
      }
    },
    'collection':collection[]->{
      name,
        description,
        caption,
        reference,
        'colors': colors[]->{
          name,
          code,
        },         
        'sizes': sizes[]->{
          name,
        },
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
