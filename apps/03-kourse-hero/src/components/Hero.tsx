import React from "react";

const Hero = () => {
  return (
    <div className="mt-[148px] w-[653px] flex flex-col gap-[48px]">
      <h2 className="text-[54px] leading-[81px]">
        levate Your Career to the Next Level
      </h2>
      <p className="w-[553px] text-[16px] leading-[32px] text-white/60">
        Get expert-led instruction from experienced professionals in Industry
        and gain valuable skills and knowledge that can be applied to your
        career or personal life.
      </p>
      <div>
        <button className="px-[17px] py-[12px] rounded-[100px] shadow-[0px_15px_30px_rgba(0,26,255,0.2)] bg-[#FF5C00] font-semibold text-[16px] leading-[24px]">
          Find Course
        </button>
        <button className="ml-[20px] px-[17px] py-[12px] rounded-[100px] underline text-[#FF5C00] font-semibold text-[16px] leading-[24px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
