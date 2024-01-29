import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import './App.css';
import Navigation from './components/navigation';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   
    <Router>
    <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      


      </Routes>

      </Router>
    </>
  );
}

export default App;
