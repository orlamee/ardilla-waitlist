import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";


function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg py-4 navbar-light px-1 navhome">
      <div className="container header">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt=""
            className="img-fluid"
            style={{ marginTop: "-8px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white me-3" href="/#features">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
  
}

export default Header;