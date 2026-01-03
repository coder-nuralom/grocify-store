import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import initialProducts from "../Data/initialProducts";
import Cards from "./Cards";
import Button from "./UI/Button";

const Products = () => {
  const availableCategories = [
    "All",
    ...new Set(initialProducts.map((item) => item.category)),
  ];

  const [selectedCategroy, setSelectedCategroy] = useState("All");
  const filteredProducts = initialProducts.filter(
    (item) => selectedCategroy === "All" || item.category === selectedCategroy
  );

  return (
    <section className="pb-20">
      <div className="container mx-auto px-3">
        <div className="pt-5">
          <Heading orangeText="Our" normalText="Products" />
        </div>
        <div className="flex flex-wrap gap-3 max-[576px]:gap-2 justify-center mt-10 mb-15">
          {availableCategories.map((category) => (
            <button
              onClick={() => setSelectedCategroy(category)}
              key={category}
              className={`px-5 max-[576px]:px-4 py-2 text-base max-[576px]:text-[15px] font-semibold rounded-md capitalize transition duration-200 cursor-pointer ${
                selectedCategroy == category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-9">
          {filteredProducts.slice(0, 8).map((item) => (
            <Cards key={item.id} singleProduct={item} />
          ))}
        </div>

        <div className="mt-13 max-[576px]:mt-10 w-fit mx-auto">
          <Link
            to={"/allProducts"}
            className="inline-block bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 lg:px-7 py-[10px]  lg:py-[9px] rounded-lg text-base max-[351px]:text-sm sm:text-lg font-medium hover:scale-105 hover:to-orange-600 transition duration-300 cursor-pointer capitalize"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
