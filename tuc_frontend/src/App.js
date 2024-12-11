import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Programmering from "./pages/produkter/programmering";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Barnomsorg from "./pages/produkter/barnomsorg";
import AdminDashboard from "./pages/admin/adminDashboard";
import Unauthorized from "./pages/admin/unauthorized";
import ProtectedRoute from "./components/protectedRoute";
import Cart from "./components/Product/cart";
import Checkout from "./pages/checkout";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/programmering" element={<Programmering />} />
        <Route path="/barnomsorg" element={<Barnomsorg />} />
        <Route path="/kundvagn" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
