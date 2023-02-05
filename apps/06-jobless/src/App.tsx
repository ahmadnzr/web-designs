import React from "react";

import FeaturedJob from "./components/FeaturedJob";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-w-full min-h-screen bg-one">
      <div className="w-full min-h-screen bg-[rgba(247,259,255,0.9)] backdrop-blur-[125px]">
        <div className="container lg:max-w-[1440px] min-h-[1024px] px-5 pt-3 lg:px-[150px] lg:pt-[58px] pb-[58px] mx-auto duration-100">
          <Navbar />
          <Hero />
          <FeaturedJob />
        </div>
      </div>
    </div>
  );
}

export default App;
