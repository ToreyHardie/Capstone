/*
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchsingleProduct, fetchProducts } from "../api/ajax";

export default function SingleProduct({ token, userFetch }) {
  const [product, setProduct] = useState([]);
  const param = useParams();
  const navigate = useNavigate();

  async function fetchProduct() {
    try {
      const SingleProduct = await fetchsingleProduct(param.productId);
      setProduct(SingleProduct);
      console.log(SingleProduct);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div id="singleproduct">
        <div className="cards">
         
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

          <button className="button" onClick={() => {navigate("/");}}>Go Back</button>
        </div>
      </div>
    </>
  );
} */

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchsingleProduct } from '../api/ajax';

export default function SingleProduct({ addToCart }) {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  async function fetchProduct() {
    try {
      const singleProduct = await fetchsingleProduct(productId);
      setProduct(singleProduct);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <div className="page-container">
      <div id="singleproduct" className="product-card">
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>{product.category}</p>
        <p>Price: ${product.price}</p>
        <button
          className="button"
          onClick={() => {
            addToCart(product);
            navigate('/');
          }}
        >
          Add to Cart
        </button>
        <button className="button" onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>
    </div>
  );
}