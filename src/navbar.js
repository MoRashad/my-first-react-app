import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar">
      <h1>the Dojo blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New blog</Link>
      </div>
    </nav>
  );
};

export default navbar;
