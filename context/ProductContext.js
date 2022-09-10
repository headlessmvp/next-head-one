import { createContext, useEffect, useState } from "react"

// Commerce Layer
import { getSalesChannelToken } from "@commercelayer/js-auth"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [allData, setAllData] = useState([])
  const [cart, setCart] = useState([])
  const [token, setToken] = useState("")
  const [auth, setAuth] = useState(null)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (id) => {
    const filtered = cart.filter((product) => product.reference !== id)
    setCart(filtered)
  }

  const getToken = async () => {
    const authResp = await getSalesChannelToken({
      clientId: process.env.NEXT_PUBLIC_CL_SALES_CHANNEL_CLIENT_ID,
      endpoint: process.env.NEXT_PUBLIC_CL_BASE_ENDPOINT,
      scope: process.env.NEXT_PUBLIC_CL_MARKET_SCOPE,
    })
    setAuth(authResp)

    if (authResp?.accessToken) {
      // console.log(
      //   "Access token got: ",
      //   authResp?.accessToken,
      //   "expired ? : ",
      //   authResp?.expired()
      // )
      setToken(authResp?.accessToken)
      // TODO : Add to Localstorage for session
      localStorage.setItem("token", JSON.stringify(authResp?.accessToken))
    }
  }

  useEffect(() => {
    // console.log("Use effect context !")

    if (auth === null) {
      getToken()
    } else if (auth?.expired()) {
      getToken()
    } else if (localStorage.getItem("token")) {
      // console.log("Token exists: ", localStorage.getItem("token"))
      setToken(JSON.parse(localStorage.getItem("token")))
    } else {
      console.log("Token not in localstorage, nor expired, nor present")
    }
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        allData,
        setAllData,
        token
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
