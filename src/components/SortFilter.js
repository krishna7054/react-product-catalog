import React, { useState, useRef, useEffect } from 'react';

const SortFilter = ({ sortOrder, setSortOrder }) => {
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
    <div className="sort-filter relative mt-20 mb-5" ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        id="sortDropdownToggleButton"
        onClick={toggleDropdown}
        className="text-white rounded-e-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        Sort by Price
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
          id="sortDropdown"
          className="absolute  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600 mt-2"
        >
          <ul className="p-1 space-y-0 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                onClick={() => {
                  setSortOrder('asc');
                  setDropdownVisible(false);
                }}
                className={`w-full text-start px-4 py-2 rounded ${
                  sortOrder === 'asc'
                    ? 'bg-blue-100 dark:bg-blue-800 font-bold'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                Price: Low to High
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setSortOrder('desc');
                  setDropdownVisible(false);
                }}
                className={`w-full text-start px-4 py-2 rounded ${
                  sortOrder === 'desc'
                    ? 'bg-blue-100 dark:bg-blue-800 font-bold'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                Price: High to Low
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortFilter;
