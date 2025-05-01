// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productsData } from '../utils/ProductsData';

const Header = () => {
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsProductsMenuOpen(false);
  };

  const handleProductsClick = () => {
    navigate('/products');
    setIsProductsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <span className="text-2xl font-bold text-[#1a2942]">Monibaa</span>
            <span className="text-[#ff6b2b] ml-1 text-2xl font-light">Global</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            
            <div className="relative group">
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={handleProductsClick}
                onMouseEnter={() => setIsProductsMenuOpen(true)}
              >
                Products
              </button>
              
              {isProductsMenuOpen && (
                <div
                  className="absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-xl"
                  onMouseLeave={() => setIsProductsMenuOpen(false)}
                >
                  {Object.keys(productsData).map((category) => (
                    <Link
                      key={category}
                      to={`/products/${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/why-us" className="text-gray-600 hover:text-gray-900">
              Why Us
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-16 6h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;