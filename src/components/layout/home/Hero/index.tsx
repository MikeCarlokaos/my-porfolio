import heroBg from "../../../../assets/images/Untitled-bg-hero.png";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dark-800 to-dark-900 h-screen w-full">
        <div className="absolute inset-0 h-full w-full flex flex-col text-white justify-center items-center flex-nowrap z-20 gap-y-10 md:gap-y-16">
          <h1 className="text-4xl font-['Orbitron'] text-center md:text-5xl">
            Hi, I'm <span className="text-sunglow-500">Mike Carlo Gonzaga</span>
          </h1>
          <p className="w-full text-lg text-center px-5 md:text-2xl md:px-0 md:w-[500px]">
            A Frontend focused Web Developer building neat and simple yet
            responsive websites
          </p>
          <div>
            <HashLink
              smooth
              to="/#portfolio"
              className="bg-sunglow-500 px-10 py-2 text-xl text-black font-semibold uppercase tracking-wide rounded-lg"
            >
              Portfolio
            </HashLink>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="indicator">
            <span className="arrow"></span>
            <span className="arrow"></span>
            <span className="arrow"></span>
          </div>
        </div>
        <div>
          <img
            src={heroBg}
            alt="hero bg"
            className="absolute inset-0 z-10 opacity-60 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
