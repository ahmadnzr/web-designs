import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1 className="font-semibold text-[22px] leading-[28px]">Kourse</h1>
      <div className="flex items-center gap-[50px] font-semibold text-[16px] leading-[20px]">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#job">Post a Job</a>
        <a href="#contact">Contact Us</a>
      </div>
      <button className="px-[25px] py-[10px] bg-black/10 rounded-[8px] font-semibold text-[16px] leading-[20px]">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
