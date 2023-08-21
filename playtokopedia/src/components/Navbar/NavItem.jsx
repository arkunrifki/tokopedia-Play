// src/components/Navbar/NavItem.js
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavItem;
