import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

const footerColumns = [
  {
    title: "Destinations",
    links: [
      { name: "Popular Destinations", path: "/destinations" },
      { name: "Adventure Trips", path: "/destinations" },
      { name: "Beach Holidays", path: "/destinations" },
      { name: "Mountain Treks", path: "/destinations" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Contact", path: "/contact" },
      { name: "About us", path: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/faqs" },
      { name: "Booking Guide", path: "/booking-guide" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="h-auto md:h-[60vh]">
      <div className="flex flex-col md:flex-row space-y-5 w-full p-[10%] justify-between">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4 flex-col"
        >
          <Link to="/" className="flex items-center gap-1">
            <span className="bg-cyan-500 text-white p-2 rounded-[50%]">GB</span>
            <Title title="GoBeyond" />
          </Link>
          <div className="flex gap-5">
            <FaFacebook className="text-2xl hover:text-blue-600 transition-colors duration-300 hover:scale-110 hover:cursor-pointer" />
            <FaInstagram className="text-2xl hover:scale-110 hover:cursor-pointer hover:text-pink-500 transition-colors duration-300" />
            <FaLinkedin className="text-2xl hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-colors duration-300" />
            <FaXTwitter className="text-2xl hover:scale-110 hover:cursor-pointer hover:text-black dark:hover:text-black transition-colors duration-300" />
            <FaWhatsapp className="text-2xl hover:scale-110 hover:cursor-pointer hover:text-green-600 transition-colors duration-300" />
          </div>
          <div>&copy;2025 Beyond. All rights reserved</div>
        </motion.div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerColumns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-3 md:items-center"
            >
              <span className="font-semibold">{column.title}</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                {column.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500"
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
