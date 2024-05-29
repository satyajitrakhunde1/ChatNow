// import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

//route to redirect to login when user is not logged in (preventing unlogged user to go home,chat)
const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) {
    return <Navigate to={redirect} />;
  }
  return children ? children :<Outlet/>;
};

export default ProtectRoute;
