import React from 'react';

const Home = () => {
    return (
        <div>
            <header className="hero-section">
                <h1>Welcome to TUC Online Shopping</h1>
                 <p>Your one-stop shop for all your needs</p>
             </header>
             <section className="featured-products">
                 <h2>Featured Products</h2>
                 {/* Add featured products here */}
             </section>
             <section className="about-us">
                 <h2>About Us</h2>
                 <p>Learn more about our mission and values</p>
             </section>
            <p>&copy; 2024 TUC Online Shopping. All rights reserved.</p>
        </div>
        
    );
};



export default Home;