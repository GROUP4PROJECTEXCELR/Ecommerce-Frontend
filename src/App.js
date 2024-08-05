import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './webpages/Shop';
import { CategoryItem } from './webpages/CategoryItem';
import Product from './webpages/Product'; // Ensure the import statement matches the export
import Cart from './components/Cart'; // Ensure the import statement matches the export
import Checkout from './components/Checkout'; // Ensure the import statement matches the export
import { Login } from './webpages/Login';
import { Footer } from './components/Footer/Footer';
import Card from './components/order-management/Card';
import { CartProvider } from './components/context/CartContext';
import CartPage from './components/CartPage';

function App() {
  return (
    <CartProvider>

      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="mens" element={<CategoryItem category="Men" />} />
          <Route path="womens" element={<CategoryItem category="Women" />} />
          <Route path="kids" element={<CategoryItem category="Kids" />} />
          <Route path="product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cartpage" element={<CartPage />} />
          


        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;
