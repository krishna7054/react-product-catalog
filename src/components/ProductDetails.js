import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
