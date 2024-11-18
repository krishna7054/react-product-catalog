import React, { useState } from 'react';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <div className="home-page">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
