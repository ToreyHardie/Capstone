/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import Cart from './components/cart';
import SingleProduct from './components/singleproduct';
import { Helmet } from 'react-helmet';
import Login from './components/login';

function App() {
  document.title = 'Shop2Go';
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleLogin = (token) => {
    // Perform any necessary actions after successful login, e.g., storing token in localStorage
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform any necessary actions after logout, e.g., removing token from localStorage
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Helmet>
        <link rel="icon" type="image/png" href="Capstone/src/images/shopping cart.webp" />
      </Helmet>
      <Navigation cart={cart} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/cart" element={isLoggedIn ? <Cart cart={cart} removeFromCart={removeFromCart} /> : <Navigate to="/login" />} />
        <Route path="/products/:productId" element={<SingleProduct addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;


*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import Cart from './components/cart';
import SingleProduct from './components/singleproduct';
import Login from './components/login';
import { Helmet } from 'react-helmet';

function App() {
  document.title = 'Shop2Go';
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = (token) => {
    setIsLoggedIn(true); // Set login status to true upon successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false upon logout
  };

  const addToCart = (product) => { // Define the addToCart function
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (

    <Router>
    <Helmet>
      <link rel="icon" type="image/png" href="Capstone/src/images/shopping cart.webp" />
    </Helmet>
    <Navigation cart={[]} /> {/* Pass an empty cart for now */}
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/cart" element={<Cart cart={[]} />} /> {/* Pass an empty cart for now */}
      <Route path="/products/:productId" element={<SingleProduct isLoggedIn={isLoggedIn} />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  </Router>


  );


}

export default App;