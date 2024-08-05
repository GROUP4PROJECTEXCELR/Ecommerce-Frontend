import React, { useState } from 'react';

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState('');

  const handleTrackOrder = () => {
    // Add order tracking logic here
    setStatus('In Transit');
  };

  return (
    <div>
      <h2>Order Tracking</h2>
      <input 
        type="text" 
        value={trackingId} 
        onChange={(e) => setTrackingId(e.target.value)} 
        placeholder="Enter Tracking ID" 
      />
      <button onClick={handleTrackOrder}>Track Order</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderTracking;
