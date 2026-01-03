import React from "react";

const Heading = ({ orangeText, normalText }) => {
  return (
    <div className="text-center w-fit mx-auto relative">
      <h2 className="text-zinc-800 md:text-5xl text-3xl font-bold capitalize">
        <span className="text-orange-500">{orangeText}</span> {normalText}
      </h2>
      <hr className="w-30 absolute right-0 mt-3 md:mt-4 text-orange-500 border-t-4 rounded-md" />
    </div>
  );
};

export default Heading;
