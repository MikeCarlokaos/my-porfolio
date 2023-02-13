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
      <header className="fixed top-0 left-0 z-30 w-full md:top-1/2 md:left-4 md:-translate-y-1/2 md:w-32">
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
