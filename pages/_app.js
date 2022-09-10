// Context
import { ProductProvider } from "../context/ProductContext"

// Styles
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  )
}

export default MyApp
