import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Maritime Maintenance Management</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/records">Maintenance Records</Link>
        <Link to="/add">Add Maintenance Record</Link>
      </nav>
    </header>
  );
};

export default Header;
