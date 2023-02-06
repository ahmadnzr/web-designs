import React from "react";
import { ArrowRightIcon } from "icons";

import nowted from "./assets/nowted.png";
import nowtedimg from "./assets/nowted-list.png";

function App() {
  return (
    <div className="min-h-[1515px] bg-[#181818] relative text-white">
      <div className="absolute z-50 w-full">
        <div className="lg:max-w-[1440px] mx-auto px-[150px] lg:pt-[58px]">
          <nav className="h-[54px] flex justify-between items-center">
            <div className="w-[295px] flex justify-start">
              <img src={nowted} alt="" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-[50px] text-[16px] leading-[24px]">
              <a href="#home" className="font-medium">
                Home
              </a>
              <a href="#product">Product</a>
              <a href="#support">Support</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="w-[295px] flex justify-end items-center">
              <button className="px-[30px] py-[15px] bg-black/[0.05] rounded-[3px] font-bold text-[16px] leading-[24px]">
                Login
              </button>
            </div>
          </nav>
          <div className="w-[922px] mt-[123px] mx-auto flex flex-col items-center gap-[30px]">
            <h1 className="font-light text-[40px] leading-[60px] text-center">
              Boost your productivity with our&nbsp;
              <span className="font-medium">
                streamlined note-taking solution
              </span>
            </h1>
            <p className="w-[556px] font-normal text-[18px] leading-[34px] text-center text-white/60">
              Effortlessly access your notes from any device with our convenient
              cloud-based solution.
            </p>
            <button className="px-[30px] py-[15px] flex items-center gap-[20px] bg-[#3A3AF4] rounded-[3px] font-semibold text-[16px] leading-[24px]">
              <span>Try For Free</span>
              <ArrowRightIcon className="h-[24px] w-[24px]" />
            </button>
          </div>
          <div className="flex mt-[72px] justify-center">
            <img src={nowtedimg} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute z-40 w-[1252px] h-[1252px] top-[-877px] left-[50%] -translate-x-[50%] bg-radial-gradient blur-[150px] opacity-[0.5]"></div>
      <div className="absolute z-40 w-[876px] h-[876px] top-[490px] left-[50%] -translate-x-[50%] bg-radial-gradient blur-[150px] opacity-[0.5]"></div>
    </div>
  );
}

export default App;
