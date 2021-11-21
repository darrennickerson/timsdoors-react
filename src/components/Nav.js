import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div class="nav-container">
      <ul className="navigation">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/work">Our Work</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
