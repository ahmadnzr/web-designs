import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Agency from "./components/Agency";
import Program from "./components/Program";
import Accomodation from "./components/Accomodation";
import { Facilities } from "./components/Facilities";
import Review from "./components/Review";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Agency />
      <Program />
      <Accomodation />
      <Facilities />
      <Review />
    </div>
  );
}

export default App;
