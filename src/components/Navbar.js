import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getCartItemCount } = useCart();
  return (
    <nav className="bg-white shadow mb-5 fixed w-full z-10 ">
      <div className="max-w-8xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

           {/* left Side - Logo */}
           <div className="flex items-center">
            <img className=" w-10 h-10 rounded-xl drop-shadow-2xl  " src="logo.jpg" alt="logo" />
            <span className="  font-bold text-xl p-1 font-serif   text-gray-600  ">Meraken</span>
          </div>
        
            {/* right Side - Shopping Cart Icon */}
            <div className="flex items-center ">
            <button
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Shopping cart"
            >
              <span className="ml-2 animate-pulse text-md font-medium ">{getCartItemCount()} Items</span>
              <ShoppingCart className="h-8 w-8 animate-bounce " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
