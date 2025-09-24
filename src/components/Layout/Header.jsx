import React from 'react';
import '../../styles/Layout.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>CareerConnect</h1>
            <span>Jobs & Internships</span>
          </div>
          <nav className="nav">
            <a href="#jobs" className="nav-link">Browse Jobs</a>
            <a href="#internships" className="nav-link">Internships</a>
            <a href="#employers" className="nav-link">For Employers</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;