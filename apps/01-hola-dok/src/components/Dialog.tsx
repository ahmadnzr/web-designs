import React from "react";

import photo from "../assets/photo.png";
import quote from "../assets/quote.png";

const Dialog = () => {
  return (
    <div className="hidden md:block absolute top-[70%] right-[50%] lg:bottom-initial xl:top-[218px] lg:top-96 xl:right-[485px] lg:right-72 w-[292px] p-[20px] rounded-[10px] shadow-[0_15px_30px_0_rgba(0,0,0,0.1)] bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={photo} alt="" />
          <span className="ml-[10px] text-[12px] leading-[20px] font-semibold">
            Jane Doe
          </span>
        </div>
        <img src={quote} alt="" />
      </div>
      <p className="mt-[12px] text-[12px] leading-[20px]">
        “The doctor appointment app has been great for me. Scheduling
        appointments and getting medication reminders is much easier, and I love
        the option for virtual consultations. I&apos;d recommend this app to
        others.”
      </p>
    </div>
  );
};

export default Dialog;
