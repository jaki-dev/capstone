import logo from "../Assets/Logo.svg";

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="logo" style={logoStyle}>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="/about" style={linkStyle}>
              About
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="/menu" style={linkStyle}>
              Menu
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="/reservations" style={linkStyle}>
              Reservations
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="/order" style={linkStyle}>
              Order Online
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="/login" style={linkStyle}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "#f2f2f2",
};

const logoStyle = {
  marginRight: "20px",
};

const navStyle = {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
};

const navItemStyle = {
  textTransform: "uppercase",
  padding: "20px",
  fontWeight: "bold",
};
const linkStyle = {
  color: "black",
  fontFamily: "Marakazi Text",
  textDecoration: "none",
};
