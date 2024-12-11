import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  const decodedToken = authToken ? jwtDecode(authToken) : null;

  const userRole = decodedToken?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  if (userRole !== 'Admin') {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;