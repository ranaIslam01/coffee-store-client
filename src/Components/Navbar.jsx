import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/more/logo1.png";
import navbg from "../assets/images/more/navbg.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be signed out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sign Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then((result) => {
          console.log(result);
          Swal.fire({
            title: "Sign Out",
            text: "You have been signed out.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          setUser(null);
        });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addCoffee">Add Coffee</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </>
  );
  const mobileLinks = (
    <>
      <li>
        <NavLink onClick={() => setMenuOpen(false)} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => setMenuOpen(false)} to="/addCoffee">
          Add Coffee
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => setMenuOpen(false)} to="/users">
          Users
        </NavLink>
      </li>
    </>
  );
  return (
    <nav
      style={{ backgroundImage: `url(${navbg})` }}
      className="relative flex justify-between items-center px-[5%]"
    >
      <Link to="/" className="flex items-center  gap-2 bg-cover bg-center">
        <img className="h-14" src={logo} alt="Not Found" />
        <h1 className="rancho my-text text-3xl  md:text-[48px] text-white">
          Espresso Emporium
        </h1>
      </Link>
      <div className="hidden md:block">
        <ul className="flex items-center gap-6 text-white font-semibold rancho">
          {links}
        </ul>
      </div>

      {/* mobile hamburger button */}
      <button
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((s) => !s)}
      >
        {!menuOpen ? (
          <FaBars className="h-6 w-6" />
        ) : (
          <FaTimes className="h-6 w-6" />
        )}
      </button>

      {/* mobile dropdown menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden absolute right-5 top-full mt-2 w-56 bg-black/60 backdrop-blur-sm rounded-lg p-4`}
      >
        <ul className="flex flex-col gap-4 text-white font-semibold rancho">
          {mobileLinks}
        </ul>
        <div className="mt-3">
          {user ? (
            <button
              onClick={() => {
                setMenuOpen(false);
                handleSignOut();
              }}
              className="w-full py-2 bg-white text-black rounded-full rancho"
            >
              Log Out
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link onClick={() => setMenuOpen(false)} to="/signin">
                <button className="w-full py-2 bg-white text-black rounded-full rancho">
                  Sign In
                </button>
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/signup">
                <button className="w-full py-2 bg-white text-black rounded-full rancho">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {user ? (
        <div className="flex items-center gap-3">
          {/* optional: show user photo if available */}
          {/* <img className='bg-white h-10 w-10 object-cover rounded-full' src={user?.photoURL} alt="User" /> */}
          <button
            onClick={handleSignOut}
            className="md:py-3 py-1 px-4  md:px-10 cursor-pointer bg-white rancho my-text rounded-xl md:rounded-full"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="md:block hidden">
          <div className="flex items-center gap-4">
            <Link to="/signin">
              <button className="py-3 px-10 cursor-pointer bg-white rancho my-text rounded-full">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="py-3 px-10 cursor-pointer bg-white rancho my-text rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
