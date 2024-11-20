import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import { Star } from "lucide-react";
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 bg-white shadow-lg rounded-lg mt-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="animate-pulse mb-4 cursor-pointer duration-200 hover:scale-110 active:scale-95"
        title="Go Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          className="stroke-blue-400"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          />
        </svg>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Image */}
        <div>
        <img
          className="w-full cursor-pointer transition duration-300 hover:scale-105 h-auto object-cover rounded-md shadow-md"
          src={product.image}
          alt={product.name}
        />
     </div>
        {/* Product Details */}
        <div className="space-y-4 my-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-700">
            Price: ${product.price}
          </p>
          <p className="font-medium italic">More About The Product:</p>
          <p className="text-gray-600 italic">{product.description}</p>
          <p className="font-medium italic flex items-center space-x-2">
            Rating:
            {Array.from({ length: 4 }, (_, index) => (
              <Star
                key={index}
                className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6"
              />
            ))}
          </p>

          <div className='flex gap-3 '>
            <button className='bg-pink-500 hover:bg-pink-700 text-white  text-xs sm:text-sm font-medium py-2 px-4 rounded-full animate-pulse '>Buy Now</button>
            <button
          onClick={() => addToCart(product)}
          className="px-4 py-2 bg-slate-700 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-orange-500 transition-all duration-200 "
        >
          Add to Cart
        </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
