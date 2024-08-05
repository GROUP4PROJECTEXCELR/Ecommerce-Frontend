import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [all_product, setAllProduct] = useState([]);

  // Add any other state or logic for managing products here

  return (
    <ProductContext.Provider value={{ all_product, setAllProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
