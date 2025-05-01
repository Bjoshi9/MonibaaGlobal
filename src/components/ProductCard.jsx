// src/components/ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, link }) => {
  return (
    <Link to={link} className="group">
      <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-[#1a2942]">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-[#1a2942] group-hover:text-[#445566] transition-colors duration-300">{title}</h3>
            <span className="text-[#1a2942] transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
          <p className="text-[#445566] flex-grow">{description}</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-[#1a2942] font-medium group-hover:text-[#445566]">Learn more</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;