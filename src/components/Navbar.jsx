import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.webp"

const NAV_DATA = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(isSticky);
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`px-4 lg:px-14 py-4 ${
          isSticky
            ? "sticky top-0 right-0 left-0 borde-b bg-white trasnform-duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
            <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-16 " />
            <Link to="/" >

            <h1 className="text-lg font-normal uppercase">
                MEF Aurangabad
            </h1>
            </Link>
            </div>
       
          <ul className="md:flex items-center hidden space-x-12">
            {NAV_DATA.map(({ name, path, id }) => (
              <NavLink
              to={path}
                className="block  text-gray-900 text-xl font-medium hover:text-brandPrimary cursor-pointer font-thin"
              >
                {name}
              </NavLink>
            ))}
            <Link
              className="block  text-white rounded hover:opacity-90 text-lg  font-thin px-4 py-2 bg-brandPrimary cursor-pointer"
              to="/"
            >
            Check Result
            </Link>
          </ul>
          <div className="md:hidden text-neutralDGray focus:outline-none focus:text-gray-500">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-24 py-7 bg-brandPrimary  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
         {NAV_DATA.map(({ name, path, id }) => (
              <NavLink
              to={path}
                className="block  text-white text-xl font-medium cursor-pointer font-thin"
              >
                {name}
              </NavLink>
            ))}
          <Link
                className="block  text-white text-xl font-medium cursor-pointer font-thin"
                to="/"
          >
            Check Result
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;