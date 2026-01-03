import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Values from "../components/Values";
import Products from "../components/Products";
import Discount from "../components/Discount";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
    </>
  );
};

export default Home;
