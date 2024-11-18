import React, { useState, useEffect, useRef } from 'react';

const CategoryFilter = ({ categories, selectedCategories, toggleCategory }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="category-filter relative mt-20 mb-5  " ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        id="dropdownToggleButton"
        onClick={toggleDropdown}
        className="text-white rounded-s-full bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        Filter by Categories
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <div
          id="dropdownToggle"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-500 dark:divide-gray-600 mt-2"
        >
          <ul className="p-1 space-y-0 text-sm text-gray-700 dark:text-gray-200">
            {categories.map((category, index) => (
              <li key={index}>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <label className="inline-flex items-center w-full cursor-pointer">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="sr-only peer"
                    />
                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {category}
                    </span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
