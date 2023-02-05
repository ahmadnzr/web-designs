import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[44px] flex justify-between items-center">
      <div className="lg:w-[295px] text-left">
        <h1 className="font-semibold lg:text-[22px] text-[18px] leading-[33px]">
          Jobless
        </h1>
      </div>
      <div className="hidden lg:flex flex-1 gap-[50px] items-center justify-center text-[16px] leading-[24px] text-black/80">
        <a href="#home" className="text-black font-medium">
          Home
        </a>
        <a href="#discover">Discover</a>
        <a href="#job">Post a Job</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="lg:w-[295px] text-right">
        <button className="px-[20px] lg:px-[25px] py-[5px] lg:py-[10px] border border-black/20 rounded-[3px] font-semibold lg:text-[16px] text-[14px] leading-[24px]">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
