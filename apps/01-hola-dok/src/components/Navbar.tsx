import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between relative z-50">
      <div className="flex items-center xl:w-[199px] lg:w-44">
        <img src={logo} alt="" />
        <span className="ml-[15px] font-bold text-[18px]">Holadok</span>
      </div>
      <div className="hidden flex-1 lg:flex items-center gap-[50px] text-[16px] text-black/80">
        <a href="#home" className="font-semibold text-textDark">
          Home
        </a>
        <a href="#features">Features</a>
        <a href="#blog">Blog</a>
        <a href="#abous-us">About Us</a>
      </div>
      <div className="hidden flex-1 lg:w-[295px] font-dmSans text-[16px] font-bold leading-[21px] md:flex justify-center lg:justify-end">
        <button className="px-[20px] py-[8px] ">Login</button>
        <button className="px-[20px] py-[8px] border border-[#101C45] ml-[15px]">
          Book Now
        </button>
      </div>
      <div className="lg:hidden ml-4">
        <Bars3Icon className="h-9 w-9 text-textDark" />
      </div>
    </nav>
  );
};

export default Navbar;
