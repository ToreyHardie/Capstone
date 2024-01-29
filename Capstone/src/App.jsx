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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (product) => {
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
      <Navigation cart={cart} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
        />
        <Route
          path="/products/:productId"
          element={<SingleProduct isLoggedIn={isLoggedIn} addToCart={addToCart} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
