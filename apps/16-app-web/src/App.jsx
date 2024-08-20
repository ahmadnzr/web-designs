import Hero from "./components/Hero";
import Highlights from "./components/Higlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import { Feature } from "./components/Feature";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default App;
