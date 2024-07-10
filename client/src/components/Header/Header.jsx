import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/bank-logo.png";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Bank Logo" />
          </Link>
        </div>
        <div className="header__title">
          <p>Client Relationship Management Dashboard</p>
        </div>

        <div className="header__links">
          <NavLink to="/" className="header__links--link">
            Clients
          </NavLink>

          <NavLink to="/portfolios" className="header__links--link">
            Portfolios
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
