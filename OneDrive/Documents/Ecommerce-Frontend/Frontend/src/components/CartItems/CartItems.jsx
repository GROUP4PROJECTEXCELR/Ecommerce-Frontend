import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/remove_icon.png'; // Updated path
import './CartItems.css';

export const CartItems = () => {
    const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    if (!all_product || !cartItems) return <p>Loading...</p>;

    const cartProducts = Object.keys(cartItems).map((productId) => {
        const product = all_product.find(p => p.id === parseInt(productId, 10));
        if (product && cartItems[productId] > 0) {
            return (
                <div key={product.id} className="cart-item">
                    <img src={product.image} alt="Product" className="cart-item-image" />
                    <div className="cart-item-info">
                        <span>{product.name}</span>
                        <span>Price: ${product.new_price}</span>
                        <span>Qty:<button onClick={() => removeFromCart(product.id)}>-</button>{cartItems[productId]}<button onClick={() => addToCart(product.id)}>+</button></span>
                        <span>Total: ${product.new_price * cartItems[productId]}</span>
                        <button onClick={() => removeFromCart(product.id)}><img src={remove_icon} alt="Remove" className='remove-icon' /></button>
                    </div>
                </div>
            );
        }
        return null;
    });

    const subTotal = Object.keys(cartItems).reduce((total, productId) => {
        const product = all_product.find(p => p.id === parseInt(productId, 10));
        return total + (product?.new_price * cartItems[productId] || 0);
    }, 0);

    return (
        <div className="cart-page">
            <div className="cart-items">
                <div className="cart-header">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total</span>
                    <span>Remove</span>
                </div>
                {cartProducts.length > 0 ? cartProducts : <p>Your cart is empty</p>}
            </div>
            <div className="cart-totals">
                <div>Cart Totals</div>
                <div>
                    <span>Subtotal</span>
                    <span>${subTotal.toFixed(2)}</span>
                </div>
                <div>
                    <span>Shipping Free</span>
                    <span>Free</span>
                </div>
                <div>
                    <span>Total</span>
                    <span>${subTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-button">PROCEED TO CHECKOUT</button>
            </div>
        </div>
    );
};
