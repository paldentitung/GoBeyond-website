import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import MainButton from "./MainButton";
const Contact = ({ mode }) => {
  return (
    <>
      <div
        className={`h-auto md:h-[70vh]  flex flex-col md:flex-row px-[8%] lg:px-[10%] py-[5%]  gap-6  ${
          mode ? "bg-gray-50" : "bg-gay-800"
        }`}
      >
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="font-bold ">Have Questions? Get in Touch!</h1>
          <p className="w-full md:w-2/2">
            Whether you need travel advice or want to book your next adventure,
            we’re here to help. Fill out the form or click below to reach our
            team.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              <a className="hover:underline">info@gobeyond.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              <a className="hover:underline">+977 9878181818</a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="w-full flex-col space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullname">Fullname:</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                className=" w-full lg:w-3/4 border  border-gray-300 rounded-md outline-0 p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="lg:w-3/4 border border-gray-300 rounded-md outline-0 p-2"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="w-full lg:w-3/4 border rounded-md border-gray-300 outline-none p-2 min-h-[120px]"
                required
              ></textarea>
            </div>
            <div>
              <MainButton name="send message" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
