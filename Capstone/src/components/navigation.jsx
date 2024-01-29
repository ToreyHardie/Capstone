import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../images/shopping cart.webp";

export default function Navigation({ cart }) {
  // Calculate total items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav>
        <h1>
          <img id="logo-image" src={shoppingCart} alt="Shopping Cart" />
          Shop2Go
        </h1>
        <div className="logo">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
          <Link to="/account"></Link>
        </div>
      </nav>
    </>
  );
}