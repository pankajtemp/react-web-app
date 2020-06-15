import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/">
            <p style={{ color: "#fff", margin: "5px" }}>Home</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <p style={{ color: "#fff", margin: "5px" }}>About</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
            <p style={{ color: "#fff", margin: "5px" }}>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
