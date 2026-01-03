import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import categoryData from "../Data/categoryData";
import Button from "./UI/Button";

const Category = () => {
  return (
    <section>
      <div className="container mx-auto px-3">
        <div className="pb-10 sm:pb-20 pt-15">
          <Heading orangeText="Shop" normalText="by Category" />
        </div>
        <div className="grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-3 gap-10 max-[451px]:gap-2 pb-20">
          {categoryData.map((item) => (
            <div key={item.id}>
              <div className="overflow-hidden min-h-[30vh] md:min-h[30vh] relative">
                <img
                  src={item.image}
                  alt="Category Image"
                  className="absolute bottom-0"
                />
              </div>
              <div className="bg-zinc-100 pt-17 p-8 rounded-b-xl -mt-10">
                <h3 className="text-zinc-800 text-2xl md:text-3xl font-bold">
                  {item.title}
                </h3>
                <p className="text-zinc-600 mt-3 mb-8 line-clamp-3">
                  {item.description}
                </p>
                <Link
                  to={`category/${item.slug}`}
                  className="inline-block bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 lg:px-7 py-[10px]  lg:py-[9px] rounded-lg text-base max-[351px]:text-sm sm:text-lg font-medium hover:scale-105 hover:to-orange-600 transition duration-300 cursor-pointer capitalize"
                >
                  see all
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
