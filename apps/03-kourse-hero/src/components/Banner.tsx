import React from "react";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import iconButton from "../assets/next.png";

const Banner = () => {
  return (
    <>
      <div className="absolute z-30 top-[199px] right-[217px] bg-white text-black rounded-[10px]">
        <img src={image1} alt="" />
        <div className="p-[25px] font-semibold">
          <span className="px-[10px] py-[2px] bg-black/10 rounded-[100px] text-[12px] leading-[18px]">
            Web Development
          </span>
          <h1 className="mt-[5px] text-[22px] leading-[33px]">
            Front-End Development
          </h1>
          <span className="mt-[10px] text-[24px] leading-[30px] text-[#FF5C00]">
            $599
          </span>
          <div className="h-[1px] bg-black/10 my-[15px]" />
          <div className="flex justify-between items-center">
            <span
              className="text-[12px] leading-[18px] text-black/60
                  "
            >
              13h 18min • 18 Lessons
            </span>
            <button className="flex justify-between items-center">
              <span className="text-[14px] leading-[26px]">View Details</span>
              <img src={iconButton} alt="" />
            </button>
          </div>
        </div>
      </div>
      <img
        src={image2}
        alt=""
        className="absolute z-20 top-[217px] right-[174px]"
      />
      <img
        src={image3}
        alt=""
        className="absolute z-10 top-[236px] right-[134px]"
      />
    </>
  );
};

export default Banner;
