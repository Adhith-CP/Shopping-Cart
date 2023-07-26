import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <input type="text" placeholder="Search for products" />
      <div className="user-actions">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
