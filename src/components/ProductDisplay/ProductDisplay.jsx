import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull.png'

export const ProductDisplay = (props) => {
  const{product} =props;
  return (
    <div className='ProductDisplay'>

      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product thumbnail" className='product'></img>
          <img src={product.image} alt="Product thumbnail" className='product'></img>
          <img src={product.image} alt="Product thumbnail"className='product'></img>
          <img src={product.image} alt="Product thumbnail"className='product'></img>
        </div>
<div className="productdisplay-img">
  <img className='productdisplay-main-img' src={product.image }alt="Main product" ></img>
</div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt="Star icon" className='star'/>
          <img src={star_icon} alt="Star icon"className='star'/>
          <img src={star_icon} alt="Star icon"className='star'/>
          <img src={star_icon} alt="Star icon"className='star'/>
          <img src={star_dull} alt="Star dull"className='star'/>
          <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-new">
              ${product.new_price}
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Women, T-shirt, Crop-Top</p>
           
          </div>
      </div>
    </div>
  )
}
