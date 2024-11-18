import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import { Star } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto  p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
      >
        Back
      </button> */}
       
<button onClick={() => navigate(-1)} className="animate-pulse cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-400">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
  </svg>
</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="w-full h-auto object-cover rounded-md shadow-md"
          src={product.image}
          alt={product.name}
        />
        <div className="space-y-4 my-auto">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700"> Price: ${product.price}</p>
          <p className='font-medium italic'>More About The Product:</p>
          <p className="text-gray-600 italic"> {product.description}</p>
          <p className='font-medium italic flex items-center space-x-1 '>Rating:  {Array.from({ length: 4 }, (_, index) => (
    <Star key={index} className="bg-yellow-500 " />
  ))}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
