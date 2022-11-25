import React from "react";
import addmobile from "../assets/addmobile.webp";
import addweb from "../assets/addweb.webp";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";

import logo from "../assets/logo.png";
// import workouts from "../assets/workouts.jpg";
const Navbar = () => {
  return (
    <div>
      {/* bg-[#191500] */}
      {/* Add */}
      <div className="bg-[#191500] w-full ">
        <div className="flex xs:hidden mx-auto  xl:w-[80vw]   justify-center">
          <img src={addmobile} alt="" />
        </div>
        <div className="hidden xs:flex mx-auto w-full xl:w-[80vw] justify-center ">
          <img src={addweb} alt="" />
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full bg-[#005599]">
        <div className=" flex items-center justify-between px-3 py-3 mx-auto  xl:w-[80vw] 2xl:w-[70vw]">
          {/* Left */}
          <div className=" text-white flex items-center  gap-4">
            <FiMenu className="w-9 h-9" />
            <BiWorld className="w-9 h-9" />
            <div className="hidden md:flex items-center w-20  ">
              <img src={logo} alt="" className="" />
            </div>
          </div>
          {/* Middle */}
          <div className="flex items-center w-20 md:hidden">
            <img src={logo} alt="" className="" />
          </div>
          <div className="relative items-center hidden md:flex">
            <input
              type="search"
              className="rounded-[0.3rem] py-1 w-[25rem] lg:w-[35rem]"
            />
            <div className="absolute bg-[#4489c1]  w-[2rem] h-[2rem] right-0 flex items-center justify-center rounded-r-[0.2rem]">
              <FiSearch className="text-[26px] text-white" />
            </div>
          </div>
          {/* Right */}
          <div className="text-white flex items-center gap-4">
            <BsCart2 className="w-9 h-9" />
            <TfiUser className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
