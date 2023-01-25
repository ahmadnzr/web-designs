import React from "react";

import bg from "./assets/bg.png";
import docter from "./assets/docter.png";

import Dialog from "./components/Dialog";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="lg:max-w-[1440px] min-h-[1088px] lg:px-[150px] lg:pt-[58px] mx-auto text-textDark relative">
      <Navbar />
      <Hero />
      <div className="absolute top-[18px] right-[86px] z-0">
        <img src={bg} alt="" />
        <img src={docter} alt="" className="absolute bottom-0 left-[56px]" />
      </div>
      <Dialog />
      <Info />
    </div>
  );
}

export default App;
