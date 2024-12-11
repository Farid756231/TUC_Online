import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/Stylesheet_css/cart.css';
import Navbar from '../navbar';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2>Din varukorg</h2>
        {cartItems.length > 0 ? (
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p className="cart-item-quantity"><strong>{item.quantity}x</strong></p>
                  <p><strong>Price: {item.price} SEK</strong></p> 
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Din varukorg är tom</p>
        )}
        
        <div className="total-price">
          <h3>Pris: {totalPrice} SEK</h3>
        </div>

        <Link to="/" className="back-home-button">Hem</Link>
        <Link to="/checkout" className="back-home-button">kassa</Link>
      </div>
    </div>
  );
};

export default Cart;