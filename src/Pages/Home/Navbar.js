import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/globetech logo.png";

const Navbar = () => {
  return (
    <div class="navbar px-12 bg-[#01073a]">
      <div class="flex-1 pl-3 pt-8">
        <img src={logo} alt="" />
      </div>
      <div class="flex-none pt-8">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link
              to="/"
              className="text-[#8FE5FF] hover:text-[#D7F561] font-medium hover:font-bold text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-[#8FE5FF] hover:text-[#D7F561] hover:font-bold font-medium text-xl"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-[#8FE5FF] hover:text-[#D7F561] hover:font-bold font-medium text-xl"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
