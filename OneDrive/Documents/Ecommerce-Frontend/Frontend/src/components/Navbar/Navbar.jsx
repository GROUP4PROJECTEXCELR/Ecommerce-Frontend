import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FiSearch } from 'react-icons/fi';
import Runway_Retail from '../Assets/Runway_Retail.png';
import cartIcon from '../Assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const { cartItems } = useContext(ShopContext);
  const cartCount = Object.values(cartItems).reduce((acc, count) => acc + count, 0);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = (menuName) => {
    setMenu((prevMenu) => (prevMenu === menuName ? '' : menuName));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
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
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="search product here.." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-icon">
                <FiSearch />
              </button>
            </form>
          </div>
          <div className='nav-cart'>
            <Link to='/login'><button className='nav-login'>Login</button></Link>
            <Link to='/admin'><button className='nav-admin'>Admin</button></Link>
            <Link to='/cart'>
              <div className='cart-icon-container'>
                <img src={cartIcon} alt="Cart" className='cartIcon' />
                {cartCount > 0 && <div className='nav-cart-count'>{cartCount}</div>}
              </div>
            </Link>
          </div>
        </div>
      </header>
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
