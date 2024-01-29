import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/ajax';
import { useNavigate } from 'react-router-dom';

export default function Home({ isLoggedIn, addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState('');
  const [storedProducts, setStoredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('price');
  const navigate = useNavigate();

  const filteredProducts = storedProducts.filter(product => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const searchMatch = product.title.toLowerCase().includes(searchProducts.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'price') {
      const priceA = a.price;
      const priceB = b.price;
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    } else {
      return 0;
    }
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

  return (
    <>
      <div className="page-container">
        <div>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            value={searchProducts}
            onChange={(e) => setSearchProducts(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="category">Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="sort">Sort by Price:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="price">Price</option>
          </select>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        
        <div className="products-container">
          {sortedProducts.map(product => (
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <p>Price: ${product.price}</p>
              {isLoggedIn && (
                <button
                  className="button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
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
        <div>
        </div>
      </div>
    </>
  );
}

