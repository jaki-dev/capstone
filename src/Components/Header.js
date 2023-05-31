import logo from "../Assets/Logo.svg";


const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="headerNav">
      <a href="/" >
              Home
            </a>
            <a href="/about" >
              About
            </a>
            <a href="/menu" >
              Menu
            </a>
            <a href="/reservations" >
              Reservations
            </a>
            <a href="/order" >
              Order Online
            </a>
            <a href="/login" >
              Login
            </a>
      </nav>
    </header>
  );
};

export default Header;
