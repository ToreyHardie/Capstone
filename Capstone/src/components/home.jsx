import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/ajax';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState('');
  const [storedProducts, setStoredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const filteredProducts = storedProducts.filter(product => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const searchMatch = product.title.toLowerCase().includes(searchProducts.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

  async function getProducts() {
    try {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
      setStoredProducts(allProducts);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const categories = [...new Set(products.map(product => product.category))];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <>
      <div className="page-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchProducts}
            onChange={e => setSearchProducts(e.target.value)}
          />
        </div>

        <div className="filter">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="sort">
          <label>Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Add to Cart button */}
        <div className="products-container">
          {sortedProducts.map(product => (
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <p>Price: ${product.price}</p>
              <button
                className="button"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
              <button
                className="button"
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                Details
              </button>
            </div>
          ))}
        </div>

        {/* Link to Cart page */}
        <div>
          <button onClick={() => navigate('/cart')}>Go to Cart</button>
        </div>
      </div>
    </>
  );
}
