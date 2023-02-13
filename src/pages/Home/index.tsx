import React from "react";
import About from "../../components/layout/home/About";
import Contact from "../../components/layout/home/Contact";
import Hero from "../../components/layout/home/Hero";
import Navbar from "../../components/layout/nav/Navbar";
import Portfolio from "../../components/layout/home/Portfolio";
import Footer from "../../components/layout/nav/Footer";

const Home = () => {
  return (
    <div className="bg-gallery-100">
      <header className="fixed top-3 left-0 z-30 w-full md:h-full md:top-0 md:bottom-0 md:left-7  md:w-32">
        <Navbar />
      </header>
      <main className=" w-full h-full">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
