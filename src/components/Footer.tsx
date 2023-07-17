import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Fake Clothes Shop</p>
        <p>Address: 123 Fashion Street, Paris</p>
        <p>Contact: fake@shop.com</p>
      </div>
    </footer>
  );
};

export default Footer;
