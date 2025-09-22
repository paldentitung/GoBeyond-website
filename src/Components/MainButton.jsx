import React from "react";

const MainButton = ({ name, onClick }) => {
  return (
    <button
      className="px-8 py-2 bg-gradient-to-r text-white from-orange-400 via-pink-500 to-red-500 rounded-md transition-all duration-150 hover:shadow-md hover:shadow-orange-400 hover:cursor-pointer"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default MainButton;
