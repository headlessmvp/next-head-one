import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [allData, setAllData] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (id) => {
    const filtered = cart.filter((product) => product.id !== id)
    setCart(filtered)
  }

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
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
