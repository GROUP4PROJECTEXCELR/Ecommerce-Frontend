// src/components/ProductList/ProductList.jsx
import React, { useEffect, useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://your-api-url.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            {product.offerPrice && <p>Offer Price: ${product.offerPrice}</p>}
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
