import React from 'react';
import '../../styles/Layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CareerConnect</h3>
            <p>Connecting students with amazing opportunities since 2024.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CareerConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;