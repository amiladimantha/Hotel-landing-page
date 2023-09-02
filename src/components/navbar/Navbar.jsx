import React from "react";
import logo from "../../static/logo.jpg";
import "./navbar.css";
import { HiUser, HiGlobe } from "react-icons/hi";
import { MdSmartphone } from "react-icons/md";

const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="links">
          <span className="text-link">
            <HiUser /> Sign In
          </span>
          <span>|</span>
          <span className="text-link">Join Now</span>
          <span>|</span>
          <span className="text-link">Find Reservations</span>
          <span>|</span>
          <span className="text-link">
            <HiGlobe /> English
          </span>
          <span>|</span>
          <span className="text-link">SGD</span>
          <span>
            <MdSmartphone />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
