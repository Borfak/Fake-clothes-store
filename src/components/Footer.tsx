import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Fake Clothes Shop</p>
        <p>Address: 123 Fashion Street, City</p>
        <p>Contact: info@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
