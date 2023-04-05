import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 text-accent">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-3xl">
            BookLibrary
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className=" text-lg font-medium" to="/about">
                About Us
              </Link>
            </li>
            <li tabIndex={0}>
              <Link>Parent</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
