import React from "react";
import heroBg from "../../../../assets/images/pattern-bg.png";

type HeroProps = {
  title: string;
  link: string;
};

const Hero = ({ title, link }: HeroProps) => {
  return (
    <section className="w-full h-screen text-center ">
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="w-full h-full"
      >
        <div className="w-full h-full py-32 px-10 md:px-44">
          <div className="w-full h-full flex flex-col items-center justify-center gap-y-5 md:gap-y-12 bg-white/60">
            <h3 className="text-4xl font-semibold md:text-6xl">{title}</h3>
            <p className="w-full font-semibold px-2 md:w-[800px] md:text-xl md:px-0">
              This page contains the case study of {title} which includes the
              Project Overview, Tools Used and Live Links to the official
              product.
            </p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sunglow-500 px-12 py-2 text-xl text-black font-semibold uppercase tracking-wide rounded-lg transition duration-300 ease-in-out hover:shadow-inner hover:shadow-sunglow-500 hover:bg-black/70 hover:text-sunglow-500 hover:font-bold"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
