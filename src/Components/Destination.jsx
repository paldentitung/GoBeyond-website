import React from "react";
import Card from "../Components/Card";
import data from "../data/destinations";
import Title from "./Title";
const Destinations = () => {
  return (
    <>
      <div className="mt-10">
        <div className="text-center">
          <Title title="Featured Destinations" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[10%] py-[5%] min-h-screen">
          {data.map((destination, index) => (
            <Card destination={destination} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Destinations;
