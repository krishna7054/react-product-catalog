import React, { useState } from 'react';
import products from '../data/products.json';
import ProductList from '../components/ProductList';

const HomePage = () => {


  return (
    <div className="home-page">
     

      
      {/* Product List */}
      <ProductList  />
    </div>
  );
};

export default HomePage;
