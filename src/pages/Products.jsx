// src/pages/Products.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../utils/ProductsData';

const ProductCard = ({ title, description, className = '', isListItem = false }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    <div className="p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#1a2942]">{title}</h3>
          {!isListItem && <p className="text-[#445566] mt-2">{description}</p>}
        </div>
        <span className="text-[#1a2942] flex-shrink-0">→</span>
      </div>
      {isListItem && <p className="text-[#445566] mt-2">{description}</p>}
    </div>
  </div>
);

const CategoryListing = () => (
  <>
    <div className=" bg-[#1a2942] pt-20">
      <div className="text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Products</h1>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {Object.entries(productsData).map(([categoryName, categoryData]) => (
          <Link
            key={categoryName}
            to={`/products/${encodeURIComponent(categoryName)}`}
            className="block transform hover:translate-y-[-4px] transition-transform duration-300"
          >
            <ProductCard
              title={categoryName}
              description={categoryData.description}
              isListItem={true}
            />
          </Link>
        ))}
      </div>
    </div>
  </>
);

const ProductDetails = ({ category, productCategory }) => (
  <>
    <div className=" bg-[#1a2942] pt-20">
      <div className="text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{category}</h1>
          {productCategory.description && (
            <p className="text-xl text-center max-w-3xl mx-auto">
                {productCategory.description}
            </p>
          )}
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
      <div className="py-20 pt-20">
        <div className="container mx-auto px-4 py-16 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Product not found</h1>
          <div className="text-center">
            <Link 
              to="/products" 
              className="inline-block border-2 px-8 py-3 rounded-md hover:bg-white hover:text-[#1a2942] transition-colors duration-300"
            >
              Return to Products List
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <ProductDetails category={category} productCategory={productCategory} />;
};

export default Products;