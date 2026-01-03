import React from "react";
import { useParams } from "react-router-dom";
import categoryData from "../Data/categoryData";

const Banner = () => {
  const { categoryName } = useParams();
  const specificCategory = categoryData.find(
    (item) => item.slug === categoryName
  );
  return (
    <div
      className="bg-zinc-400 h-[30vh] sm:h-[40vh] md:h-[50vh] flex justify-center items-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(${specificCategory.bannerImage})` }}
    >
      <div className="overlay absolute z-10 inset-0 bg-black/20"></div>
      <h2 className=" relative z-20 text-3xl sm:text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold capitalize">
        {specificCategory.title}
      </h2>
    </div>
  );
};

export default Banner;
