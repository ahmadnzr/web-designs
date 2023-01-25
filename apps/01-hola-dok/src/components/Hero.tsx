import React from "react";

const Hero = () => {
  return (
    <div className="mt-[151px] w-[457px] font-dmSans">
      <span className="font-medium text-[48px] leading-[62px]">
        Get the healthcare you need, when you need it.
      </span>
      <p className="mt-[15px] font-normal text-[18px] leading-[30px]">
        Manage all of your healthcare needs in one convenient place – from
        booking appointments to tracking your health history.
      </p>
      <button className="mt-[50px] px-[35px] py-[15px] bg-primary text-white text-[18px] leading-[30px] font-normal">
        Book an Appointment
      </button>
    </div>
  );
};

export default Hero;
