import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="h-auto md:h-[60vh]">
      <div className="flex flex-col md:flex-row space-y-5 w-full p-[10%] justify-between">
        {/* Left Section */}
        <div className="flex gap-4 flex-col">
          <Link to="/" className="flex items-center gap-1">
            <span className="bg-cyan-500 text-white p-2 rounded-[50%]">GB</span>

            <Title title="GoBeyond" />
          </Link>
          <div className="flex gap-5">
            <FaFacebook className="text-2xl  hover:text-blue-600 transition-colors duration-300 hover:scale-110 hover:cursor-pointer" />
            <FaInstagram className="text-2xl  hover:scale-110 hover:cursor-pointer hover:text-pink-500 transition-colors duration-300" />
            <FaLinkedin className="text-2xl  hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-colors duration-300" />
            <FaXTwitter className="text-2xl  hover:scale-110 hover:cursor-pointer hover:text-black dark:hover:text-black transition-colors duration-300" />
            <FaWhatsapp className="text-2xl  hover:scale-110 hover:cursor-pointer hover:text-green-600 transition-colors duration-300" />
          </div>
          <div>&copy;2025 Beyond. All rights reserved</div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Destinations */}
          <div className="flex flex-col space-y-3 md:items-center">
            <span className="font-semibold">Destinations</span>
            <ul className="flex flex-col space-y-3 justify-center md:items-center">
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/destinations">Popular Destinations</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/destinations">Adventure Trips</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/destinations">Beach Holidays</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/destinations">Mountain Treks</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-3 md:items-center">
            <span className="font-semibold">Company</span>
            <ul className="flex flex-col space-y-3 justify-center md:items-center">
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-3 md:items-center">
            <span className="font-semibold">Support</span>
            <ul className="flex flex-col space-y-3 justify-center md:items-center">
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/faqs">FAQs</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/booking-guide">Booking Guide</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-3 md:items-center">
            <span className="font-semibold">Legal</span>
            <ul className="flex flex-col space-y-3 justify-center md:items-center">
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
