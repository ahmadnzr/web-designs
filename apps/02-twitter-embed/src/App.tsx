import React from "react";

import { HeartIcon } from "icons";

import photo from "./assets/photo.png";
import twitter from "./assets/twitter.png";

function App() {
  return (
    <div className="h-screen bg-[#ECF8FF] dark:bg-[#141D26] dark:text-white font-sansPro relative">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-box flex flex-col gap-[15px] items-start w-[601px] px-[31px] py-[35px] shadow-[0px_15px_60px_rgba(29,161,242,0.15)] rounded-[10px] bg-white dark:bg-[#243447] dark:shadow-[0px_15px_60px_rgba(52,81,116,0.5)]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <img src={photo} alt="" />
            <div className="ml-[22px]">
              <h1 className="font-bold text-[18px] leading-[23px]">John Due</h1>
              <span className="text-[16px] leading-[16px] text-black/60 dark:text-white/60">
                @realjohndoe
              </span>
            </div>
          </div>
          <img src={twitter} alt="" />
        </div>
        <p className="text-[16px] leading-[26px]">
          Why do they call it &apos;debugging&apos; when it feels more like
          &apos;wildly guessing and hoping for the best&apos;?&nbsp;
          <span className="text-[#1DA1F2]">
            #programming #coding #debugging
          </span>
        </p>
        <div className="flex gap-[20px] text-black/60 dark:text-white/60">
          <div className="flex items-center gap-[10px]">
            <HeartIcon className="h-[25px] cursor-pointer" />
            <span>650</span>
          </div>
          <span>3:40 PM - Feb 24, 2022</span>
        </div>
      </div>
    </div>
  );
}

export default App;
