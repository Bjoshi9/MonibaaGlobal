// src/components/ProductGrid.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {Object.entries(products).map(([key, value]) => (
        <ProductCard
          key={key}
          title={key}
          description={value.description}
          image={value.image}
          link={`/products/${encodeURIComponent(key)}`}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductGrid;