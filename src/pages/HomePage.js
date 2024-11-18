import React, { useState } from 'react';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import Navbar from '../components/Navbar';
import SortFilter from '../components/SortFilter'; // Import SortFilter
import Footer from '../components/footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [cart, setCart] = useState([]); // Centralized cart state

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

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Get total item count in cart
  const getCartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartItemCount={getCartItemCount()}
      />

      <div className='flex justify-end p-2    '>

      {/* Category Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategories={selectedCategories}
        toggleCategory={toggleCategory}
      />

      {/* Sort Dropdown */}
      <SortFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      {/* Product List */}
      <ProductList products={sortedAndFilteredProducts} addToCart={addToCart} />
      <Footer/>
    </div>
  );
};

export default HomePage;
