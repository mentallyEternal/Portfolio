import React, { useState } from "react";
import linekdin from "../linkedin.svg";

function Navbar() {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <p className="links">Odi</p>
      </a>
      <ul>
        <li className="links">
          <a
            href="#Home"
            onClick={() => handleMenuItemClick("Home")}
            className={activeMenuItem === "Home" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li className="links">
          <a
            href="#About"
            onClick={() => handleMenuItemClick("About")}
            className={activeMenuItem === "About" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li className="links">
          <a
            href="#Projects"
            onClick={() => handleMenuItemClick("Projects")}
            className={activeMenuItem === "Projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
