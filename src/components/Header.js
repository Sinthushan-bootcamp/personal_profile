import React from 'react';
import '../styles/Header.css';
import Nav from './Navigation';

function Header({currentPage, handlePageChange}) {
    return (
      <header  className="header">
        <h1>Sinthushan's Portfolio</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
    );
  }
  
export default Header;
  