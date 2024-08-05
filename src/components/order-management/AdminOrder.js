import React from 'react';

const AdminOrders = () => {
  const orders = [
    { id: 1, date: '2023-07-01', total: 200, status: 'Shipped' },
    { id: 2, date: '2023-07-15', total: 150, status: 'In Progress' }
  ];

  const handleUpdateStatus = (id, newStatus) => {
    // Add order status update logic here
    alert(`Order ID ${id} status updated to ${newStatus}`);
  };

  return (
    <div>
      <h2>Admin Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id}, Date: {order.date}, Total: ${order.total}, Status: {order.status}
            <button onClick={() => handleUpdateStatus(order.id, 'Completed')}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOrders;
