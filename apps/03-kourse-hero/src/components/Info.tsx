import React from "react";

import load from "../assets/load.png";
import chat from "../assets/chat.png";

const Info = () => {
  return (
    <div className="mt-[148px] flex gap-[30px]">
      <div className="flex-1 flex">
        <div className="p-[13px] w-[50px] h-[50px] bg-black/10">
          <img src={load} alt="" className="h-[24px] w-[24px]" />
        </div>
        <div className="w-[488px] ml-[25px]">
          <h2 className="font-semibold text-[18px] leading-[30px]">
            Self-paced Learning
          </h2>
          <p className="font-normal text-[16px] leading-[30px] text-white/60">
            This feature allows learners to progress through the course at their
            own pace, rather than being tied to a fixed schedule. This can be
            especially useful for learners who have busy schedules or who prefer
            to learn at their own speed.
          </p>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="p-[13px] w-[50px] h-[50px] bg-black/10">
          <img src={chat} alt="" className="h-[24px] w-[24px]" />
        </div>
        <div className="w-[488px] ml-[25px]">
          <h2 className="font-semibold text-[18px] leading-[30px]">
            Instructor support
          </h2>
          <p className="font-normal text-[16px] leading-[30px] text-white/60">
            Providing learners with access to the instructor can be a valuable
            feature, as it allows them to ask questions and get feedback in
            real-time. This could be in the form of office hours, live Q&A
            sessions, or one-on-one consultations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
