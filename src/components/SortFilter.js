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
    <div  ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        id="sortDropdownToggleButton"
        onClick={toggleDropdown}
         >
        Sort by Price
        <svg
          
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
          >
          <ul >
            <li>
              <button
                onClick={() => {
                  setSortOrder('asc');
                  setDropdownVisible(false);
                }}
               
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
