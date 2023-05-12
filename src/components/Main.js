
import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from "./Header";

export default function Main() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <Contact />;
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

