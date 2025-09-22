import React from "react";
import Title from "./Title";
import { FaGlobe, FaPlane, FaHeadset } from "react-icons/fa";
const AboutUs = () => {
  const highlights = [
    {
      icon: <FaGlobe size={30} className="text-blue-500" />,
      title: "Global Destinations",
      text: "Discover the best spots worldwide.",
    },
    {
      icon: <FaPlane size={30} className="text-green-500" />,
      title: "Easy Planning",
      text: "Simple, stress-free booking experience.",
    },
    {
      icon: <FaHeadset size={30} className="text-purple-500" />,
      title: "Trusted Support",
      text: "We’re here whenever you need us.",
    },
  ];
  return (
    <>
      <div className="flex  w-full   h-auto md:h-[80vh] flex-col justify-center items-center space-y-9 p-3">
        <div className=" w-full flex  justify-center items-center flex-col gap-5">
          <Title title="About us" />
          <p className=" w-full md:w-1/2 text-center ">
            We’re passionate travelers dedicated to helping you explore the
            world with ease and confidence. From iconic landmarks to hidden
            gems, we make your journey unforgettable.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  w-full justify-center items-center gap-9 ">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="shadow-md shadow-[rgb(230,230,230)] p-3 rounded-md gap-1 transition-all duration-300 hover:cursor-pointer hover:scale-110"
            >
              <div>{item.icon}</div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
