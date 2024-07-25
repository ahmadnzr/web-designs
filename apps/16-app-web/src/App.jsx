import Hero from "./components/Hero";
import Highlights from "./components/Higlights";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
