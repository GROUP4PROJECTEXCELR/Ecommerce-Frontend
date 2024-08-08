import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    offerPrice: '',
    category: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('price', product.price);
    formData.append('offerPrice', product.offerPrice);
    formData.append('category', product.category);
    formData.append('image', product.image);

    try {
      const response = await fetch('https://your-api-url.com/products', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Product added successfully');
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Title:</label>
          <input type="text" name="title" value={product.title} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Offer Price:</label>
          <input type="number" name="offerPrice" value={product.offerPrice} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={product.category} onChange={handleInputChange} required>
            <option value="">Select Category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="form-group">
          <label>Upload Image:</label>
          <input type="file" onChange={handleImageChange} required />
        </div>
        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
