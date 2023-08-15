import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Agency from "./components/Agency";
import Program from "./components/Program";
import Accomodation from "./components/Accomodation";
import { Facilities } from "./components/Facilities";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Agency />
      <Program />
      <Accomodation />
      <Facilities />
    </div>
  );
}

export default App;
