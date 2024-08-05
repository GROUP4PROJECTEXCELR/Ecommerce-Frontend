import React from 'react';

const OrderHistory = () => {
  const orders = [
    { id: 1, date: '2023-07-01', total: 200 },
    { id: 2, date: '2023-07-15', total: 150 }
  ];

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>Order ID: {order.id}, Date: {order.date}, Total: ${order.total}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
