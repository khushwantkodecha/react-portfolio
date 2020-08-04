import React, { useState } from "react";
import "../css/Navbar.css";
import Hamburger from "../images/hamburger3.png";
import Cross from "../images/cross4.png";

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
        <a href="#home">
          <li onClick={() => setIsChecked(false)}>
            <a>HOME</a>
          </li>
        </a>
        <a href="#about">
          <li onClick={() => setIsChecked(false)}>
            <a>ABOUT</a>
          </li>
        </a>
        <a href="#portfolio">
          <li onClick={() => setIsChecked(false)}>
            <a>PORTFOLIO</a>
          </li>
        </a>
        <a href="#contact">
          <li onClick={() => setIsChecked(false)}>
            <a>CONTACT</a>
          </li>
        </a>
      </ul>
    </header>
  );
}

export default Navbar;
