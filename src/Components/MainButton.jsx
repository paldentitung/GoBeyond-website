import React from "react";

const MainButton = ({ name, onClick }) => {
  return (
    <button
      className="px-8 py-2 bg-gradient-to-r from-purple-400 via-red-500 to-rose-600  rounded-md transition-all  duration-150 hover:shadow-md hover:shadow-purple-500 hover:cursor-pointer"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default MainButton;
