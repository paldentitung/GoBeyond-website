import React from "react";
import hero__image from "../assets/hero-image.jpg";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";
import { BsCursor } from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <div
        className=" h-[600px]
      lg:h-[80vh] w-full relative group  "
      >
        <div className="h-full w-full">
          <img
            src={hero__image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* overlay */}
        <div
          className="
    absolute inset-0 bg-sky-900/50 text-white flex justify-center items-center flex-col
    opacity-100 lg:opacity-0 lg:group-hover:opacity-100
    transition-all duration-300
  "
        >
          <div className="flex justify-center items-center flex-col space-y-4">
            <div className="text-[18px] md:text-3xl lg:text-5xl">
              Discover Your Next Adventure
            </div>
            <div className="text-[14px] text-2xl text-center">
              Explore breathtaking destinations, create unforgettable memories,
              and travel beyond the ordinary
            </div>
            <div className=" relative group  overflow-hidden">
              <Link to="/destinations">
                <MainButton name="Explore More " />

                <BsCursor
                  className="text-[20px]  absolute right-2 bottom-3 p-[2px]  
              
             transition-all duration-300 
              group-active:-right-4 group-active:-top-4 "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
