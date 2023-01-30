import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Priced from "./components/Priced";

function App() {
  return (
    <div className="bg-gradient-primary text-white">
      <div className="lg:max-w-[1440px] min-h-[1201px] px-[150px] pt-[57px] mx-auto">
        <Navbar />
        <Hero />
        <Priced />
      </div>
    </div>
  );
}

export default App;
