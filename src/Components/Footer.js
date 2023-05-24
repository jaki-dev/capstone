import React from "react";
import Nav from "./Nav";
import logo from "../Assets/Logo.svg";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div style={logoStyle}>
          <img src={logo} alt="Logo" />
        </div>
        <Nav />

        <div style={contactStyle}>
          <p>Contact us: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div style={socialMediaStyle}>
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
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  background: "#EDEFEE",

  padding: "20px",
  marginTop: "auto",
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoStyle = {
  marginRight: "20px",
};

const navigationStyle = {
  marginRight: "20px",
};

const contactStyle = {
  marginRight: "20px",
};

const socialMediaStyle = {
  display: "flex",
  alignItems: "center",
};

export default Footer;
