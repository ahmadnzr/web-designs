import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute px-[150px] h-[52px] left-0 right-0 flex items-center justify-between z-50">
      <h1 className="w-[170px] font-semibold text-[22px] leading-[29.96px]">
        digidaw
      </h1>
      <div className="flex-1 flex items-center gap-[50px] font-semibold text-[16px] leading-[22px] text-white/60">
        <a href="#home" className="text-white">
          Home
        </a>
        <a href="#discover">Discover Elements</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="w-[295px] flex justify-end items-start">
        <button className="px-[30px] py-[15px] bg-white text-black rounded-full">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
