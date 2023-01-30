import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Priced from "./components/Priced";

function App() {
  return (
    <div className="bg-gradient-primary min-w-full min-h-screen text-white">
      <div className="container lg:max-w-[1440px] min-h-[1201px] px-10 lg:px-[150px] pt-[57px] mx-auto">
        <Navbar />
        <Hero />
        <Priced />
      </div>
    </div>
  );
}

export default App;
