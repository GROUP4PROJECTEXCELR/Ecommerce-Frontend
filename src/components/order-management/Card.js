// src/components/order-management/Card.js
import React, { useState } from 'react';

const Card = () => {
  const [cartItems, setCartItems] = useState([{ id: 1, name: 'Item 1', price: 100 }]);
  
  const handleCheckout = () => {
    // Add order placement logic here
    alert('Order placed!');
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Card;
