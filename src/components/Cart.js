// Ensure this file exists
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
