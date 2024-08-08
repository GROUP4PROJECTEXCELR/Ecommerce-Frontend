import React, { createContext, useState } from 'react';
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {  
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
};

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            newCart[itemId] = 0;
            return newCart;
        });
    };

    const incrementItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const decrementItem = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId]--;
            }
            return newCart;
        });
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, incrementItem, decrementItem };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};
