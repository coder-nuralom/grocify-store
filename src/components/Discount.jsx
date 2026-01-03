import React from "react";
import Button from "./UI/Button";
import freshFruits from "../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section className="bg-zinc-100 py-10 relative">
      <div
        className="background_image hidden md:block absolute z-0 inset-0 bg-cover sm:bg-contain bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${freshFruits})` }}
      ></div>
      <div className="container relative z-10 mx-auto px-3">
        <div className="flex flex-col sm:flex-row">
          <span className="text-6xl mb-2 sm:mb-0 sm:text-9xl text-orange-500 font-bold sm:transform sm:-rotate-90 sm:self-center">
            20%
          </span>
          <div className="max-w-[700px]">
            <h3 className="capitalize max-[576px]:text-3xl text-4xl sm:text-5xl md:text-7xl text-zinc-800 font-bold">
              First order discount!
            </h3>
            <p className="text-zinc-600 my-6 font-medium">
              Enjoy an exclusive first order discount on our grocery website!
              Shop free essentials and save big on your first purchase. Fast
              delivery and quality guaranteed.
            </p>
            <Button content="get a discount" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
