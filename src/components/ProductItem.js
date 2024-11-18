import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProductItem;
