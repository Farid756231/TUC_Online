import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Stylesheet_css/navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5268/api/Auth/Logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
      });
  
      if (response.ok) {
        localStorage.removeItem('authToken');
        window.location.href = "/";
      } else {
        console.error('Logout failed');
      }
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };
  

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/BagShop.png" alt="TUC Home" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/kategorier" className="nav-text">Kategorier</Link></li>
          <li><Link to="/tuc_sidan" className="nav-text">Tuc Sida</Link></li>
          <li><Link to="/kurser" className="nav-text">Om kurserna</Link></li>
          <li><Link to="/tuc_alumni" className="nav-text">Tuc alumni</Link></li>
        </ul>

        <div className="nav-icons">
          <Link to="/kundvagn">
            <img src="/images/Kundvagn_icon.jpg" alt="Cart" className="nav-icon" />
          </Link>
          {isLoggedIn ? (

            <img src="/images/Logout.png" alt="Logout" className="nav-icon" onClick={handleLogout} />
          ) : (

            <Link to="/login">
              <img src="/images/User_icon.png" alt="Login" className="nav-icon" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;