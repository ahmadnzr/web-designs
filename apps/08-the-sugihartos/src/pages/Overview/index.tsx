import React from "react";

import Bullet from "../../components/Bullet";

import OVERVIEW from "../../assets/text/Overview.png";
import BG1 from "../../assets/bg1.png";
import FOTO from "../../assets/foto.png";

const Overview = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="relative h-[121px]">
          <div className="absolute z-0 -left-14">
            <img src={OVERVIEW} alt="" />
          </div>
          <h1 className="absolute z-10 top-4 font-bold text-[40px] leading-[54px] text-title">
            Overview
          </h1>
        </div>
        <p className="w-[415px] text-[18px] leading-[30px]">
          Nama saya Dedik Sugiharto, saya seorang software-engineer sebelum kata
          software-engineer itu ada. Saya terbiasa ngoding di Microsoft Word
          2003.
        </p>
        <div className="mt-[48px] text-title">
          <h2 className="mb-[20px] font-bold text-[28px] leading-[34px]">
            Pendidikan
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-[20px]">
              <Bullet />
              <span>2003-2009 SDN California 2</span>
            </div>
            <div className="flex items-center gap-[20px]">
              <Bullet />
              <span>2009-2012 SMP Los Santos 9</span>
            </div>
            <div className="flex items-center gap-[20px]">
              <Bullet />
              <span>2012-2015 SMA Berlin Jakarta 64</span>
            </div>
          </div>
        </div>
        <div className="mt-[48px] text-title">
          <h2 className="mb-[20px] font-bold text-[28px] leading-[34px]">
            Pekerjaan
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-[20px]">
              <Bullet />
              <span>Software Engineer at PT. Mencari Cinta Sejati</span>
            </div>
            <div className="flex items-center gap-[20px]">
              <Bullet />
              <span>Co-founder at A.D.M (Artis Dunia Maya)</span>
            </div>
            <div className="flex items-center gap-[20px]">
              <Bullet />
              <span>Manager at Liverpool F.C</span>
            </div>
            <div className="flex items-center gap-[20px]">
              <Bullet />
              <span>Manager at Cliquers Cllamanya</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative">
          <img className="absolute" src={BG1} alt="" />
          <div className="absolute w-full h-full left-[130px] top-[100px] bg-white">
            <img src={FOTO} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
