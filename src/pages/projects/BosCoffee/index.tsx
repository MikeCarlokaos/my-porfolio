import React from "react";
import Footer from "../../../components/layout/nav/Footer";
import Navbar from "../../../components/layout/nav/Navbar";
import Hero from "../../../components/common/projects/Hero";
import Link from "../../../components/layout/projects/bos-coffee/Link";

const BosCoffee = () => {
  return (
    <div className="bg-gallery-100">
      <header className="fixed top-0 left-0 z-30 w-full md:top-1/2 md:left-4 md:-translate-y-1/2 md:w-32">
        <Navbar />
      </header>
      <main className=" w-full h-full">
        <Hero
          title="Bo's Coffee Website Clone"
          link="https://bos-coffee-website-clone.netlify.app"
        />
        <Link />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BosCoffee;
