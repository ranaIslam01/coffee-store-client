import React from "react";
import logo from "../assets/images/more/logo1.png";
import navbg from "../assets/images/more/navbg.jpg";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav
      style={{ backgroundImage: `url(${navbg})` }}
      className="flex justify-between items-center px-4 sm:px-6 md:px-[5%]"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 bg-cover bg-center">
        <img className="h-10 md:h-14" src={logo} alt="Logo" />
        <h1 className="rancho my-text text-2xl md:text-3xl lg:text-[48px] text-white">
          Espresso Emporium
        </h1>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-6 text-white font-semibold rancho">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addCoffee">Add Coffee</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>

      {/* Auth Buttons UI only */}
      <div className="flex items-center gap-4">
        <Link to="/signin">
          <button className="py-2 px-4 md:py-3 md:px-10 cursor-pointer bg-white rancho my-text rounded-full">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="py-2 px-4 md:py-3 md:px-10 cursor-pointer bg-white rancho my-text rounded-full">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
