import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './webpages/Shop';
import { CategoryItem } from './webpages/CategoryItem';
import { Product } from './webpages/Product';
import  Cart  from './webpages/Cart'; // Ensure this is correctly imported
import { Login } from './webpages/Login';
import { Footer } from './components/Footer/Footer';
import { Register } from './webpages/Register';
import { ForgotPassword } from './webpages/ForgotPassword';
import MenDashboard from './webpages/MenDashboard';
import KidsDashboard from './webpages/KidsDashboard';
import WomenDashboard from './webpages/WomenDashboard';
import { ShopProvider } from './context/ShopContext'; // Ensure correct import
import  CartProvider  from './context/CartContext';
import Checkout from './webpages/Checkout'
import { CartItems } from './components/CartItems/CartItems'; // Ensure correct import
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <ShopProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Hero /><Shop /></>} />
            <Route path="/mens" element={<><Hero /><CategoryItem category="Men" /></>} />
            <Route path="/womens" element={<><Hero /><CategoryItem category="Women" /></>} />
            <Route path="/kids" element={<><Hero /><CategoryItem category="Kids" /></>} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mens-dashboard" element={<MenDashboard />} />
            <Route path="/womens-dashboard" element={<WomenDashboard />} />
            <Route path="/kids-dashboard" element={<KidsDashboard />} />
            <Route path="/cart-items" element={<CartItems />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/product-list" element={<ProductList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ShopProvider>
  );
}

export default App;