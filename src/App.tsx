import React from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
import Navbar from "./components/pages/Navbar";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <div className="bg-gallery-100">
      <div className="sticky top-44  z-10 w-32">
        <Navbar />
      </div>
      <main className="relative -mt-72">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
