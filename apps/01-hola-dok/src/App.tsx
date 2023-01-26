import React from "react";

import bg from "./assets/bg.png";
import docter from "./assets/docter.png";

import Dialog from "./components/Dialog";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container pt-3 px-5 xl:max-w-[1440px] min-h-screen xl:min-h-[1088px] lg:min-h-[1010px] xl:px-[150px] lg:px-14 xl:pt-[58px] lg:pt-5 mx-auto text-textDark relative overflow-x-hidden duration-300">
      <Navbar />
      <Hero />
      <div className="absolute min-h-screen lg:min-h-[847px] xl:top-[18px] top-0 -right-20 xl:right-[86px] lg:-right-20 z-0">
        <img src={bg} alt="" className="h-screen lg:h-[847px]" />
        <img
          src={docter}
          alt=""
          className="absolute bottom-0 xl:left-[56px] lg:left-9 lg:h-[750px] right-10 h-[600px]"
        />
      </div>
      <Dialog />
      <Info />
    </div>
  );
}

export default App;
