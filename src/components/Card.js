import React from "react";

const Card = ({ title, img }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src={img} alt="" />
        <p className="font-semibold text-[18px] text-[#005599]">{title}</p>
      </div>
    </div>
  );
};

export default Card;
