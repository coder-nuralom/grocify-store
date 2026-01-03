import React from "react";
import Heading from "./Heading";
import valueData from "../Data/valueData";
import Basket from "../assets/basket-full-vegetables.png";

const Values = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-3">
        <div className="pb-20">
          <Heading orangeText="our" normalText="Values" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          <div className="left_content max-[768px]:min-h-60 flex flex-col justify-between">
            {valueData.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex flex-row-reverse items-center gap-5 md:gap-4 lg:gap-7"
              >
                <div>
                  <span className="text-2xl text-white max-[576px]:h-11 max-[576px]:w-11 h-12 w-12 bg-gradient-to-b from-orange-400 to-orange-500 flex items-center justify-center rounded-full">
                    {<item.icon />}
                  </span>
                </div>
                <div className="text-right">
                  <h3 className="text-zinc-800 text-[26px] md:text-[28px] lg:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 line-clamp-2 mt-2">{item.para}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="middle_content flex justify-center items-center">
            <img
              className="object-cover max-[768px]:min-h-50 max-[768px]:max-h-80"
              src={Basket}
              alt="our values image"
            />
          </div>

          <div className="right_content max-[768px]:min-h-60 flex flex-col justify-between">
            {valueData.slice(2, 4).map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 md:gap-4 lg:gap-7"
              >
                <div>
                  <span className="text-2xl text-white h-12 w-12 max-[576px]:h-11 max-[576px]:w-11 bg-gradient-to-b from-orange-400 to-orange-500 flex items-center justify-center rounded-full">
                    {<item.icon />}
                  </span>
                </div>
                <div>
                  <h3 className="text-zinc-800 text-[26px] md:text-[28px] lg:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 line-clamp-2 mt-2">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
