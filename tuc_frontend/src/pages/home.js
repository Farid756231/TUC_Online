import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../src/assets/Stylesheet_css/home.css';
import Navbar from '../components/navbar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        const response = await fetch('http://localhost:5268/api/Products', {
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error('Något gick fel med att hämta produkterna');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>
        <section className="featured-products">
          <h2>Tillgängliga kurser</h2>
          <div className="product-container">
            {loading ? (
              <p>Laddar produkter...</p>
            ) : error ? (
              <p>{error}</p>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-item">
                  <Link to={`/${product.name}`}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>Inga produkter hittades</p>
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

