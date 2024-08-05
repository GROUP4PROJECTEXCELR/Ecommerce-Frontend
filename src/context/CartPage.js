import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Adjusted path

const CartPage = () => {
  const { cartItems, calculateTotal } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <h2>Total: ${calculateTotal()}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
