import React from "react";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.webp";
import Card from "./Card";

const Categories = () => {
  const categories = [
    { title: "Workouts For Men", img: img1 },
    { title: "Workouts For Women", img: img2 },
    { title: "Muscle Building", img: img3 },
    { title: "Fat Loss", img: img4 },
    { title: "Increase Strength", img: img5 },
    { title: "Ab Workouts", img: img6 },
    { title: "Full Body", img: img7 },
    { title: "Workouts For Men", img: img1 },
    { title: "Workouts For Women", img: img2 },
    { title: "Muscle Building", img: img3 },
    { title: "Fat Loss", img: img4 },
    { title: "Increase Strength", img: img5 },
    { title: "Ab Workouts", img: img6 },
    { title: "Full Body", img: img7 },
    { title: "Increase Strength", img: img5 },
    { title: "Ab Workouts", img: img6 },
    { title: "Full Body", img: img7 },
    { title: "Workouts For Men", img: img1 },
    { title: "Workouts For Women", img: img2 },
    { title: "Muscle Building", img: img3 },
    { title: "Fat Loss", img: img4 },
    { title: "Increase Strength", img: img5 },
    { title: "Ab Workouts", img: img6 },
    { title: "Full Body", img: img7 },
  ];
  return (
    <div className="text-center pt-12 px-8 xl:px-12  mx-auto">
      <div className="max-w-[45rem] md:max-w-[65rem] mx-auto">
        {/* Title */}
        <p className="font-black text-[30px] sm:text-[35px] text-[#005599]">
          WORKOUT CATEGORIES
        </p>
        {/* Description */}
        <p className="text-[20px] pt-3">
          Choose a category that best suits the workout you're searching for.
          Once in the category, use the sort and filter options to find the
          right workout for your experience and goals.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4   lg:grid-cols-5 2xl:grid-cols-6   gap-x-4  gap-y-5 pt-6">
        {categories.map((category) => (
          <Card title={category.title} img={category.img} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
