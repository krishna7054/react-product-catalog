import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover:scale-105">
      {/* Product Image */}
      <div className='flex justify-center'>
      <img
        alt={product.name}
        src={product.image}
        className=" w-[300px] h-[330px] object-cover group-hover:opacity-100 transition-all duration-300 "
      />
      </div>

      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>

        {/* Product Price */}
        <p className="mt-2 text-xl font-medium text-gray-800">${product.price}</p>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between items-center">
          {/* View Details Button */}
          <Link to={`/product/${product.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium ">
            View Details
          </Link>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
