// src/components/Navbar/Navbar.js
import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavItem to="/" label="Home" />
        <NavItem to="/videos" label="Videos" />
        {/* Add more NavItems for other pages */}
      </ul>
    </nav>
  );
};

export default Navbar;
