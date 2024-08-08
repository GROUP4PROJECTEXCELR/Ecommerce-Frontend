import React, { createContext, useState, useContext } from 'react';
import { ShopContext } from './ShopContext';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const { all_product } = useContext(ShopContext); // Assuming you have a ShopContext that provides products

  const calculateTotal = () => {
    return Object.keys(cartItems).reduce((total, productId) => {
      const product = all_product.find(p => p.id === parseInt(productId, 10));
      if (product) {
        return total + (product.new_price * cartItems[productId]);
      }
      return total;
    }, 0);
  };

  // Other context methods like addToCart, removeFromCart, etc.

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
