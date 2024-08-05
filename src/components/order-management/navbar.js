import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/order-history">Order History</Link></li>
      <li><Link to="/order-tracking">Order Tracking</Link></li>
      <li><Link to="/admin-orders">Admin Orders</Link></li>
    </ul>
  </nav>
);

export default Navbar;
