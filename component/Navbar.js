import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () =>{
  return (
    <div>
      <nav className="menu_list">
        <div className="menu_icon">
          <ul className="nav_list">
            <li>
              <NavLink className="nav_icon" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_icon" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_icon" to="/service">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_icon" to="/trainer">
                Trainers
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_icon" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
