import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Heading from "./Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import testimonialsData from "../Data/testimonialsData";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto px-3">
        <div className="pb-20">
          <Heading orangeText="Customers" normalText="Saying" />
        </div>
        <div className="flex items-center justify-end gap-x-3 mb-3">
          <button className="text-2xl text-zinc-800 w-11 h-11 flex items-center justify-center rounded-md bg-zinc-100 cursor-pointer hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition duration-300 custom-prev">
            <IoIosArrowBack />
          </button>
          <button className="text-2xl text-zinc-800 w-11 h-11 flex items-center justify-center rounded-md bg-zinc-100 cursor-pointer hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition duration-300 custom-next">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide
              key={item.id}
              className="single_card p-8 bg-zinc-100 rounded-xl"
            >
              <div className="flex items-center gap-5">
                <div className="border-2 border-orange-500 rounded-full p-1">
                  <img
                    src={item.image}
                    alt="Customers"
                    className="w-15 h-15 rounded-full object-center object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600">{item.profession}</p>
                  <span className="flex text-yellow-400">
                    {Array.from({ length: item.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                </div>
              </div>
              <p className="text-zinc-600 mt-10 min-h-[15vh]">{item.para}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="card_wrapper"></div>
      </div>
    </section>
  );
};

export default Testimonials;
