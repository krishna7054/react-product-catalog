import React from "react";
import { ShoppingCart, Search } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar({ searchTerm, setSearchTerm, cartItemCount }) {
  return (
    <nav className="bg-white shadow mb-5 fixed w-full z-10 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

           {/* left Side - Logo */}
           <div className="flex items-center">
            <img className=" w-10 h-10 rounded-xl drop-shadow-2xl" src="logo.jpg" alt="logo" />
            <span className=" font-bold text-xl p-1 font-serif  text-gray-800">Meraken</span>
          </div>
        

          {/* Center - Search Bar */}
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-center">
            <div className="max-w-lg w-full lg:max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
            </div>
          </div>

         

            {/* right Side - Shopping Cart Icon */}
            <div className="flex items-center">
            <button
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Shopping cart"
            >
              <span className="ml-2 animate-pulse text-md font-medium">{cartItemCount} Items</span>
              <ShoppingCart className="h-8 w-8 animate-bounce " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
