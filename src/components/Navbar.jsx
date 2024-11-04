import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            Deepak Kumar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "nav-btn"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "nav-btn"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : "nav-btn"}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : "nav-btn"}>Contact</NavLink>
          </li>
          </ul>
        </div>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
      </nav>
    </>
  );
};

export default Navbar;