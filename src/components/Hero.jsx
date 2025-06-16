import React from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h4>Travel & Tours</h4>
            <p>Start your journey!</p>
            <NavLink to={"/travel"}>
              <button className="hero-btn">Search</button>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
