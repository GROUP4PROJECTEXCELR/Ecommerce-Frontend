import React from 'react';
import './BreadCrum.css';
import arrow_icon from '../Assets/Bread_arrow.png';

export const BreadCrum = ({ product }) => {
  if (!product) return null; // Handle missing product data

  return (
    <div className='BreadCrum'>
      HOME <img src={arrow_icon} alt="Arrow" className='arrow' /> SHOP <img src={arrow_icon} alt="Arrow" className='arrow' /> {product.category} <img src={arrow_icon} alt="Arrow" className='arrow'/> {product.name}
    </div>
  );
};
