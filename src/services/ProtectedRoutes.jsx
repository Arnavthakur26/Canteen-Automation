import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const auth = localStorage.getItem("loggedIn");

const ProtectedRoutes = () => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
