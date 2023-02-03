import React from "react";

import arrow from "../assets/arrow.png";
import block from "../assets/block.png";

const Hero = () => {
  return (
    <div className="absolute top-[250px] w-[653px] z-40">
      <div className="flex flex-col items-start justify-between gap-[45px]">
        <h2 className="w-[653px] font-light text-[56px] leading-[76px]">
          Experience the power of&nbsp;
          <span className="font-semibold">professional UI kit</span>
        </h2>
        <p className="w-[457px] text-[18px] text-white/80 leading-[38px]">
          Choose from a wide range of styles and themes to find the perfect fit
          for your project
        </p>
        <button className="flex items-center justify-between gap-[20px] px-[35px] py-[20px] bg-[#FFB802] shadow-[0px_15px_30px__rgba(0,26,255,0.2)] rounded-full text-black ">
          <span className="font-semibold text-[16px] leading-[24px]">
            Discover
          </span>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className="mt-[95px] flex items-start gap-[25px]">
        <img src={block} alt="" />
        <div className="w-[362px]">
          <h1 className="font-medium text-[18px] leading-[25px]">
            Unlimited Blocks
          </h1>
          <p className="mt-[13px] text-[14px] leading-[26px] text-white/60">
            Having access to unlimited blocks means that users can create a wide
            range of designs without running out of elements to work with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
