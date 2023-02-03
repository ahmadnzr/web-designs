import React from "react";
import Backround from "./components/Backround";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import ilustration from "./assets/ilustration.png";

function App() {
  return (
    <div className="min-h-[1024px] relative text-white overflow-x-hidden">
      <div className="absolute top-0 bottom-0 w-full min-h-full z-20">
        <div className="lg:max-w-[1440px] px-[150px] pt-[58px] mx-auto relative">
          <Navbar />
          <Hero />
          <img
            src={ilustration}
            alt=""
            className="absolute top-[43px] right-[-43px] z-30"
          />
        </div>
      </div>
      <Backround />
    </div>
  );
}

export default App;
