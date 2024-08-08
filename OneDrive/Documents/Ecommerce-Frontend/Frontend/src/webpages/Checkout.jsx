import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const {  calculateTotal } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({ name: '', address: '', paymentMethod: '' });
  
  const handleOrderPlacement = () => {
    // Implement order placement logic, e.g., sending data to server
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={userInfo.address}
            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
          />
        </label>
        <label>
          Payment Method:
          <select
            value={userInfo.paymentMethod}
            onChange={(e) => setUserInfo({ ...userInfo, paymentMethod: e.target.value })}
          >
            <option value="CreditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="UPI">UPI</option>
          </select>
        </label>
      </form>
      
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={handleOrderPlacement}>Place Order</button>
    </div>
  );
};

export default Checkout;
