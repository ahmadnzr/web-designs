import Hero from "./components/Hero";
import Highlights from "./components/Higlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import { Feature } from "./components/Feature";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
    </main>
  );
}

export default App;
