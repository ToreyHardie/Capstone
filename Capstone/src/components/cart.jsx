import React, { useState } from 'react';

export default function Cart({ cart, removeFromCart, clearCart }) {
  // State to track cart items and their quantities
  const [cartItems, setCartItems] = useState(cart);

  // Function to handle quantity change
  const handleQuantityChange = (index, newQuantity) => {
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
    }
  };

  // Function to calculate total price for a single item
  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  // Function to calculate total price for all items in the cart
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      const quantity = item.quantity || 1; // Initialize to 1 if quantity is undefined or falsy
      total += calculateItemTotal(item.price, quantity);
    });
    return total;
  };

  // Function to remove an item from the cart
  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    removeFromCart(index);
  };

  // Function to clear the entire cart
  const handleClearCart = () => {
    setCartItems([]);
    clearCart();
  };

  return (
    <div className="page-container">
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div>
                  <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} />
                  <span>{item.title}</span>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity || 1} // Default to 1 if item.quantity is undefined or falsy
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  min="1"
                />
              </td>
              <td>${calculateItemTotal(item.price, item.quantity || 1)}</td> {/* Calculate total with default quantity */}
              <td>
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${calculateTotal()}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}

