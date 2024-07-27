import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero} from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './webpages/Shop';
import { CategoryItem } from './webpages/CategoryItem';
import { Product } from './webpages/Product';
import { Cart } from './webpages/Cart';
import { Login } from './webpages/Login';
import {Footer} from './components/Footer/Footer'
<<<<<<< HEAD

=======
//shdfosfoisdjfooo
>>>>>>> 72af270e7e7491f6b368eab073373b4bf4ffc4e9
function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />
        <Hero/>
        <Routes>
          <Route path="/" element={<Shop />} />
<<<<<<< HEAD
          <Route path="mens" element={<CategoryItem category="Men" />} />
          <Route path="womens" element={<CategoryItem category="Women" />} />
          <Route path="kids" element={<CategoryItem category="Kids" />} />
=======
          <Route path="mens" element={<CategoryItem items="men" />} />
          <Route path="womens" element={<CategoryItem items="women" />} />
          <Route path="kids" element={<CategoryItem items="kid" />} />
>>>>>>> 72af270e7e7491f6b368eab073373b4bf4ffc4e9
          <Route path="product" element={<Product />} />
            
            <Route path=":productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
         
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
