import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero} from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './webpages/Shop';
import { CategoryItem } from './webpages/CategoryItem';
import { Product } from './webpages/Product';
import { Cart } from './webpages/Cart';
import { Login } from './webpages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />
        <Hero/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="mens" element={<CategoryItem items="men" />} />
          <Route path="womens" element={<CategoryItem items="women" />} />
          <Route path="kids" element={<CategoryItem items="kid" />} />
          <Route path="product" element={<Product />} />
            
            <Route path=":productId" element={<Product />} />
            <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
