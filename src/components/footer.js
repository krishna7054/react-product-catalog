import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400 mt-5 text-slate-800 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} KK Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
