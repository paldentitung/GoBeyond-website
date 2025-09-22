import React from "react";

const SecondaryButton = ({ name }) => {
  return (
    <button className="px-7 py-2 bg-gradient-to-r bg-purple-700 via-rose-500 to-purple-500">
      {name}
    </button>
  );
};

export default SecondaryButton;
