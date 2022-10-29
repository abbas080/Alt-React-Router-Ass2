import React from "react";
import { Link } from "react-router-dom";
// import "./index.css/components"

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="links"></div>
      <Link to="/" className="anchor">
        Home
      </Link>
      <Link to="/about" className="anchor">
        About
      </Link>
      <Link to="/user" className="anchor">
        User
      </Link>
      <Link to="/contact" className="anchor">
        Contact
      </Link>
    </div>
  );
}
