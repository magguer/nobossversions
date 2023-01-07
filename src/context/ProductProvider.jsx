import { createContext, useState } from "react";
import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { getProduct, product, products } = useProducts();
  const [idProduct, setIdProduct] = useState("");

  if (idProduct === "") {
    return (
      <ProductContext.Provider value={{ setIdProduct }}>
        {children}
      </ProductContext.Provider>
    );
  }

  return (
    <ProductContext.Provider
      value={{ products, product, setIdProduct, idProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
