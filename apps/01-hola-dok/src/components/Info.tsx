import React from "react";

import cal from "../assets/cal.png";
import lonceng from "../assets/lonceng.png";
import cam from "../assets/cam.png";

const Info = () => {
  return (
    <div className="hidden absolute bottom-[32px] xl:p-[40px] lg:p-5 bg-primary text-white font-dmSans lg:flex items-center justify-between xl:gap-[32px] lg:gap-2">
      <div className="flex-1 flex xl:gap-[25px] lg:gap-3">
        <img
          src={cal}
          alt=""
          className="xl:w-[40px] lg:w-6 xl:h-[40px] lg:h-6"
        />
        <div className="xl:w-[294px]">
          <h1 className="font-bold xl:text-[18px] lg:text-[16px] xl:leading-[23px]">
            Online appointment scheduling
          </h1>
          <p className="xl:mt-[10px] lg:mt-[5px] font-normal xl:text-[16px] lg:text-[14px] xl:leading-[26px] text-white/80">
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>
      <div className="flex-1 flex xl:gap-[25px] lg:gap-3">
        <img
          src={lonceng}
          alt=""
          className="xl:w-[40px] lg:w-6 xl:h-[40px] lg:h-6"
        />
        <div className="xl:w-[294px]">
          <h1 className="font-bold xl:text-[18px] lg:text-[16px] xl:leading-[23px]">
            Medication reminders
          </h1>
          <p className="xl:mt-[10px] lg:mt-[5px] font-normal xl:text-[16px] lg:text-[14px] xl:leading-[26px] text-white/80">
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>
      <div className="flex-1 flex xl:gap-[25px] lg:gap-3">
        <img
          src={cam}
          alt=""
          className="xl:w-[40px] lg:w-6 xl:h-[40px] lg:h-6"
        />
        <div className="xl:w-[294px]">
          <h1 className="font-bold xl:text-[18px] lg:text-[16px] xl:leading-[23px]">
            Virtual consultations
          </h1>
          <p className="xl:mt-[10px] lg:mt-[5px] font-normal xl:text-[16px] lg:text-[14px] xl:leading-[26px] text-white/80">
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
