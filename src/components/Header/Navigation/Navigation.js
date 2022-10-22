// IMPORT UTILS
import React from "react";
import { NavLink } from "react-router-dom"; // pour utiliser les NavLink

// IMPORT STYLE
import "./Navigation.css";


// IMPORT NAVIGATION
function Navigation() {
  return (
    <nav className="div-navigation">
      <li>
        <NavLink
          to="/home"
          className={(nav) => (nav.isActive ? "nav-active" : null)}
        >
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : null)}
        >
          A Propos
        </NavLink>
      </li>
    </nav>
  );
}

export default Navigation;
