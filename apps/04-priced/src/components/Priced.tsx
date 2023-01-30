import React from "react";

import ok from "../assets/ok.png";
import no from "../assets/no.png";

const Priced = () => {
  return (
    <div className="text-black/60 mt-[96px] flex items-start justify-end">
      <div className="flex-1 p-[30px] bg-white/90 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-[10px_0px_10px_10px] hover:scale-105 duration-75">
        <div>
          <h2 className="text-purpleDark font-bold text-[16px] leading-[21px]">
            Basic
          </h2>
          <div>
            <span className="text-purpleDark font-bold text-[40px] leading-[52px] mr-[8px]">
              $5
            </span>
            <span className="font-bold text-[14px] leading-[18px]">/month</span>
          </div>
          <span className="font-normal text-[14px] leading-[22px]">
            A budget-friendly option for individuals and small businesses.
          </span>
        </div>
        <button className="mt-[30px] w-full bg-purpleLight p-[10px] rounded-[6px] font-medium text-[14px] leading-[22px] text-white">
          Get Started
        </button>
        <div className="mt-[30px] text-black/60">
          <span className="text-[14px] leading-[22px]">Features</span>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              10 GB storage
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Basic file collaboration
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Mobile app access
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              File synchronization across devices
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Support for common file types
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={no} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Automatic file backup
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={no} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Advanced security features
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 ml-[22px] p-[30px] bg-white/90 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-[0px_0px_10px_10px] relative hover:scale-105 duration-75">
        <div className="absolute -top-[28px] left-0 right-0 bg-purpleDark text-white text-center rounded-[10px_10px_0px_0px]">
          <span className="uppercase text-[10px] font-bold leading-[22px]">
            recommended
          </span>
        </div>
        <div>
          <h2 className="text-purpleDark font-bold text-[16px] leading-[21px]">
            Professional
          </h2>
          <div>
            <span className="text-purpleDark font-bold text-[40px] leading-[52px] mr-[8px]">
              $15
            </span>
            <span className="font-bold text-[14px] leading-[18px]">/month</span>
          </div>
          <span className="font-normal text-[14px] leading-[22px]">
            A comprehensive option for businesses with more advanced needs.
          </span>
        </div>
        <button className="mt-[30px] w-full bg-purpleLight p-[10px] rounded-[6px] font-medium text-[14px] leading-[22px] text-white">
          Get Started
        </button>
        <div className="mt-[30px] text-black/60">
          <span className="text-[14px] leading-[22px]">Features</span>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              10 GB storage
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Advanced file collaboration
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Mobile app access
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              File synchronization across devices
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Support for common file types
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Automatic file backup
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Advanced security features
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Purchase additional features
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 ml-[38px] p-[30px] bg-white/90 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-[0px_10px_10px_10px] hover:scale-105 duration-75">
        <div>
          <h2 className="text-purpleDark font-bold text-[16px] leading-[21px]">
            Enterprise
          </h2>
          <div>
            <span className="text-purpleDark font-bold text-[40px] leading-[52px] mr-[8px]">
              Custom
            </span>
          </div>
          <span className="font-normal text-[14px] leading-[22px]">
            A customizable plan for large organizations with specific needs.
          </span>
        </div>
        <button className="mt-[30px] w-full bg-purpleLight p-[10px] rounded-[6px] font-medium text-[14px] leading-[22px] text-white">
          Get Started
        </button>
        <div className="mt-[30px] text-black/60">
          <span className="text-[14px] leading-[22px]">Features</span>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Customizable storage capacity
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Advanced file collaboration
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Mobile app access
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              File synchronization across devices
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Support for common file types
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Automatic file backup
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Advanced security features
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Customizable features
            </span>
          </div>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <img src={ok} alt="" />
            <span className="font-medium text-[16px] leading-[22px]">
              Purchase additional features
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priced;
