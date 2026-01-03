import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "./UI/Button";

const Cards = ({ singleProduct }) => {
  const { name, price, image } = singleProduct;
  return (
    <div className="bg-zinc-100 py-6 px-5 rounded-xl">
      <div className="flex items-center justify-between">
        <button className="text-3xl text-zinc-300 cursor-pointer">
          <FaHeart />
        </button>
        <button className="text-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white h-8 w-8 flex items-center justify-center rounded-md cursor-pointer">
          <FaPlus />
        </button>
      </div>
      <div>
        <div className="w-full h-50">
          <img
            src={image}
            alt="Product Image"
            className="object-contain w-full sm:w-[90%] h-full mx-auto"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl max-[576px]:text-xl font-medium">{name}</h3>
          <p className="text-2xl max-[576px]:text-xl font-bold mt-3 mb-4">
            {price.toFixed(2)} TK
          </p>
          <Button content="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
