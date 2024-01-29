import React from 'react';

export default function Cart({ cart, removeFromCart, clearCart }) {
  const handleRemoveFromCart = (index) => {
    removeFromCart(index); // Call the removeFromCart function passed from the parent component
  };

  const handleClearCart = () => {
    clearCart(); // Call the clearCart function passed from the parent component
  };

  return (
    <div className="page-container">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}
