import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/ajax';
import { useNavigate } from 'react-router-dom';

export default function Home({ isLoggedIn }) {
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

  return (
    <>
      <div className="page-container">
        {/* Other filtering and sorting UI */}
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
                  onClick={() => {
                    addToCart(product);
                  }}
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
        {/* Link to Cart page */}
        <div>
          <button onClick={() => navigate('/cart')}>Go to Cart</button>
        </div>
      </div>
    </>
  );
}

