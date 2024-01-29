import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../images/shopping cart.webp";

export default function Navigation({ cart, isLoggedIn, onLogout }) {
  const totalItems = cart.length;

  return (
    <div>
      <nav>
        <h1>
          <img id="logo-image" src={shoppingCart} alt="Shopping Cart" />
          Shop2Go
        </h1>
        <div className="logo">
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/cart">Cart ({totalItems})</Link>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
}
