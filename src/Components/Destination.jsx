import React, { useState } from "react";
import Card from "../Components/Card";
import data from "../data/destinations";
import Title from "./Title";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";

const Destinations = ({ showAll = false, mode }) => {
  const displayedData = showAll ? data : data.slice(0, 8);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const filterData = displayedData.filter((item) => {
    const matchedSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());

    const userFilterdata = filter
      ? item.category.toLowerCase() === filter.toLowerCase()
      : true;

    return matchedSearch && userFilterdata;
  });
  return (
    <>
      <div className="mt-10 min-h-screen">
        <div className="text-center">
          <Title title="Featured Destinations" />
        </div>
        {showAll && (
          <>
            <div className="w-full max-w-6xl mx-auto mt-6 flex justify-between items-center p-3 flex-col space-y-5">
              {/* Search input */}
              <input
                type="search"
                className="border w-full  px-4 py-2 rounded-md shadow-md"
                placeholder="Search destinations..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Filter select */}
              <div
                className={`flex self-end items-center gap-2 ml-4 
               `}
              >
                <h1 className="font-medium">Filter:</h1>
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  className={`border px-3 py-2 rounded-md  outline-0 cursor-pointer   ${
                    mode ? "text-white bg-gray-800" : "text-black bg-gray-200"
                  }`}
                >
                  <option value="">Select</option>
                  <option value="city">City</option>
                  <option value="beach">Beach</option>
                  <option value="mountain">Mountain</option>
                  <option value="historical">Historical</option>
                </select>
              </div>
            </div>
          </>
        )}
        {filterData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[10%] py-[5%]">
            {filterData.map((destination, index) => (
              <div key={index}>
                <Card destination={destination} mode={mode} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-semibold ">No destinations found</h2>
            <p className="text-gray-500 mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        )}
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
