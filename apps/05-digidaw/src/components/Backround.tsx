import React from "react";

const Backround = () => {
  return (
    <div className="absolute top-0 bottom-0 w-full z-10">
      <div className="absolute top-0 bottom-0 h-full w-full bg-bgImage"></div>
      <div className="absolute top-0 bottom-0 h-full w-full bg-bgColor backdrop-blur-[125px]"></div>
    </div>
  );
};

export default Backround;
