import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0687e6] py-4 mt-10">
      <div className=" h-[5rem]  text-white flex items-center  lg:max-w-[55vw] mx-auto   bg-[#0687e6] px-4 lg:px-0">
        <div className="  bg-[#0687e6]">
          <p className="sm:text-[26px] font-bold ">Free Workouts & Advice</p>
          <p>
            We send you the latest workouts, videos, expert guides and deals.
          </p>
        </div>
        <div className="hidden xl:flex pl-12 py- bg-[#0687e6]">
          <input
            type="search"
            className="w-[20rem] py-2 rounded-full text-black pl-4"
            placeholder="Email Adress"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
