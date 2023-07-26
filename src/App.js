import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import ProductCard from "./components/ProductCard";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import productData from "./components/productData"; // Import the product list

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main">
          <div className="product-grid">
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </main>
        <CartSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
