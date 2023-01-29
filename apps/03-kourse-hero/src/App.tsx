import React from "react";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-primary text-white">
      <div className="lg:max-w-[1440px] pt-[58px] pb-[96px] px-[150px] min-h-screen mx-auto relative">
        <Navbar />
        <Hero />
        <Banner />
        <Info />
      </div>
    </div>
  );
}

export default App;
