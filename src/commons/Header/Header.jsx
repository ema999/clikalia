import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <Link to={"/"}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
