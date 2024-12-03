
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Stylesheet_css/navbar.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logotypen (vänster) */}
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/TUC-icon.jpg" alt="TUC Home" />
          </Link>
        </div>

        {/* Textlänkar (mitten) */}
        <ul className="nav-links">
          <li><Link to="/kategorier" className="nav-text">Kategorier</Link></li>
          <li><Link to="/tuc_sidan" className="nav-text">Tuc Sida</Link></li>
          <li><Link to="/kurser" className="nav-text">Om kurserna</Link></li>
          <li><Link to="/tuc_alumni" className="nav-text">Tuc alumni</Link></li>
        </ul>

        {/* Ikoner (höger) */}
        <div className="nav-icons">
          <Link to="/serach">
            <img src="/images/Search-icon.jpg" alt="Search" className="nav-icon" />
          </Link>
          <Link to="/kundvagn">
            <img src="/images/Kundvagn_icon.jpg" alt="Cart" className="nav-icon" />
          </Link>
          <Link to="/login">
            <img src="/images/User_icon.png" alt="Login" className="nav-icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

