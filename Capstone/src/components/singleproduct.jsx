import React, { useState, useEffect } from 'react';
import { fetchsingleProduct } from '../api/ajax';
import { useNavigate, useParams } from 'react-router-dom';

export default function SingleProduct({ isLoggedIn, addToCart }) {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      try {
        const singleProduct = await fetchsingleProduct(productId);
        setProduct(singleProduct);
      } catch (err) {
        console.error(err);
      }
    }

    getProduct();
  }, [productId]);

  return (
    <>
      <div className="page-container">
        {product ? (
          <div className="product-details">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            {isLoggedIn && (
              <button className="button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div>
        <button className="button" onClick={() => navigate('/')}>
            &larr; Back to Home
          </button>
        </div>
      </div>
    </>
  );
}
