import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "./Dropdown";

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          style={{
            lineStyle: "none",
            textDecoration: "none",
          }}
        >
          <img src="images/logo.png" alt="" className="header-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <li className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a
              href="https://forms.gle/DBaKhzTS3NPXPyrH7"
              target="_blank"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Book Now
            </a>
          </li>
          <Button className="butt" />
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/abouttedx"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/teams" className="nav-links" onClick={closeMobileMenu}>
              Team
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/speakers"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Speakers
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/sponsers"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sponsors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
              Faq's
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </li>
      </nav>
    </>
  );
}

export default Header;
