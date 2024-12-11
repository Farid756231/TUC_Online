import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/Stylesheet_css/kundvagn.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      
        fetch('/api/cart/items')
            .then((res) => res.json())
            .then((data) => setCartItems(data));

        fetch('/api/cart/total')
            .then((res) => res.json())
            .then((total) => setTotalPrice(total));
    }, []);

    const handleRemove = (itemId) => {
        fetch(`/api/cart/remove/${itemId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setCartItems(cartItems.filter((item) => item.id !== itemId));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Kundvagn</h1>
                <h2>Du har {cartItems.length} artiklar i din kundvagn</h2>
            </div>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <p><strong>{item.name}</strong></p>
                            <p>Antal: {item.quantity}</p>
                            <p>Pris: {item.price} SEK</p>
                        </div>
                        <div className="cart-item-actions">
                            <button
                                className="remove-btn"
                                onClick={() => handleRemove(item.id)}
                            >
                                Ta bort
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                Totalt pris: {totalPrice} SEK
            </div>
            <div className="cart-buttons">
                <Link to="/checkout">
                    <button className="checkout-btn">Kassa</button>
                </Link>
                <Link to="/">
                    <button className="continue-shopping-btn">Fortsätt Handla</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
