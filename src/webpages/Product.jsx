import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ id, name, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
