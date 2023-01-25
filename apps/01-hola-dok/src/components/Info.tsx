import React from "react";

import cal from "../assets/cal.png";
import lonceng from "../assets/lonceng.png";
import cam from "../assets/cam.png";

const Info = () => {
  return (
    <div className="absolute bottom-[32px] p-[40px] bg-primary text-white font-dmSans flex items-center justify-between gap-[32px]">
      <div className="flex-1 flex gap-[25px]">
        <img src={cal} alt="" className="w-[40px] h-[40px]" />
        <div className="w-[294px]">
          <h1 className="font-bold text-[18px] leading-[23px]">
            Online appointment scheduling
          </h1>
          <p className="mt-[10px] font-normal text-[16px] leading-[26px] text-white/80">
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>
      <div className="flex-1 flex gap-[25px]">
        <img src={lonceng} alt="" className="w-[40px] h-[40px]" />
        <div className="w-[294px]">
          <h1 className="font-bold text-[18px] leading-[23px]">
            Medication reminders
          </h1>
          <p className="mt-[10px] font-normal text-[16px] leading-[26px] text-white/80">
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>
      <div className="flex-1 flex gap-[25px]">
        <img src={cam} alt="" className="w-[40px] h-[40px]" />
        <div className="w-[294px]">
          <h1 className="font-bold text-[18px] leading-[23px]">
            Virtual consultations
          </h1>
          <p className="mt-[10px] font-normal text-[16px] leading-[26px] text-white/80">
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
