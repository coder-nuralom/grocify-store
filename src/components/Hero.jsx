import React from "react";
import { Link } from "react-router-dom";
import Grocery from "../assets/grocery.png";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] md:min-h-[57vh] lg:min-h-[65vh] xl:min-h-[80vh] pt-15 xl:pt-20">
      <div className="container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="content_area">
          <span className="bg-orange-100 text-orange-500 text-lg capitalize px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="capitalize text-4xl/12  lg:text-6xl/19 xl:text-7xl font-bold mt-4">
            tasty organic <span className="text-orange-500">fruits</span> &
            <span className="text-orange-500"> veggies</span> in your city
          </h1>
          <p className="text-zinc-600 text-lg mt-4 md:mt-5 mb-6 max-w-[530px] max-[414px]:text-[16px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Link
            to={"/allProducts"}
            className="inline-block bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 lg:px-7 py-[10px]  lg:py-[9px] rounded-lg text-base max-[351px]:text-sm sm:text-lg font-medium hover:scale-105 hover:to-orange-600 transition duration-300 cursor-pointer capitalize"
          >
            Shop Now
          </Link>
        </div>
        <div className="image_area text-center mx-auto max-w-[500px] max-h-[500px] md:w-full md:h-full">
          <img className="inline-block " src={Grocery} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
