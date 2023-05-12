import React from 'react';
import '../styles/Header.css';
import Nav from './Navigation';

function Header() {
    return (
      <header  className="header">
        <h1>Welcome</h1>
        <Nav />
      </header>
    );
  }
  
export default Header;
  