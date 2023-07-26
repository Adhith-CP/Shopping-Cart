import React from 'react';
import './Home.css';

const products = [
  {
    id: 1,
    title: 'Product 1',
    price: '$10',
    imageUrl: 'product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: '$15',
    imageUrl: 'product2.jpg',
  },
  {
    id: 3,
    title: 'Product 2',
    price: '$15',
    imageUrl: 'product2.jpg',
  },
  
  {
    id: 4,
    title: 'Product 2',
    price: '$15',
    imageUrl: 'product2.jpg',
  },
  {
    id: 5,
    title: 'Product 2',
    price: '$15',
    imageUrl: 'product2.jpg',
  },

  // Add more products as needed
];

const Home = () => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
