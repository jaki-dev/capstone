import logo from "../Assets/Logo.svg";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="headerNav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/Booking">Reserve table</Link>
      </nav>
    </header>
  );
};

export default Header;
