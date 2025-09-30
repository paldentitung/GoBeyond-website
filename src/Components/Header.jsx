import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Header = ({ setMode, mode }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      className={` flex justify-around items-center p-6 flex-col md:flex-row top-0 z-50 sticky ${
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
          <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
            <Link to="/" className="block w-full h-full">
              Home
            </Link>
          </li>
          <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
            <Link to="/destinations" className="block w-full h-full">
              Destinations
            </Link>
          </li>
          <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
            <Link to="/about" className="block w-full h-full">
              About Us
            </Link>
          </li>
          <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
            <Link to="/contact" className="block w-full h-full">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <input
        type="checkbox"
        id="mode-toggle"
        checked={mode}
        onChange={() => setMode(!mode)}
        className="hidden"
      />

      <label
        htmlFor="mode-toggle"
        className="w-12 h-6 border rounded-2xl flex items-center cursor-pointer px-1"
      >
        <span
          className={`w-4 h-4 rounded-full transition-all ${
            mode ? "translate-x-6 bg-blue-600" : "translate-x-0 bg-gray-400"
          }`}
        ></span>
      </label>

      {showMenu && (
        <nav
          className={`md:hidden  min-h-screen w-3/4  fixed right-0 top-0 z-50  flex flex-col gap-5  items-center p-[5%] ${
            mode ? "bg-white " : "bg-gray-800 text-white"
          }  `}
        >
          <ul className="flex gap-3 flex-col  w-full">
            <li className="border-b block border-transparent p-2  transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
              <Link to="/" className="block">
                Home
              </Link>
            </li>
            <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
              <Link to="/destinations" className="block">
                Destinations
              </Link>
            </li>
            <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
              <Link to="/about" className="block">
                About Us
              </Link>
            </li>
            <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
              <Link to="/contact" className="block">
                Contact Us
              </Link>
            </li>
          </ul>
          <FaTimes
            className="text-[20px]  absolute top-5 right-5"
            onClick={() => setShowMenu(!showMenu)}
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
