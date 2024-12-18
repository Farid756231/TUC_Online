import React from 'react';
import Navbar from '../../components/navbar';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Navbar />

      <div className="content">
        <h1>Admin Panel</h1>
        <h2>**Varning**</h2>
        <p>Under arbete.....</p>
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminDashboard;