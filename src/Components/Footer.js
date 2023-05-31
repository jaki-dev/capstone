import React from "react";
import Nav from "./Nav";
import logo from "../Assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="footerItem">
        <Nav />
      </div>
      <div className="footerItem">
        <ul>
          <li>
            <a href="https://www.facebook.com">facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Contact us: info@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
