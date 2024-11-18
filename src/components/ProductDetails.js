import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';

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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
      >
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="w-full h-auto object-cover rounded-md shadow-md"
          src={product.image}
          alt={product.name}
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
