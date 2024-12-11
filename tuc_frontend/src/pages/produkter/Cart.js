import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Programmeringskurs', price: 499 },
        // Lägg till fler produkter om det behövs
    ]);

    // Ta bort en produkt från kundvagnen
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div>
            <Navbar />
            <div className="cart-container">
                <h2>Kundvagn</h2>
                {cartItems.length === 0 ? (
                    <p>Din kundvagn är tom.</p>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <span>{item.name}</span> - <span>{item.price} SEK</span>
                                    <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-buttons">
                            <Link to="/checkout">
                                <button className="checkout-button">Till kassan</button>
                            </Link>
                            <Link to="/programmering">
                                <button className="continue-shopping-button">Fortsätt handla</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
