import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

export const CartItems = () => {
    const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartItems-format cartitems-format-main">
                                <img src={product.image} alt="Product" className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <div className='cartitems-quantity'>
                                    <button onClick={() => addToCart(product.id)}>+</button>
                                    {cartItems[product.id]}
                                    <button onClick={() => removeFromCart(product.id)}>-</button>
                                </div>
                                <p>${product.new_price * cartItems[product.id]}</p>
                                <img src={remove_icon} onClick={() => removeFromCart(product.id)} alt='Remove' className='remove'/>
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    
                    <div><div className="cartitems-total-item">
<p>SubTotal</p>
<p>${0}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Free</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                
            </div>
        </div>
    )
}
