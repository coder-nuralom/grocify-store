import React from "react";
import Cards from "../components/Cards";
import initialProducts from "../Data/initialProducts";
import allproductsBanner from "../assets/all-banner.jpg";

const AllProducts = () => {
  return (
    <section className="pb-20 pt-15">
      <div
        className="bg-zinc-400 h-[30vh] sm:h-[40vh] md:h-[50vh] flex justify-center items-center bg-center bg-cover relative"
        style={{ backgroundImage: `url(${allproductsBanner})` }}
      >
        <div className="overlay absolute z-10 inset-0 bg-black/20"></div>
        <h2 className=" relative z-20 text-3xl sm:text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold capitalize">
          All Products
        </h2>
      </div>
      <div className="container mx-auto px-3 mt-15">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-9">
          {initialProducts.map((item) => (
            <Cards key={item.id} singleProduct={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
