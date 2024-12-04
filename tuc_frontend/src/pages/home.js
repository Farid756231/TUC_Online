import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/assets/Stylesheet_css/home.css';
import Navbar from '../components/navbar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const products = [
    { id: 1, name: 'programmering', image: '/images/Programmering.png' },
    { id: 2, name: 'barnomsorg', image: '/images/Barnomsorg.jpg' },
    { id: 3, name: 'elkonstruktör', image: '/images/Elkonstruktör.jpg' },
    { id: 4, name: 'pedagogik', image: '/images/Pedagogik.jpg' },
    { id: 5, name: 'cad-Konstruktion', image: '/images/CAD-konstruktion.jpg' },
    { id: 6, name: 'sjukvård', image: '/images/sjukvård.png' },
  ];

  // filtrering baserat på sökord
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div>
      <Navbar />
      <div>
        <section className="picture-section">
          <img src="/images/tucbildhome.jpeg" alt="tucbildhome" className="tuc-bild" />
          <div className="overlay-content">
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


    </div>

  );
};

export default Home;