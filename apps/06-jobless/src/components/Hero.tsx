import React from "react";

const Hero = () => {
  return (
    <div className="mt-[135px] lg:w-[653px] flex flex-col items-center mx-auto">
      <h1 className="font-semibold lg:text-[36px] text-[28px] lg:leading-[54px] leading-[48px] text-center">
        Get Connected to the Best Remote Jobs in Your Field
      </h1>
      <p className="lg:w-[553px] mt-[15px] lg:text-[16px] text-[14px] leading-[32px] text-black/60 text-center">
        Discover a wide range of remote opportunities on our platform and take
        control of your career
      </p>
      <div className="mt-[40px] flex lg:gap-[20px] gap-1">
        <button className="px-[10px] lg:px-[17px] py-[4px] lg:py-[12px] bg-[#001AFF] shadow-[0px_15px_30px_rgba(0,26,255,0.2)] rounded-full font-semibold lg:text-[16px] text-[12px] leading-[24px] text-white">
          Explore Remote Job
        </button>
        <button className="px-[10px] lg:px-[17px] py-[4px] lg:py-[12px font-semibold lg:text-[16px] text-[12px] leading-[24px] text-[#001AFF] underline">
          How it Works?
        </button>
      </div>
    </div>
  );
};

export default Hero;
