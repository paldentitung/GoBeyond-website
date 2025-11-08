import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = ({ setMode, mode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const headerLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 flex justify-between items-center p-6 flex-col md:flex-row md:justify-around ${
        mode ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex gap-8 items-center">
        <Link to="/" className="flex gap-1 items-center">
          <span className="bg-cyan-500 text-white p-2 rounded-[50%]">GB</span>
          <Title title="GoBeyond" />
        </Link>
        <div className="block md:hidden">
          <FaBars
            className="text-[20px]"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {headerLinks.map((link, index) => (
            <li className="border-b border-transparent p-2 transition-all duration-200 hover:text-cyan-500">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block w-full h-full ${
                    isActive ? "text-cyan-500 border-b-2 border-b-cyan-500" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/destinations">
          <FaSearch className="text-[18px]" />
        </Link>
        <input
          type="checkbox"
          id="mode-toggle"
          checked={mode}
          onChange={() => setMode(!mode)}
          className="hidden"
        />

        <label
          htmlFor="mode-toggle"
          className="w-14 h-7 border rounded-2xl flex items-center cursor-pointer p-1"
        >
          <span
            className={`w-5 h-5 rounded-full transition-all bg-gray-400 ${
              mode ? "translate-x-0 " : "translate-x-6"
            }`}
          ></span>
        </label>
      </div>
      {showMenu && (
        <nav
          className={`md:hidden min-h-screen w-3/4 fixed right-0 top-0 z-50 flex flex-col gap-5 items-center p-[5%] ${
            mode ? "bg-white " : "bg-gray-800 text-white"
          }`}
        >
          <ul className="flex gap-3 flex-col w-full">
            {headerLinks.map((link, index) => (
              <li className="border-b border-transparent p-2 transition-all duration-200 hover:text-cyan-500">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block w-full h-full ${
                      isActive
                        ? "text-cyan-500 border-b-2 border-b-cyan-500"
                        : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Toggle inside mobile menu */}
          <div className="mt-6 flex items-center gap-4">
            <Link to="/destinations">
              <FaSearch className="text-[18px]" />
            </Link>
            <input
              type="checkbox"
              id="mode-toggle-mobile"
              checked={mode}
              onChange={() => {
                setMode(!mode);
                setShowMenu(false);
              }}
              className="hidden"
            />
            <label
              htmlFor="mode-toggle-mobile"
              className="w-12 h-6 border rounded-2xl flex items-center cursor-pointer px-1"
            >
              <span
                className={`w-4 h-4 rounded-full transition-all ${
                  mode
                    ? "translate-x-6 bg-blue-600"
                    : "translate-x-0 bg-gray-400"
                }`}
              ></span>
            </label>
          </div>

          {/* Close button */}
          <FaTimes
            className="text-[20px] absolute top-5 right-5"
            onClick={() => setShowMenu(!showMenu)}
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
