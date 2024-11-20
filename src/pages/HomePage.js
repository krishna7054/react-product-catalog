import React, { useState } from 'react';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import SortFilter from '../components/SortFilter'; // Import SortFilter
import Footer from '../components/Footer';
import { useCart } from "../context/CartContext";

const HomePage = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  const categories = [...new Set(products.map((p) => p.category))];

  // Function to toggle a category's selection
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) // Deselect
        : [...prev, category] // Select
    );
  };

  // Sort function for price
  const sortProducts = (products, sortOrder) => {
    if (sortOrder === 'asc') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products; // No sorting
  };

  // Filter products based on search term and selected categories
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  // Apply sorting to filtered products
  const sortedAndFilteredProducts = sortProducts(filteredProducts, sortOrder);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col  p-4  bg-gray-100 md:flex-row md:items-center md:justify-between ">
        {/* Search Bar */}
        <div className="w-full mb-[-65px] md:w-1/2 md:mb-0.5 lg:w-1/3">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row justify-center  md:flex-row md:-mt-1">
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />

          {/* Sort Filter */}
          <SortFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>
      </div>

      {searchTerm && filteredProducts.length === 0 && (
        <div className="flex justify-center mt-6">
          <p className="text-xl font-semibold text-gray-700">Product not found :( </p>
        </div>
      )}

      {/* Product List */}
      <div className="p-4">
        <ProductList products={sortedAndFilteredProducts} addToCart={addToCart} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
