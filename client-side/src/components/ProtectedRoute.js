import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? <Component /> : <Navigate to="/restricted" />;
}

export default ProtectedRoute;
