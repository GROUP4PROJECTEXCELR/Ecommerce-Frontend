import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FiSearch } from 'react-icons/fi';
import Runway_Retail from '../Assets/Runway_Retail.png';
import cartIcon from '../Assets/cart_icon.png';
import { ShopContext } from '../../webpages/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, products = [] } = useContext(ShopContext); // Default products to an empty array
  const cartCount = Object.values(cart).reduce((acc, count) => acc + count, 0);

  const toggleMenu = (menuName) => {
    setMenu((prevMenu) => (prevMenu === menuName ? '' : menuName));
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const getCartItems = () => {
    return Object.keys(cart).map(productId => {
      const product = products.find(p => p.id === productId);
      if (product) {
        return (
          <div key={productId} className="cart-item">
            <img src={product.image} alt={product.name} className="cart-item-image" />
            <div className="cart-item-info">
              <span>{product.name}</span>
              <span>Qty: {cart[productId]}</span>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <>
      <header>
        <div className='header'>
          <div className='icon'>
            <img src={Runway_Retail} alt="Runway Retail" className='icon-logo' />
            <p>Runway Retail</p>
          </div>

          <div className='search-bar'>
            <input type="text" placeholder="search product here.." className="search-input" />
            <FiSearch className="search-icon" />
          </div>

          <div className='nav-cart'>
            <Link to='/login'><button className='nav-login'>Login</button></Link>
            <div onClick={handleCartClick}>
              <img src={cartIcon} alt="Cart" className='cartIcon' />
              <div className='nav-cart-count'>{cartCount}</div>
            </div>
          </div>
        </div>
      </header>
      {isCartOpen && (
        <div className="cart-dropdown">
          {cartCount === 0 ? <p>Your cart is empty</p> :  getCartItems()}
        </div>
      )}
      <main>
        <div>
          <ul className='nav-menu'>
            <li onClick={() => toggleMenu('categories')}>
              <span style={{ textDecoration: 'none' }}>Categories</span>
              {menu === 'categories' && <hr />}
            </li>
          </ul>
          {menu === 'categories' && (
            <div className="categories-sections">
              <div className="categories-container">
                <div className="category-section">
                  <Link to="/mens">Men</Link>
                </div>
                <div className="category-section">
                  <Link to="/womens">Women</Link>
                </div>
                <div className="category-section">
                  <Link to="/kids">Kids</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Navbar;
