import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">
          <div id="logo">
            <img
              src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
              alt=""
            />
          </div>
      </Link>
      <div id="options">
        <Link style={{textDecoration:"none", color:"white"}} to="/contact"><div id="option">Contact</div></Link>
        <Link style={{textDecoration:"none", color:"white"}} to="/form"><div id="option">Registration Form</div></Link>
      </div>
    </div>
  );
}
