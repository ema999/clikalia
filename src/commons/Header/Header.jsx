import logo from "assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}

export default Header;
