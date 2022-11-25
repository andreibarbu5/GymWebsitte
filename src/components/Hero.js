import React from "react";
import workouts from "../assets/workouts.jpg";

const Hero = () => {
  return (
    <div className="">
      <div className="relative ">
        <div className="absolute z-0 w-full   h-[33rem] flex ">
          <img src={workouts} alt="" className="object-cover w-full  h-full" />
        </div>
        <div className="relative z-30  text-white flex flex-col items-center justify-center h-[33rem]  px-4">
          <h1 className="font-bold text-[60px] sm:text-[72px]  text-center ">
            Free Workout Plans
          </h1>

          <h3 className="font-sm  text-[22px] sm:text-[26px]  text-center">
            The most comprehensive database of free workout routines anywhere!
          </h3>
          <h3 className="font-sm  text-[22px] sm:text-[26px] text-center -mt-1">
            Download workout plans any goal or experience level.
          </h3>
        </div>
      </div>
      <div className="w-full bg-[#f5f5f5]">
        <div className=" flex items-center justify-between  px-12 sm:px-20  py-2 max-w-[50rem] mx-auto ">
          <div className="flex flex-col items-center justify-center font-bold text-[25px] text-gray-500">
            <p>1000+</p>
            <p className="text-[15px]">WORKOUTS</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold text-[25px] text-gray-500">
            <p>303M</p>
            <p className="text-[15px]">DOWNLOADS</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold text-[25px] text-gray-500">
            <p>120+</p>
            <p className="text-[15px]">CONTRIBUTORS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
