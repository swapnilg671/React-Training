import React from "react";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">RoboApp</Link>
        </li>
        <li>
          <Link to="/programmerJokes">userForm</Link>
        </li>
        <li>
          <Link to="/userComment">userComment</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
