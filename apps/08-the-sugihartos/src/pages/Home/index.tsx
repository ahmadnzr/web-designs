import React from "react";

import BG3 from "../../assets/bg3.png";
import BG2 from "../../assets/bg2.png";
import IMAGE from "../../assets/image1.png";
import ARROW from "../../assets/icon/arrow.png";
import { PageType } from "../../App";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
}
const Backround = () => {
  return (
    <div className="z-0 -left-20 right-0 -top-10 absolute">
      <div className="flex gap-20">
        <img src={BG3} alt="" />
        <img src={BG2} alt="" />
      </div>
      {/* <img src={BG1} /> */}
    </div>
  );
};

const Home = ({ setPage }: Props) => {
  return (
    <div className="relative">
      <div className="z-10 flex absolute">
        <div className="flex-1">
          <p className="font-light text-[40px] text-title">Hi, nama saya</p>
          <p className="font-bold text-[40px] text-title">Dedik Sugiharto!</p>
          <p className="text-[18px] leading-[30px] w-[415px] mt-[15px]">
            Saya seorang software-engineer, pembaca buku, warga NU, dan juga
            murid (online) Pak Fahruddin Faiz.
          </p>

          <div
            className="flex items-center mt-[40px] cursor-pointer"
            onClick={() => setPage("overview")}
          >
            <p className="mr-[10px] font-semibold text-[16px] leading-[19px] text-title">
              Go To Overview
            </p>
            <img src={ARROW} alt="" />
          </div>
          <div className="mt-[66px]">
            <div className="flex items-center gap-[32px]">
              <div className="flex flex-col gap-[8px]">
                <span className="uppercase text-[12px] leading-[15px] tracking-[0.1em]">
                  Projects
                </span>
                <span className="font-semibold text-[24px] leading-[29px] text-title">
                  12
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="uppercase text-[12px] leading-[15px] tracking-[0.1em]">
                  Experience
                </span>
                <span className="font-semibold text-[24px] leading-[29px] text-title">
                  8 yrs
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="uppercase text-[12px] leading-[15px] tracking-[0.1em]">
                  Projects
                </span>
                <span className="font-semibold text-[24px] leading-[29px] text-title">
                  IDN 🇮🇩
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={IMAGE} alt="" className="mt-[100px] ml-[170px]" />
        </div>
      </div>
      <Backround />
    </div>
  );
};

export default Home;
