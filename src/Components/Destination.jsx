import React from "react";
import Card from "../Components/Card";
import data from "../data/destinations";
import Title from "./Title";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";

const Destinations = ({ showAll = false, mode }) => {
  const displayedData = showAll ? data : data.slice(0, 8);
  return (
    <>
      <div className="mt-10">
        <div className="text-center">
          <Title title="Featured Destinations" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[10%] py-[5%] min-h-screen">
          {displayedData.map((destination, index) => (
            <div>
              <Card destination={destination} key={index} mode={mode} />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center items-center">
            <Link to="/destinations">
              <MainButton name="Read More" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Destinations;
