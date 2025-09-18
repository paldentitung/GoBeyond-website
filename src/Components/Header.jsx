import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className=" flex justify-around items-center p-6 flex-col md:flex-row top-0 z-50 sticky bg-white">
      <div className="flex gap-8 items-center">
        <Link to="/">
          {" "}
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
            <Link to="/">Home</Link>
          </li>
          <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
            <Link to="/destinations">Destinations</Link>
          </li>
          <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="border-b border-transparent p-2 transition-all duration-200 hover:border-b-blue-400 hover:text-blue-600">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {showMenu && (
        <nav className=" md:hidden  min-h-screen w-3/4  fixed right-0 top-0 z-50 bg-white  flex flex-col gap-5  items-center p-[5%]  ">
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
            className="text-[20px]  text-black absolute top-5 right-5"
            onClick={() => setShowMenu(!showMenu)}
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
