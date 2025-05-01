// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(<tool_call>ImageGetter.get(search_term="modern industrial manufacturing facility with blue tint", image_save_path="/workspace/react_template/public/assets/images/hero-bg.jpg", mode="search")</tool_call>)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Connecting Indian Manufacturing Excellence with Canadian Industry
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Your trusted partner in transformer materials, engineered motors, and electrical components.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-navy-900 transition-colors duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
