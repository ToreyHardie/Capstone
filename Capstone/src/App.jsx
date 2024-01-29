/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import Cart from './components/cart';
import SingleProduct from './components/singleproduct';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navigation cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
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
import { Helmet } from 'react-helmet';
import Login from './components/login';

function App() {
  document.title = 'Shop2Go';
  const [cart, setCart] = useState([]);

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
      <Navigation cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/products/:productId" element={<SingleProduct addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
