import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex-1 flex justify-start">
        <h1 className="font-bold text-[18px] leading-[23.44px] italic">
          Strawrage
        </h1>
      </div>
      <div className="hidden lg:w-[550px] lg:flex gap-[50px] items-center justify-center font-medium text-[16px] leading-[21px] text-white/80">
        <a href="#home">Home</a>
        <a href="#product">Product</a>
        <a href="#pricing" className="font-bold text-white">
          Pricing
        </a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="flex-1 flex justify-end">
        <button className=" bg-purpleDark px-[18px] py-[10px] rounded-[6px] font-bold text-[16px] leading-[21px]">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
