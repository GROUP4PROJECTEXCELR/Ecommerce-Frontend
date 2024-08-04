import './App.css';
import  Navbar from './components/Navbar/Navbar';
import { Hero} from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './webpages/Shop';
import { CategoryItem } from './webpages/CategoryItem';
import { Product } from './webpages/Product';
import { Cart } from './webpages/Cart';
import { Login } from './webpages/Login';
import {Footer} from './components/Footer/Footer'
import { Register } from './webpages/Register';
import { ForgotPassword } from './webpages/ForgotPassword';
import MenDashboard from './webpages/MenDashboard';
import KidsDashboard from './webpages/KidsDashboard';
import WomenDashboard from './webpages/WomenDashboard';
import { ShopProvider } from './webpages/ShopContext';
import { CartItems } from './components/CartItems/CartItems';





function App() {
  return (
    <div>
      <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="mens" element={<CategoryItem category="Men" />} />
          <Route path="womens" element={<CategoryItem category="Women" />} />
          <Route path="kids" element={<CategoryItem category="Kids" />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mens" element={<MenDashboard />} />
        <Route path="/womens" element={<WomenDashboard />} />
        <Route path="/kids" element={<KidsDashboard />} />
        <Route path='/cartItems' element={<CartItems/>}></Route>
         
        <Route path='/ShopContext' element={<ShopProvider/>}></Route> 
       
        </Routes>
        <Footer/>
        
      </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
