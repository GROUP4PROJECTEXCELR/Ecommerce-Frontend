// src/components/AdminDashboard/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-links">
        <Link to="/admin/add-product">Add Product</Link>
        <Link to="/admin/product-list">Product List</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
