import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            updatedCart[productId] = (updatedCart[productId] || 0) + 1;
            return updatedCart;
        });
    };

    return (
        <ShopContext.Provider value={{ cart, addToCart }}>
            {children}
        </ShopContext.Provider>
    );
};
