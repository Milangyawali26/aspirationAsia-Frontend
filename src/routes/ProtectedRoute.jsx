// ProtectedRoute component

import { Navigate } from "react-router-dom";

// Auth check function
const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  };

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  
  export default ProtectedRoute;
  