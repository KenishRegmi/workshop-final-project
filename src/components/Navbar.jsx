import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="navbar">
        <h2 className="nav-logo">Learn With Fun</h2>
        <ul className="nav-items">
          <li>
            <Link to={"./"}> Home</Link>
          </li>
          <li>
            <Link to={"/games"}> Games</Link>
          </li>
          <li>
            <Link to={"/quizes"}> Quizes</Link>
          </li>
          <li>
            <Link to={"/aboutus"}> About us</Link>
          </li>
          <li>
            <Link to={"/contact"}> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
