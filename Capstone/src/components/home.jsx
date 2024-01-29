import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/ajax';
import { useNavigate } from 'react-router-dom';

export default function Home() { // Correct component name
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState('');
  const [storedProducts, setStoredProducts] = useState([]);
  const navigate = useNavigate();

  const filteredProducts = storedProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchProducts.toLowerCase());
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


  return (
    <>
      <div className="page-container">
        <div className="search">
          <input type="text"
            placeholder="Search"
            value={searchProducts}
            onChange={(e) => {
              setSearchProducts(e.target.value.toLowerCase());
            }}
          />
        </div>

        <div className="product-title">
        </div>
        <div className="products-container">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <p>{product.description}</p>
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
      </div>
    </>
  );
}