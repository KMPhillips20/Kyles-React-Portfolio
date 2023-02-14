import { useState } from 'react'
import NavTabs from './components/Nav/NavTabs'
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Home from './components/Home';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => { 
  if (currentPage === 'Home') {
    return <Home />;
  }
  if (currentPage === 'Resume') {
    return <Resume />;
  }  
  if (currentPage === 'Projects') {
    return <Projects />;
  }
  if (currentPage === 'Contact') {
    return <Contact />;
  }
};

const handlePageChange = (page) => setCurrentPage(page);

return (
  <div>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
  </div>
);
}