import React from "react";

import fb from "./assets/fb.png";
import figma from "./assets/figma.png";
import vervel from "./assets/vercel.png";

function App() {
  return (
    <div className="min-h-screen min-w-full relative">
      <div className="absolute top-0 bottom-0 w-full min-h-full z-40">
        <div className="lg:max-w-[1440px] lg:min-h-[1024px] lg:px-[150px] lg:pt-[58px] mx-auto">
          <nav className="h-[44px] flex justify-between items-center">
            <div className="w-[295px] text-left">
              <h1 className="font-semibold text-[22px] leading-[33px]">
                Jobless
              </h1>
            </div>
            <div className="flex flex-1 gap-[50px] items-center justify-center text-[16px] leading-[24px] text-black/80">
              <a href="#home" className="text-black font-medium">
                Home
              </a>
              <a href="#discover">Discover</a>
              <a href="#job">Post a Job</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="w-[295px] text-right">
              <button className="px-[25px] py-[10px] border border-black/20 rounded-[3px] font-semibold text-[16px] leading-[24px]">
                Sign Up
              </button>
            </div>
          </nav>
          <div className="mt-[135px] w-[653px] flex flex-col items-center mx-auto">
            <h1 className="font-semibold text-[36px] leading-[54px] text-center">
              Get Connected to the Best Remote Jobs in Your Field
            </h1>
            <p className="w-[553px] mt-[15px] text-[16px] leading-[32px] text-black/60 text-center">
              Discover a wide range of remote opportunities on our platform and
              take control of your career
            </p>
            <div className="mt-[40px] flex gap-[20px]">
              <button className="px-[17px] py-[12px] bg-[#001AFF] shadow-[0px_15px_30px_rgba(0,26,255,0.2)] rounded-full font-semibold text-[16px] leading-[24px] text-white">
                Explore Remote Job
              </button>
              <button className="px-[17px] py-[12px] font-semibold text-[16px] leading-[24px] text-[#001AFF] underline">
                How it Works?
              </button>
            </div>
          </div>
          <div className="mt-[126px]">
            <h1 className="font-semibold text-[16px] leading-[24px]">
              Featured Job
            </h1>
            <div className="mt-[17px] flex items-center justify-between gap-[30px]">
              <div className="p-[25px] flex-1 flex flex-col gap-[20px] text-white bg-[#001AFF] shadow-[0px_30px_60px_rgba(0,26,266,0.1)] rounded-[8px]">
                <div className="flex items-center justify-start gap-[13px]">
                  <img src={figma} alt="" />
                  <div>
                    <h1 className="font-semibold text-[18px] leading-[27px]">
                      Front-End Developer
                    </h1>
                    <span className="text-[14px] leading-[21px] text-white/80">
                      Figma
                    </span>
                  </div>
                </div>
                <p className="text-[16px] leading-[30px] text-white/60">
                  We are looking for an experienced front-end developer to join
                  our team.
                </p>
                <div className="h-[1px] bg-white/[0.15]"></div>
                <div className="flex items-center justify-between">
                  <span className="px-[15px] py-[5px] bg-white/[0.15] rounded-full font-semibold text-[12px] leading-[18px]">
                    Rust
                  </span>
                  <span className="font-semibold text-[14px] leading-[26px]">
                    $70,000 - $90,000
                  </span>
                </div>
              </div>
              <div className="p-[25px] flex-1 flex flex-col gap-[20px] bg-white shadow-[0px_30px_60px_rgba(0,26,266,0.1)] rounded-[8px]">
                <div className="flex items-center justify-start gap-[13px]">
                  <img src={fb} alt="" />
                  <div>
                    <h1 className="font-semibold text-[18px] leading-[27px]">
                      Data Scientist
                    </h1>
                    <span className="text-[14px] leading-[21px] text-black/60">
                      Facebook
                    </span>
                  </div>
                </div>
                <p className="text-[16px] leading-[30px] text-black/80">
                  We are seeking a data scientist to join our team.
                </p>
                <div className="h-[1px] bg-black/[0.05]"></div>
                <div className="flex items-center justify-between">
                  <span className="px-[15px] py-[5px] bg-black/[0.07] rounded-full font-semibold text-[12px] leading-[18px]">
                    Python
                  </span>
                  <span className="font-semibold text-[14px] leading-[26px]">
                    $100,000 - $130,000
                  </span>
                </div>
              </div>
              <div className="p-[25px] flex-1 flex flex-col gap-[20px] bg-white  shadow-[0px_30px_60px_rgba(0,26,266,0.1)] rounded-[8px]">
                <div className="flex items-center justify-start gap-[13px]">
                  <img src={vervel} alt="" />
                  <div>
                    <h1 className="font-semibold text-[18px] leading-[27px]">
                      Technical Writer
                    </h1>
                    <span className="text-[14px] leading-[21px] text-black/60">
                      Vercel
                    </span>
                  </div>
                </div>
                <p className="text-[16px] leading-[30px] text-black/60">
                  We are seeking a technical writer to join our team.
                </p>
                <div className="h-[1px] bg-black/[0.05]"></div>
                <div className="flex items-center justify-between">
                  <span className="px-[15px] py-[5px] bg-black/[0.05] rounded-full font-semibold text-[12px] leading-[18px]">
                    Documentation
                  </span>
                  <span className="font-semibold text-[14px] leading-[26px]">
                    $60,000 - $80,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute min-h-[1024px] top-0 bottom-0 left-0 right-0 z-30">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(247,259,255,0.9)] backdrop-blur-[125px] z-20"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-one z-10"></div>
      </div>
    </div>
  );
}

export default App;
