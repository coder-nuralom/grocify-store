import React from "react";
import Heading from "./Heading";
import processData from "../Data/processData";

const Process = () => {
  return (
    <section className="mb-20">
      <div className="container px-3 mx-auto">
        <div className="py-20 w-fit">
          <Heading orangeText="Our" normalText="Process" />
        </div>
        <div className="grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-4 gap-15 lg:gap-5 lg:pt-55">
          {processData.map((item) => (
            <div
              key={item.id}
              className={`${item.id % 2 === 0 ? "lg:-mt-54" : ""}`}
            >
              <div className="p-2 border-[3px] border-dashed border-zinc-800 rounded-full w-fit">
                <span className="w-15 max-[576px]:w-12 h-15 max-[576px]:h-12 flex items-center justify-center text-8xl bg-zinc-800 text-white rounded-full">
                  {<item.number />}
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-5 mt-6">
                <span className="flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 text-white h-10 w-10 text-2xl rounded-full">
                  {<item.icon />}
                </span>
                <div className="flex-1">
                  <h4 className="text-zinc-800 text-2xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
