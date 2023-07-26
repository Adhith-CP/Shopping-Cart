// components/ProductList.js
import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const products = [
    {
        id: 1,
        title: 'Product 1',
        image: 'path/to/image1.jpg',
        price: 20
      },
      {
        id: 2,
        title: 'Product 2',
        image: 'path/to/image2.jpg',
        price: 30
      },
      {
        id: 3,
        title: 'Product 3',
        image: 'path/to/image3.jpg',
        price: 25
      },
      // Add more products here...
      {
        id: 18,
        title: 'Product 18',
        image: 'path/to/image18.jpg',
        price: 40
      },
      {
        id: 19,
        title: 'Product 19',
        image: 'path/to/image19.jpg',
        price: 25
      },
      {
        id: 20,
        title: 'Product 20',
        image: 'path/to/image20.jpg',
        price: 40
      }
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
