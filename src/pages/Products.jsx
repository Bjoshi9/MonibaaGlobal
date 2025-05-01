// src/pages/Products.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../utils/ProductsData';

const ProductCard = ({ title, description, image, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    {image && (
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CategoryListing = () => (
  <div className="container mx-auto py-12 px-4">
    <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(productsData).map(([categoryName, categoryData]) => (
        <Link 
          key={categoryName} 
          to={`/products/${encodeURIComponent(categoryName)}`}
          className="transform hover:translate-y-[-4px] transition-transform duration-300"
        >
          <ProductCard
            title={categoryName}
            description={categoryData.description}
            image={categoryData.image}
          />
        </Link>
      ))}
    </div>
  </div>
);

const ProductDetails = ({ category, productCategory }) => (
  <>
    <div className="relative w-full mb-12 h-[70vh]">
      <div className="w-full h-full overflow-hidden">
        <img 
          src={productCategory.image} 
          alt={category}
          className="w-full h-full object-cover shadow-lg"
          style={{ maxHeight: '70vh', objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] tracking-wide">
            {category}
          </h1>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategory.subProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.name}
              description={product.description}
              image={product.image || productCategory.image}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

const Products = () => {
  const { category } = useParams();

  if (!category) {
    return <CategoryListing />;
  }

  const productCategory = productsData[category];
  if (!productCategory) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Category Not Found</h1>
        <p className="text-xl mb-8">The product category you're looking for doesn't exist.</p>
        <Link 
          to="/products" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Products
        </Link>
      </div>
    );
  }

  return <ProductDetails category={category} productCategory={productCategory} />;
};

export default Products;