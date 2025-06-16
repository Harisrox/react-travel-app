import React from "react";
import logo from "../images/home.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <img src={logo} alt="home-logo" className="logo" />
      </NavLink>
      <div>
        <ul className="nav-items">
          <NavLink to={"/travel"} style={{ textDecoration: "none" }}>
            <li className="nav-item">Travel</li>
          </NavLink>
          <NavLink to={"/billing"} style={{ textDecoration: "none" }}>
            <li className="nav-item">Pricing</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
