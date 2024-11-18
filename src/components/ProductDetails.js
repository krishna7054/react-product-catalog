import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div >
      {/* Product Image */}
      <div >
      <img
        alt={product.name}
        src={product.image}
        
      />
      </div>

      <div >
        {/* Product Name */}
        <h3 >{product.name}</h3>

        {/* Product Price */}
        <p  >${product.price}</p>

        {/* Action Buttons */}
        <div  >
          {/* View Details Button */}
          <Link to={`/product/${product.id}`} >
            View Details
          </Link>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
             
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
