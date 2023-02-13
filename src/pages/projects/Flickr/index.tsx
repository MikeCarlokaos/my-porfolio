import React from "react";
import Hero from "../../../components/common/projects/Hero";
import Footer from "../../../components/layout/nav/Footer";
import Navbar from "../../../components/layout/nav/Navbar";
import Link from "../../../components/layout/projects/flickr/Link";

const Flickr = () => {
  return (
    <div className="bg-gallery-100">
      <div className="fixed top-0 left-0 z-30 w-full md:top-1/2 md:left-4 md:-translate-y-1/2 md:w-32">
        <Navbar />
      </div>
      <main className=" w-full h-full">
        <Hero
          title="Flickr Website Clone"
          link="https://flicker-website-clone.netlify.app"
        />
        <Link />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Flickr;
