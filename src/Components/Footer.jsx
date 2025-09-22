import React from "react";
import Title from "./Title";

import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6"; // <-- important: use fa6 for latest

export const Footer = () => {
  return (
    <>
      <div className="h-auto md:h-[60vh] ">
        <div className="flex flex-col md:flex-row space-y-5 w-full p-[10%] justify-between">
          {/* Left Section */}
          <div className="flex gap-4 flex-col">
            <Title title="GoBeyond" />
            <div className="flex gap-5">
              <FaFacebook className="text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-300 hover:scale-110 hover:cursor-pointer" />
              <FaInstagram className="text-2xl text-gray-800  hover:scale-110 hover:cursor-pointer hover:text-pink-500 transition-colors duration-300" />
              <FaLinkedin className="text-2xl text-gray-800  hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-colors duration-300" />
              <FaXTwitter
                className="text-2xl text-gray-800  hover:scale-110 hover:cursor-pointer
              hover:text-black dark:hover:text-black transition-colors duration-300"
              />
              <FaWhatsapp className="text-2xl text-gray-800  hover:scale-110 hover:cursor-pointer hover:text-green-600 transition-colors duration-300" />
            </div>
            <div>&copy;2025 Beyond. All rights reserved</div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Destinations */}
            <div className="flex flex-col space-y-3 md:items-center">
              <span className="font-semibold">Destinations</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Popular Destinations
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Adventure Trips
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Beach Holidays
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Mountain Treks
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-3 md:items-center">
              <span className="font-semibold">Company</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  About Us
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Blog / Travel Stories
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Careers
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col space-y-3 md:items-center">
              <span className="font-semibold">Support</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Contact Us
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  FAQs
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Booking Guide
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-3 md:items-center">
              <span className="font-semibold">Legal</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Terms & Conditions
                </li>
                <li className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
