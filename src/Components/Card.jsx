import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import rating40 from "../assets/rating-40.png";
import rating45 from "../assets/rating-45.png";
import rating50 from "../assets/rating-50.png";
import { FaMapMarkedAlt } from "react-icons/fa";
const ratingImages = {
  40: rating40,
  45: rating45,
  50: rating50,
};

const Card = ({ destination }) => {
  const { image, name, description, price, rating, category } = destination;
  return (
    <>
      <div className="  rounded-md overflow-hidden shadow-lg shadow-[rgb(230,230,230)] flex flex-col  transition-all duration-200 hover:cursor-pointer  hover:shadow-[rgb(220,220,220)]">
        <div className="h-1/2 w-full overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full  w-full object-cover transition-all duration-300 hover:scale-110 "
          />
        </div>
        <div className="flex flex-col space-y-3 p-4">
          <div className="flex  justify-between">
            <h1 className="font-bold">{name}</h1>
            <FaMapMarkedAlt />
          </div>
          <p className="text-gray-700">{description}</p>
          <div className="flex justify-between items-center">
            <span>{price}</span>
            <span className="">
              <img
                src={ratingImages[rating]}
                alt={`Rating: ${rating}`}
                className="w-12 h-12 object-contain"
              />
            </span>
          </div>
          <span className="flex-1">{category}</span>
          <Link className="flex items-center gap-4 text-blue-400">
            <span>Read more</span>
            <FaArrowRight className="text-[14px]" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
