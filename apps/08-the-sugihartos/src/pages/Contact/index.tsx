import React from "react";

import CONTACT from "../../assets/text/Contact.png";
import BG1 from "../../assets/bg1.png";
import PHONE from "../../assets/icon/phone-call.png";
import MAIL from "../../assets/icon/mail.png";

const Contact = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="relative h-[121px]">
          <div className="absolute z-0 -left-14">
            <img src={CONTACT} alt="" />
          </div>
          <h1 className="absolute z-10 top-4 font-bold text-[40px] leading-[54px] text-title">
            Contact
          </h1>
        </div>
        <p className="w-[415px] text-[18px] leading-[30px]">
          Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.
        </p>
        <div className="mt-[44px]">
          <div className="flex gap-[30px] items-center">
            <div className="w-[70px] h-[70px] bg-white/5 flex items-center justify-center rounded-md">
              <img src={PHONE} alt="" />
            </div>
            <div className="flex flex-col justify-start gap-[8px]">
              <span className="font-medium text-[16px] leading-[19px]">
                Phone
              </span>
              <span className="font-bold text-[20px] leading-[24px] text-title">
                +62 1234 8921
              </span>
            </div>
          </div>
          <div className="mt-[30px] flex gap-[30px] items-center">
            <div className="w-[70px] h-[70px] bg-white/5 flex items-center justify-center rounded-md">
              <img src={MAIL} alt="" />
            </div>
            <div className="flex flex-col justify-start gap-[8px]">
              <span className="font-medium text-[16px] leading-[19px]">
                Email
              </span>
              <span className="font-bold text-[20px] leading-[24px] text-title">
                support@koktanyasaya.id
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative">
          <img className="absolute" src={BG1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
