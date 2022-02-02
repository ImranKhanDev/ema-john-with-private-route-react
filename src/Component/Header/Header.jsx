import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
const Header = () => {
  const { user, LogOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manege Inventory</NavLink>
        {user.displayName && (
          <span style={{ color: "white" }}>Hola {user.displayName}</span>
        )}
        {user.email ? (
          <button onClick={LogOut}>LogOut</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
