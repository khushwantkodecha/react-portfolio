import React, { useState } from "react";
import "../css/Navbar.css";
import Hamburger from "../images/hamburger3.png";
import Cross from "../images/cross4.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);
  return (
    <header
      className={`header ${
        isChecked ? "header-checked" : "header--not-checked"
      }`}
    >
      <div className="toggle-div">
        <div className="toggle" onClick={() => setIsChecked(!isChecked)}>
          <img src={isChecked ? Cross : Hamburger} width="35" height="30" />
        </div>
      </div>
      <ul className={`nav-links ${isChecked ? "checked" : "not-checked"}`}>
        <Link to="home" smooth={true} duration={700}>
          <li onClick={() => setIsChecked(false)}>
            <a>HOME</a>
          </li>
        </Link>
        <Link to="about" smooth={true} duration={700}>
          <li onClick={() => setIsChecked(false)}>
            <a>ABOUT</a>
          </li>
        </Link>

        <Link to="portfolio" smooth={true} duration={700}>
          <li onClick={() => setIsChecked(false)}>
            <a>PORTFOLIO</a>
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={700}>
          <li onClick={() => setIsChecked(false)}>
            <a>CONTACT</a>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Navbar;
