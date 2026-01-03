import React from "react";

const Button = (props) => {
  return (
    <button className=" bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 lg:px-7 py-2  lg:py-[9px] rounded-lg text-base max-[351px]:text-sm sm:text-lg font-medium hover:scale-105 hover:to-orange-600 transition duration-300 cursor-pointer capitalize">
      {props.content}
    </button>
  );
};

export default Button;
