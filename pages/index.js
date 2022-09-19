import { useContext, useEffect, useState } from "react"

// Next
import Head from "next/head"

// Components
import { Navbar } from "../components/Navbar"
import { Layout } from "../components/Layout"

// Styles
import styles from "../styles/Home.module.css"
import { ProductCard } from "../components/ProductCard"

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

export default function Home({ data }) {
  const { products, setProducts, setAllData, token, setSubCategories } =
    useContext(ProductContext)

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
  return (
    <CommerceLayer
      accessToken={token}
      endpoint={process.env.NEXT_PUBLIC_CL_BASE_ENDPOINT}
    >
      <OrderStorage persistKey="abc-002">
        <OrderContainer
          attributes={{
            cart_url: `${origin}`,
            return_url: `${origin}`,
            privacy_url: `${origin}`,
          }}
        >
          <ItemContainer>
            <div className={styles.container}>
              <Head>
                <title>Head 01</title>
                <meta
                  name="description"
                  content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
              </Head>

              <Navbar />
              <main className="bg-white">
                <Layout>
                  <div className="mx-auto max-w-2xl py-10 sm:py-2  lg:max-w-7xl">
                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                      {products.map((product) => (
                        <ProductCard
                          key={product.reference}
                          product={product}
                          name={product.name}
                          imageAlt={product.images[0].name}
                          imageSrc={product.images[0].url}
                          id={product.id}
                          color={product.color}
                          price={product.price}
                          reference={product.reference}
                        />
                      ))}
                    </div>
                  </div>
                </Layout>
              </main>
            </div>
          </ItemContainer>
        </OrderContainer>
      </OrderStorage>
    </CommerceLayer>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "head"]{
    id,
    name,
    url,
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
        color,
        price,
        currency,
        reference,
        'images': images[]->{
          name,
          description,
          'url': images.asset->url
      }
    }}
  }
}`
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
