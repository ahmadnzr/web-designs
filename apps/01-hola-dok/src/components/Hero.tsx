import React from "react";

const Hero = () => {
  return (
    <div className="absolute lg:static mt-[151px] lg:w-[457px] md:w-[50%] w-[80%] font-dmSans z-10">
      <span className="font-medium text-2xl xl:text-[48px] lg:text-[32px] xl:leading-[62px]">
        Get the healthcare you need, when you need it.
      </span>
      <p className="xl:mt-[15px] mt-2 font-normal text-sm lg:text-[18px] lg:leading-[30px]">
        Manage all of your healthcare needs in one convenient place – from
        booking appointments to tracking your health history.
      </p>
      <button className="xl:mt-[50px] mt-8 xl:px-[35px] lg:px-6 px-4 xl:py-[15px] lg:py-3 py-2 bg-primary text-white text-sm lg:text-[18px] lg:leading-[30px] font-normal">
        Book an Appointment
      </button>
    </div>
  );
};

export default Hero;
