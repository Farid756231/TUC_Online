import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './assets/home.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const products = [
        { id: 1, name: 'Product 1', image: 'path/to/image1.jpg' },
        { id: 2, name: 'Product 2', image: 'path/to/image2.jpg' },
        { id: 3, name: 'Product 3', image: 'path/to/image3.jpg' },
        { id: 4, name: 'Product 4', image: 'path/to/image4.jpg' },
        { id: 5, name: 'Product 5', image: 'path/to/image5.jpg' },
        { id: 6, name: 'Product 6', image: 'path/to/image6.jpg' },
    ];

    // filtrering baserat på sökord
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <section className="picture-section">
                <h1>Välkommen till TUC Swe Online Shop</h1>
                <p>Ta nästa steg i din karriär med en utav våra kurser</p>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Sök efter Kurs..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </section>

            <section className="featured-products">
                <h2>Tillgängliga kurser</h2>
                <div className="product-container">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="product-item">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
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
