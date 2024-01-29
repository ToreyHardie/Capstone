import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../images/shopping cart.webp";

export default function Navigation() {
  return (
    <>
      <nav>
      <h1><img id="logo-image" src={shoppingCart} />Shop2Go</h1>
        <div className="logo">
        <Link to="/">Home</Link><br></br>
        </div>
      
        <nav>
      </nav>
        
      </nav>
    </>
  );
}